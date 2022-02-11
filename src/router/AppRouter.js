import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Information from '../components/Information';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/info" element={<Information />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;