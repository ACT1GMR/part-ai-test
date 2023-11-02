import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Edit from './pages/edit/Edit';
import Home from './pages/home/Home';
import Layout from './pages/layout/Layout';
import NotFound from './pages/layout/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='part-ai-test' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path=':userId' element={<Edit />} />
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

export default function App() {
  return <RouterProvider router={router} />;
}
