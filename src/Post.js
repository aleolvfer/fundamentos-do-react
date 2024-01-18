import React from 'react';
import PropTypes from 'prop-types';
import PostHeader  from './PostHeader';
import Button from './Button';

export default function Post(props) {

  if (props.post.read) {
    return (
      <>
        <h2>{props.post.title} já foi lido</h2>
        <Button
          onClick={() => props.onRemove(props.post.id)}
          post={{
            id: props.post.id,
          }}
        >
          <span>Remover</span>
        </Button>
        <hr />
      </>
    )
  }
  
  return (
    <>
      <article>
        <PostHeader
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
        />
        <span>Media: {props.post.likes / 2}</span>
        <br />
        {props.children}
        <br />
      </article>
      <hr />
      <br />
    </>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired
};
