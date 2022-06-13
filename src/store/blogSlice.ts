import { createSlice } from '@reduxjs/toolkit';
import { Blog } from '../types/models';

export interface BlogState {
  blogs: Blog[] | null;
}

const initialState: BlogState = {
  blogs: null
};

export const blogSlice = createSlice({
  name: 'BlogSlice',
  initialState,
  reducers: {
    addBlog: (state) => {

    },
    removeBlog: (state) => {

    },
    addComment: (state) => {

    },
    removeComment: (state) => {

    }
  }
});

export const { addBlog, removeBlog, addComment, removeComment } = blogSlice.actions;

export default blogSlice.reducer;
