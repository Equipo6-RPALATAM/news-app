import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components'
import { Home, NewsDetail, NotFound, Profile } from '../pages'
// import { loader as newsLoader } from '../pages/News'
// import queryClient from '../queryClient'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        // loader: newsLoader(queryClient),
        element: <Home />,
        // errorElement: <NotFound />,
      },
      {
        path: '/news/:slug',
        element: <NewsDetail />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
])
