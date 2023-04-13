import './App.css';
import AppRouter from './components/AppRouter';

export default function App() {
  return (
    <main className='min-h-screen bg-cave font-vt323'>
      <div className='container mx-auto flex flex-col items-center p-5'>
        <AppRouter />
      </div>
    </main>
  );
}

