import Layout from "./Layout.jsx";

import Homepage from "./Homepage";

import Quote from "./Quote";

import About from "./About";

import MarineTransport from "./MarineTransport";

import AutoTransport from "./AutoTransport";

import HeavyEquipment from "./HeavyEquipment";

import FreightLogistics from "./FreightLogistics";

import AirCargo from "./AirCargo";

import SpecializedTransport from "./SpecializedTransport";

import FAQ from "./FAQ";

import Contact from "./Contact";

import Blog from "./Blog";

import YachtTransport from "./YachtTransport";

import OversizeLoadTransport from "./OversizeLoadTransport";

import BlogPostPage from "./BlogPostPage";

import TrackShipment from "./TrackShipment";

import OurEquipment from "./OurEquipment";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Homepage: Homepage,
    
    Quote: Quote,
    
    About: About,
    
    MarineTransport: MarineTransport,
    
    AutoTransport: AutoTransport,
    
    HeavyEquipment: HeavyEquipment,
    
    FreightLogistics: FreightLogistics,
    
    AirCargo: AirCargo,
    
    SpecializedTransport: SpecializedTransport,
    
    FAQ: FAQ,
    
    Contact: Contact,
    
    Blog: Blog,
    
    YachtTransport: YachtTransport,
    
    OversizeLoadTransport: OversizeLoadTransport,
    
    BlogPostPage: BlogPostPage,
    
    TrackShipment: TrackShipment,
    
    OurEquipment: OurEquipment,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Homepage />} />
                
                
                <Route path="/Homepage" element={<Homepage />} />
                
                <Route path="/Quote" element={<Quote />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/MarineTransport" element={<MarineTransport />} />
                
                <Route path="/AutoTransport" element={<AutoTransport />} />
                
                <Route path="/HeavyEquipment" element={<HeavyEquipment />} />
                
                <Route path="/FreightLogistics" element={<FreightLogistics />} />
                
                <Route path="/AirCargo" element={<AirCargo />} />
                
                <Route path="/SpecializedTransport" element={<SpecializedTransport />} />
                
                <Route path="/FAQ" element={<FAQ />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Blog" element={<Blog />} />
                
                <Route path="/YachtTransport" element={<YachtTransport />} />
                
                <Route path="/OversizeLoadTransport" element={<OversizeLoadTransport />} />
                
                <Route path="/BlogPostPage" element={<BlogPostPage />} />
                
                <Route path="/TrackShipment" element={<TrackShipment />} />
                
                <Route path="/OurEquipment" element={<OurEquipment />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}