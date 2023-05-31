import './App.css';
import { useEffect } from 'react';
import AppRouter from './components/AppRouter';

export default function App() {
  useEffect(() => {
    document.title = 'ethanheyrman.dev';
  }, []);
  return (
    <main className='h-full min-h-screen pb-12 bg-cave font-vt323'>
      <div className='container mx-auto p-5'>
        <AppRouter />
      </div>
    </main>
  );
}

