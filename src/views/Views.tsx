import { lazy } from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';

const Example = lazy(() => import('./Example'));

const Views = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Example />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default Views;
