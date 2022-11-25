import React, { useState } from 'react';
import Button from './UI/button/Button';
import Input from './UI/input/Input';

const PostForm = ({ createPost }) => {
  const [newPost, setNewPost] = useState({
    id: Date.now(),
    title: '',
    body: '',
  });

  const addNewPost = (evt) => {
    evt.preventDefault();
    createPost(newPost);
    setNewPost({
      id: Date.now(),
      title: '',
      body: '',
    });
  };

  return (
    <form>
      <Input
        type="text"
        placeholder="Название поста"
        value={newPost.title}
        onChange={(evt) =>
          setNewPost({
            ...newPost,
            title: evt.target.value,
          })
        }
      />
      <Input
        type="text"
        placeholder="Описание поста"
        value={newPost.body}
        onChange={(evt) =>
          setNewPost({
            ...newPost,
            body: evt.target.value,
          })
        }
      />
      <Button onClick={addNewPost}>Создать</Button>
    </form>
  );
};

export default PostForm;
