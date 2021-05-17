import React from 'react';
import { Post } from '..';
import PostCard from '../Post/PostCard';

const PostList = ({ posts }) => {
  const postCardList = posts.map((post, index) => {
    return <PostCard title={post.title} contents={post.contents} key={index} />;
  });
  return <div>{postCardList}</div>;
};

export default PostList;
