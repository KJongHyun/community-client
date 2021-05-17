import React from 'react';
import { useParams } from 'react-router';
import PageTemplate from '../../components/Base/PageTemplate';
import PostContainer from '../../containers/PostForm/PostContainer';

const PostPage = () => {
  const { postId } = useParams();
  return (
    <PageTemplate>
      <PostContainer postId={postId} />
    </PageTemplate>
  );
};

export default PostPage;
