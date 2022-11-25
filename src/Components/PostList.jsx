import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, removePost }) => {
  // console.log(posts)
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.length !== 0 ? (
        <TransitionGroup>
          {posts.map((post, idx) => (
            <CSSTransition
              key={post.id}
              // nodeRef={nodeRef}
              timeout={500}
              classNames="post"
            >
              <PostItem post={post} number={post.id} removePost={removePost} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Пусто :(</h1>
      )}
    </div>
  );
};

export default PostList;
