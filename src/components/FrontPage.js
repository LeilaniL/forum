import React from 'react';
import PropTypes from 'prop-types';
import Post from '../components/Post.js';
import { Link } from 'react-router-dom';
import Upvote from '../components/Upvote';

function FrontPage(props) {
    return (
        <div>
            <h2>Upvote my awesome post</h2>
            <p>Content is here</p>
            {props.allThePosts.map((post, index) =>
                <Post
                    title={post.title}
                    content={post.content}
                    key={post.id}
                />
            )}
            <Link to="/newpost">Add New Post</Link>
        </div>
    )
}

FrontPage.propTypes = {
    allThePosts: PropTypes.array
}
export default FrontPage;