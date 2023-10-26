/**
    * @description      : 
    * @author           : DHANUSH
    * @group            : 
    * @created          : 22/10/2023 - 12:13:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/10/2023
    * - Author          : DHANUSH
    * - Modification    : 
**/

import { Routes, Route } from 'react-router-dom';
import LoginPage from './Views/LandingPages/Login'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
