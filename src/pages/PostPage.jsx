import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../Components/UI/loader/Loader';

const PostPage = (props) => {
  const { postId } = useParams();
  const { state } = useLocation();
  const [post, setPost] = useState(state || {});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, postLoadingError] = useFetching(
    async (id) => {
      const resp = await PostService.getById(id);
      setPost(resp.data);
    }
  );
  const [fetchComments, isCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const resp = await PostService.getComments(id);
      setComments(resp.data);
    }
  );

  useEffect(() => {
    if (!state) {
      fetchPostById(postId);
    }
    fetchComments(postId);
  }, [postId, state]);

  return (
    <div>
      {postLoadingError && <h1>Ошибка загрузки поста: {postLoadingError}</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <br />
          </div>
        </div>
      )}
      {commentsError && <h1>Ошибка загрузки комментариев: {commentsError}</h1>}
      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 style={{ marginBottom: '20px' }}>Комментарии:</h1>
          <ul>
            {comments.map((comment) => (
              <li
                style={{
                  listStyle: 'none',
                  border: '1px solid black',
                  marginBottom: '15px',
                  padding: '15px',
                }}
                key={comment.id}
              >
                <h2>{comment.email}</h2>
                <p>{comment.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PostPage;
