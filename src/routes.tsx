import AboutPage from './pages/AboutPage';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { RouteProp } from './types/models';

const appRoutes: RouteProp[] = [
  {
    name: 'Home',
    path: '/',
    component: <HomePage />
  },
  {
    name: 'About Us',
    path: '/about',
    component: <AboutPage />
  },
  {
    name: 'Contact Us',
    path: '/contact',
    component: <ContactPage />
  },
  {
    name: 'Blog',
    path: '/blog',
    component: <ContactPage />
  },
  {
    name: 'Sign up',
    path: '/sign-in',
    component: <Register />
  },
  {
    name: 'Sign in',
    path: '/sign-up',
    component: <Login />
  }
];

export default appRoutes;
