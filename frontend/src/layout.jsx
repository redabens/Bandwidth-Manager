import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import NetTopology from './components/NetTopology'

const RoutePage = () => {
    return(
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<DashboardPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/node" element={<NetTopology />}/>

          </Routes>
        </Router>
    </div>
)
};
export default RoutePage;