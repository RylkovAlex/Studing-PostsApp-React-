import React from 'react';
import { Navigate } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import PostListPage from '../pages/PostListPage';
import PostPage from '../pages/PostPage';
import Navbar from '../Components/Navbar';
import LoginPage from '../pages/LoginPage';

export const privateRoutes = [
  {
    path: '/',
    element: <Navigate to="/posts" />,
  },
  {
    path: '/posts',
    exact: true,
    element: (
      <>
        <Navbar />
        <PostListPage />
      </>
    ),
  },
  {
    path: '/posts/:postId',
    exact: true,
    element: (
      <>
        <Navbar />
        <PostPage />
      </>
    ),
  },
  {
    path: '/about',
    exact: true,
    element: (
      <>
        <Navbar />
        <AboutPage />
      </>
    ),
  },
  {
    path: '*',
    loader: () => {
      throw new Error('Bad Request 404', { status: 400 });
    },
    errorElement: <ErrorPage />,
  },
];

export const publicRoutes = [
  {
    path: '/login',
    exact: true,
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
];
