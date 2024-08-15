import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { MovieCreate } from '../pages/MovieCreate'
import { MoviePreview } from '../pages/MoviePreview'
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/create' element={<MovieCreate />} />
            <Route path='/movie/preview/:id' element={<MoviePreview />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    );
}