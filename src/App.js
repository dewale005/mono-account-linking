import { Route, Routes,  Redirect } from 'react-router-dom';
import Authentications from './pages/Authentication/Authentications';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Authentications />} />
    </Routes>
  );
}

export default App;
