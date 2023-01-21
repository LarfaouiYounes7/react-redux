import logo from './logo.svg';
import './App.css';
import Conteur from './components/Conteur';
import LoginPage from './components/LoginPage';
import {useSelector} from 'react-redux'
function App() {
  const userAcc = useSelector((state)=> state.login)
  
  return (
    <div className="App">
        {
          (userAcc.logged ? <Conteur/> : <LoginPage/> )
        }
        
    </div>
  );
}

export default App;
