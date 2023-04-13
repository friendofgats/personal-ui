import './App.css';
import AppRouter from './components/AppRouter';

export default function App() {
  return (
    <main className='h-screen bg-cave font-vt323'>
      <div className='container mx-auto flex flex-wrap items-center pt-5'>
        <AppRouter />
      </div>
    </main>
  );
}

