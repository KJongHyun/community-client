import React from 'react';
import PageTemplate from '../../components/Base/PageTemplate';
import { PostListContainer } from '../../containers';

const PostListPage = () => {
  return (
    <div>
      <PageTemplate>
        <PostListContainer />
      </PageTemplate>
    </div>
  );
};

export default PostListPage;
