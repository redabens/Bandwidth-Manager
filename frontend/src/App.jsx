import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import NetTopology from './components/NetTopology';
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import BandTrackPage from "./pages/BandTrackPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/bandtrack" element={<BandTrackPage />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
    return(
      <div className="App">
        <RouterProvider router={router} />
    </div>
)
};
export default App;