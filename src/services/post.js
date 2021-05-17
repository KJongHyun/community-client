import axios from 'axios';

export function enrollPost(post) {
  axios.post(`http://localhost:8080/posts`, post);
}

export function getPosts() {
  return axios.get(`http://localhost:8080/posts`);
}

export function readPost(postId) {
  return axios.get(`http://localhost:8080/posts/${postId}`);
}
