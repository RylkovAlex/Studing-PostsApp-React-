import React from 'react';
import Button from './UI/button/Button';
import { useNavigate } from 'react-router-dom';

const btn_style = { minWidth: '100px', margin: '5px' };

const PostItem = ({ post, removePost, number, lastRef }) => {
  const navigate = useNavigate();
  return (
    <div className="post" ref={lastRef}>
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div className="">{post.body}</div>
      </div>
      <div className="post__btns">
        <Button
          style={btn_style}
          onClick={() => navigate(`${post.id}`, { state: post })}
        >
          Открыть
        </Button>
        <Button style={btn_style} onClick={() => removePost(post)}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
