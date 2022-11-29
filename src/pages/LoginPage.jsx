import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/UI/button/Button';
import Input from '../Components/UI/input/Input';
import { AuthContext } from '../context';

const LoginPage = (props) => {
  const { setIsAuth } = useContext(AuthContext);
  const redirect = useNavigate();
  const login = (evt) => {
    evt.preventDefault();
    setIsAuth(true);
    redirect('/');
  };
  return (
    <div>
      <h1>Страница входа в систему</h1>
      <form>
        <Input type="text" placeholder="Введите логин" name="" id="" />
        <Input type="password" placeholder="Введите пароль" name="" id="" />
        <Button onClick={login}>Войти</Button>
      </form>
    </div>
  );
};

export default LoginPage;
