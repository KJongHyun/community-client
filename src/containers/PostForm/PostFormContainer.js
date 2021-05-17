import React, { Component } from 'react';
import { PostFormWrapper } from '../../components';
import { enrollPost } from '../../services/post';

class PostFormContainer extends Component {
  state = {
    post: {
      title: '',
      contents: '',
    },
  };

  handleTitleOnChange = (event) => {
    this.setState({
      post: {
        [event.target.name]: event.target.value,
        contents: this.state.post.contents,
      },
    });
  };

  handleContentsOnChange = (event) => {
    this.setState({
      post: {
        title: this.state.post.title,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleEnrollClick = (event) => {
    enrollPost(this.state.post);
  };

  render() {
    return (
      <div>
        <PostFormWrapper
          post={this.state.post}
          titleOnChange={this.handleTitleOnChange}
          contentsOnChange={this.handleContentsOnChange}
          onEnrollClick={this.handleEnrollClick}
        />
      </div>
    );
  }
}

export default PostFormContainer;
