import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  // redux-thunk lets us return a function
  return function (dispatch, getState) {
    const promise = jsonPlaceholder.get('/posts');

    return {
      type: 'FETCH_POSTS',
      payload: promise,
    };
  }
};
