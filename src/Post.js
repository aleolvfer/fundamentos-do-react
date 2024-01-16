import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {

  if (props.post.read) {
    return (
      <>
        <h2>{props.post.title} já foi lido</h2>
        <hr />
      </>
    )
  }

  return (
    <>
      <article>
        {props.post.read && <s><strong>{props.post.title}</strong></s>}
        {!props.post.read && <strong>{props.post.title}</strong>}
        <h3>{props.post.subtitle}</h3>
        <span>Media: {props.post.likes / 2}</span>
        <br />
        {props.children}
        <br />
        <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
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
