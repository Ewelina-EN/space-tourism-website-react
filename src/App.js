import Home from './Home/Home';
import Destination from './Destination/Destination'
import Crew from './Crew/Crew'
import Technology from "./Technology/Technology"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/space-tourism-website-react" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
