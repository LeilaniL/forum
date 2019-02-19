import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function CreatePost(props) {
    let _title = null;
    let _content = null;


    function handlePostSubmission(event) {
        event.preventDefault();
        props.onPostCreation({
            title: _title.value,
            content: _content.value,
            id: v4()
        });
        console.log(_title, _content);
        _title.value = '';
        _content.value = '';
    }
    return (
        <div>
            <form onSubmit={handlePostSubmission}>

                <input
                    id='title'
                    type='text'
                    placeholder='Title of Post'
                    ref={(input) => { _title = input; }} />
                <br />
                <textarea
                    id='content'
                    placeholder='Link to Content'
                    ref={(textarea) => { _content = textarea; }} />
                <br />
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

CreatePost.propTypes = {
    onPostCreation: PropTypes.func
}

export default CreatePost;

