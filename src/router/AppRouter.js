import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Description from '../components/Description';

import Information from '../components/Information';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Information />} />
                    <Route path="/description" element={<Description />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;