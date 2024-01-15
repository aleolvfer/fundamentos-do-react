import React from 'react';

import Post from './Post';
import Header from './Header';

const array = [
  {
    title: 'Titulo 1',
    subtitle: 'Subtituloo 1'
  },
  {
    title: 'Titulo 2',
    subtitle: 'Subtituloo 2'
  },
  {
    title: 'Titulo 3',
    subtitle: 'Subtituloo 3'
  },
]
let countPost = 0;

export default function App() {
  return (
    <>
    <Header title="Hello World!!!">
      <h2>Este é um componente passado via <i>prop children</i></h2>
    </Header>
      {
        array.map((item, index) => {
          countPost++;
          return (
          <React.Fragment key={countPost}>
            <Post
              likes={20}
              post={{
                title:item.title,
                subtitle:item.subtitle
              }}
            >
              <p>Descrição {index+1}</p>
            </Post>
          </React.Fragment>
          )
        })
      }

    </>
  )
}