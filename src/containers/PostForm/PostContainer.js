import React, { Component } from 'react';
import { readPost } from '../../services/post';

class PostContainer extends Component {
  state = {
    title: '',
    contents: '',
    userId: 0,
    id: 0,
  };

  handlePost = async (postId) => {
    const post = await readPost(postId);
    console.log('post -> ', post.data);
    const { title, contents, userId, id } = post.data;
    this.setState({
      title,
      contents,
      userId,
      id,
    });
  };

  componentDidMount() {
    const { postId } = this.props;
    console.log('postId -> ', postId);
    this.handlePost(postId);
  }

  render() {
    const { title, contents, userId, id } = this.state;
    return <div>{title}</div>;
  }
}

export default PostContainer;
