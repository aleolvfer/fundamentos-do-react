import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';
import { func } from 'prop-types';

export default function App() {
  const [posts, setPosts] = useState([
  {
    id: Math.random(),
    title: 'Titulo 1',
    subtitle: 'Subtituloo 1'
  },
  {
    id: Math.random(),
    title: 'Titulo 2',
    subtitle: 'Subtituloo 2'
  },
  {
    id: Math.random(),
    title: 'Titulo 3',
    subtitle: 'Subtituloo 3'
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
              likes={20}
              onRemove={handleRemove}
              post={{
                id: post.id,
                title:post.title,
                subtitle:post.subtitle
              }}
            >
              <p>Descrição {index+1}</p>
            </Post>
          )
        })
      }

    </>
  )
}