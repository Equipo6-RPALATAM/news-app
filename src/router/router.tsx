import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components'
import { News, NewsDetail } from '../pages'
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
        element: <News />,
        errorElement: <div>Algo salió mal</div>,
      },
      {
        path: ':slug',
        element: <NewsDetail />,
      },
    ],
  },
])
