import Home from './home/home';
import Destination from './destination/destination'
import Crew from './crew/crew'
import Technology from "./technology/technology"
import { Route, Routes } from "react-router-dom"
import Europe from './destination/pages/europe';
import Mars from './destination/pages/mars';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/space-tourism-website-react" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/mars" element={<Mars />} />
        <Route path="/destination/europe" element={<Europe />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
