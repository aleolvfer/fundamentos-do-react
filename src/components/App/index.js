import React, { useState } from 'react'

import Post from '../Post';
import Header from '../Header';
import Button from '../Button';
import { ThemeProvider } from '../../context/ThemeContext';

import { Title } from './styles';

export default function App() {

  const [posts, setPosts] = useState([
  {
    id: Math.random(),
    title: 'Titulo 1',
    subtitle: 'Subtituloo 1',
    likes: 20,
    read: false,
    removed: false,
  },
  {
    id: Math.random(),
    title: 'Titulo 2',
    subtitle: 'Subtituloo 2',
    likes: 20,
    read: true,
    removed: false,
  },
  {
    id: Math.random(),
    title: 'Titulo 3',
    subtitle: 'Subtituloo 3',
    likes: 20,
    read: false,
    removed: false,
  },
]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Novo titulo ${prevState.length + 1}`,
        subtitle: 'Novo subtitle',
        likes: 20,
        read: prevState.length % 2 === 0 ? false : true,
      }
    ]);
  }

  function handleRemove(postId) {
    setPosts((prevState) => (
      prevState.map(
        post => (
          post.id === postId
          ? { ...post, removed: true }
          : post
        )
      )
    ));
  }

  return (
    <ThemeProvider>
      <Header 
      >
        <Title>Este é um componente passado via <i>prop children</i></Title>
        <Button
          onClick={handleRefresh}
        >
          Atualizar
        </Button>
      </Header>
      {
        posts.map((post, index) => {
          return (
            <Post
              key={post.id}
              onRemove={handleRemove}
              post={post}
            >
              'children'
            </Post>
          )
        })
      }
    </ThemeProvider>
  )
}