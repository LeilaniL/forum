import React from 'react';
import PropTypes from 'prop-types';
import Post from '../components/Post.js';

function FrontPage(props) {
    return (
        <div>
            <hr />
            {props.allThePosts.map((post, index) =>
                <Post
                    title={post.title}
                    content={post.content}
                    key={post.id} />
            )}

        </div>
    )
}

FrontPage.propTypes = {
    allThePosts: PropTypes.array
}
export default FrontPage;