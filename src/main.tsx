import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import About from './pages/Main/About.tsx'
import Contacts from './pages/Contacts/Contacts.tsx'
import Media from './pages/Media/Media.tsx'
import Reviews from './pages/Reviews/Reviews.tsx'
import Tariffs from './pages/Tariffs/Tariffs.tsx'
import News from './pages/News/News.tsx'

import './main.css'
import '@radix-ui/themes/styles.css';

import { Theme } from '@radix-ui/themes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <About />,
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: 'media',
        element: <Media />
      },
      {
        path: 'tariffs',
        element: <Tariffs />
      },
      {
        path: 'reviews',
        element: <Reviews />
      },
      {
        path: 'news',
        element: <News />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
)
