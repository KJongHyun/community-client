import React, { Component } from 'react';
import { PostList } from '../../components';
import { getPosts } from '../../services/post';

class PostListContainer extends Component {
  state = {
    posts: [],
  };
  handlePosts = async () => {
    const response = await getPosts();
    console.log('data -> ', response.data.list);
    const { posts } = this.state;
    this.setState({
      posts: posts.concat(response.data.list),
    });
  };

  componentDidMount() {
    this.handlePosts();
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <PostList posts={posts} />
      </div>
    );
  }
}

export default PostListContainer;
