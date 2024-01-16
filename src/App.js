import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';
import { func } from 'prop-types';

export default function App() {
  const [posts, setPosts] = useState([
  {
    id: Math.random(),
    title: 'Titulo 1',
    subtitle: 'Subtituloo 1',
    likes: 20,
    read: false
  },
  {
    id: Math.random(),
    title: 'Titulo 2',
    subtitle: 'Subtituloo 2',
    likes: 20,
    read: true
  },
  {
    id: Math.random(),
    title: 'Titulo 3',
    subtitle: 'Subtituloo 3',
    likes: 20,
    read: false
  },
]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Novo titulo ${prevState.length + 1}`,
        subtitle: 'Novo subtitle'
      }
    ]);
  }

  function handleRemove(postId) {
    setPosts((prevState) => (
      prevState.filter((post) => post.id !== postId )
    ));
  }

  return (
    <>
    <Header title="Hello World!!!">
      <h2>Este é um componente passado via <i>prop children</i></h2>
      <button onClick={handleRefresh}>Atualizar</button>
    </Header>
      {
        posts.map((post, index) => {
          return (
            <Post
              key={post.id}
              onRemove={handleRemove}
              post={post}
            >
              <span>Descrição {index+1}</span>
            </Post>
          )
        })
      }

    </>
  )
}