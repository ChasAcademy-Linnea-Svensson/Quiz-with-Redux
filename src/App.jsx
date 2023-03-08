import { Provider } from 'hooks-for-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Quiz from './components/Quiz';

//lägg till highscore
//lägg till olika spelare
//gör designen snygg
//ändra så nya games hamnar först?
//tomma fält handler

function App() {
  return (
    <Router>
      <Provider>
        <div className='flex flex-col items-center px-16 bg-gradient-to-b from-[rgba(48,38,140,1)] via-[rgba(48,38,140,1)] to-[rgba(160,22,167,1)] h-[100vh]'>
          <nav className='absolute top-0  flex justify-center gap-8 py-6 mb-16 bg-gray-800 w-[100vw]'>
            <NavLink
              to='/admin'
              className='flex items-center justify-center h-10 w-32 bg-slate-300 rounded-lg'
            >
              Admin
            </NavLink>
            <NavLink
              to='quiz'
              className='flex items-center justify-center h-10 w-32 bg-slate-300 rounded-lg'
            >
              Quiz
            </NavLink>
          </nav>
          <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/quiz' element={<Quiz />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
