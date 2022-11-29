import { useCallback, useEffect, useRef, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../Components/PostFilter';
import PostForm from '../Components/PostForm';
import PostList from '../Components/PostList';
import Button from '../Components/UI/button/Button';
import Loader from '../Components/UI/loader/Loader';
import Modal from '../Components/UI/modal/Modal';
import Pagination from '../Components/UI/pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import { usePagination } from '../hooks/usePagination';
import { usePosts } from '../hooks/usePosts';
import '../styles/app.css';

function PostListPage() {
  const [posts, setPosts] = useState([]);
  const [postsTotalCount, setPostsTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [scroll, setScroll] = useState(false);
  const observer = {};

  const { currentPage, setCurrentPage, pages } = usePagination(
    postsTotalCount,
    limit,
    1
  );

  const refSetIntersectionObserver = useCallback(
    (node) => {
      console.log(scroll);
      console.log(posts.length);
      if (!scroll) return;
      if (node !== null) {
        observer.current = new IntersectionObserver((entries) => {
          const el = entries[0];
          if (el.isIntersecting && currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
            observer.current.disconnect();
            observer.current.unobserve(node);
            console.log(currentPage);
          }
        });
        observer.current.observe(node);
      }
    },
    [scroll, posts]
  );

  const [loadPosts, isPostsLoading, isPostsLoadingError] = useFetching(
    async () => {
      const { data, headers } = await PostService.getAll(limit, currentPage);
      const postsCount = +headers['x-total-count'];
      if (scroll) {
        setPosts([...posts, ...data]);
      } else {
        setPosts(data);
      }
      setPostsTotalCount(postsCount);
    }
  );

  useEffect(() => {
    loadPosts(setPosts);
  }, [currentPage, limit]);

  const [filter, setFilter] = useState({
    sortBy: null,
    searchQuery: '',
  });

  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => post.id !== p.id));
  };

  const postsToRender = usePosts(posts, filter);

  return (
    <div className="page">
      <Button onClick={() => setModal(!modal)}>Создать пост</Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </Modal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoadingError && (
        <h1>Ошибка загрузки постов: {isPostsLoadingError}</h1>
      )}
      {isPostsLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <Loader />
        </div>
      )}
      <PostList
        title={'Список постов'}
        posts={postsToRender}
        removePost={removePost}
        lastRef={refSetIntersectionObserver}
      />
      {/* <div className="" ref={lastElement} style={{ height: '20px' }}></div> */}
      {!scroll && (
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onClick={setCurrentPage}
          limit={limit}
          setLimit={setLimit}
          setCurrentPage={setCurrentPage}
          totalCount={postsTotalCount}
          setScroll={setScroll}
        />
      )}
    </div>
  );
}

export default PostListPage;
