import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {

    return (
        <div>
            <h2>Upvote my awesome post</h2>
            <p>Content is here</p>
            <h3>{props.title} </h3>
            <p>{props.content} </p>
        </div>
    )
}

Post.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
};

export default Post;