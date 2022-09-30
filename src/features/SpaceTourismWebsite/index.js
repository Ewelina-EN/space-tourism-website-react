import Home from "../SpaceTourismWebsite/home/home";
import Destination from "../SpaceTourismWebsite/destination/destination";
import Crew from "../SpaceTourismWebsite/crew/crew";
import Technology from "../SpaceTourismWebsite/technology/technology";
import { Route, Routes } from "react-router-dom";
import Europe from "../SpaceTourismWebsite/destination/pages/europe";
import Mars from "../SpaceTourismWebsite/destination/pages/mars";
import Titan from "../SpaceTourismWebsite/destination/pages/titan";
import Specialist from "../SpaceTourismWebsite/crew/pages/specialist";
import Pilot from "../SpaceTourismWebsite/crew/pages/pilot";
import Engineer from "../SpaceTourismWebsite/crew/pages/engineer";
import Port from "../SpaceTourismWebsite/technology/pages/port";
import Capsule from "../SpaceTourismWebsite/technology/pages/capsule";

export const SpaceTourismWebsite = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/space-tourism-website-react" element={<Home />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/destination/mars" element={<Mars />} />
                <Route path="/destination/europe" element={<Europe />} />
                <Route path="/destination/titan" element={<Titan />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/crew/specialist" element={<Specialist />} />
                <Route path="/crew/pilot" element={<Pilot />} />
                <Route path="/crew/engineer" element={<Engineer />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/technology/port" element={<Port />} />
                <Route path="/technology/capsule" element={<Capsule />} />
            </Routes>
        </>
    );
};