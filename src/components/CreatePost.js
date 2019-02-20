import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

function CreatePost(props) {
    // let postFormStyles = {
    //     color: 'blue',
    // }
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
                    size={50}
                    placeholder='Title of Post'
                    ref={(input) => { _title = input; }} />
                <br />
                <textarea
                    id='content'
                    placeholder='Link to Content'
                    rows='30'
                    cols='50'
                    ref={(textarea) => { _content = textarea; }} />
                <br />
                <button type='submit'>Post</button>
                <Link to="/">Back</Link>
            </form>
        </div>
    )
}

CreatePost.propTypes = {
    onPostCreation: PropTypes.func
}

export default CreatePost;

