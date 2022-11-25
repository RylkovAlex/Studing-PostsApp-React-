import React from 'react';
import Button from './UI/button/Button';

const PostItem = ({ post, removePost, number }) => {
  // console.log(post);
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div className="">{post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => removePost(post)}>Удалить</Button>
      </div>
    </div>
  );
};

export default PostItem;
