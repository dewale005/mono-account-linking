import { Route, Routes,  Redirect } from 'react-router-dom';
import LoginPage from './components/Login/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
