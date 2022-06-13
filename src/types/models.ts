import React from 'react';

export interface Blog {
  title: string;
  body: string;
  comments: Comment[];
  tags: [];
}

export interface Comment {
  user: User;
  comment: string;
}

export interface User {
  username: string;
}

export interface RouteProp {
  name: string;
  component: React.ReactNode;
  path: string;
};
