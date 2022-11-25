import { useEffect, useState } from 'react';
import PostService from './API/PostService';
import PostFilter from './Components/PostFilter';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import Button from './Components/UI/button/Button';
import Loader from './Components/UI/loader/Loader';
import Modal from './Components/UI/modal/Modal';
import Pagination from './Components/UI/pagination/Pagination';
import { useFetching } from './hooks/useFetching';
import { usePagination } from './hooks/usePagination';
import { usePosts } from './hooks/usePosts';
import './styles/app.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [postsTotalCount, setPostsTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);

  const { currentPage, setCurrentPage, pages } = usePagination(
    postsTotalCount,
    limit,
    1
  );

  const [loadPosts, isPostsLoading, isPostsLoadingError] = useFetching(
    async () => {
      const { data: posts, headers } = await PostService.getAll(
        limit,
        currentPage
      );
      const postsCount = +headers['x-total-count'];
      setPosts(posts);
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
    <div className="App">
      <Button onClick={() => setModal(!modal)}>Создать пост</Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </Modal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoadingError && (
        <h1>Ошибка загрузки постов: {isPostsLoadingError}</h1>
      )}
      {isPostsLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          title={'Список постов'}
          posts={postsToRender}
          removePost={removePost}
        />
      )}
      <Pagination
        pages={pages}
        currentPage={currentPage}
        onClick={setCurrentPage}
        limit={limit}
        setLimit={setLimit}
        setCurrentPage={setCurrentPage}
        totalCount={postsTotalCount}
      />
    </div>
  );
}

export default App;
