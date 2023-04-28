import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/containers/HomePage';
import BlogPage from './components/containers/BlogPage';
import BlogPost from './components/containers/BlogPost';
import NotFoundPage from './components/containers/NotFoundPage';
import Menu from './components/containers/Menu';
import ConfirmationPage from './components/containers/ConfirmationPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/confirmation" element={<ConfirmationPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
