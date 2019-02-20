import React from 'react';
import PropTypes from 'prop-types';
import Upvote from './Upvote';

function Post(props) {

    return (
        <div>
            <h3>{props.title} </h3>
            <p>{props.content} </p>

            <Upvote postObject={this} />
        </div>
    )
}

Post.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,

};

export default Post;