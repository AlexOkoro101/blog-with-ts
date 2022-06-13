import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/default/DefaultLayout';
function App() {
  return (
    <Routes>
      <Route path='/*' element={<DefaultLayout />}></Route>
    </Routes>
  );
};

export default App;
