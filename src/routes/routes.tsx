import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import WhistListDetail from '../pages/whistlistDetail';
import WhistList from '../pages/whistlist';
import Owned from '../pages/owned';
import History from '../pages/history';
import Settings from '../pages/settings';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/whistList" element={<WhistList/>} />
                <Route  path="/WhistListDetail" element={<WhistListDetail/>} />
                <Route  path="/owned" element={<Owned/>} />
                <Route  path="/history" element={<History/>} />
                <Route  path="/settings" element={<Settings/>} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;