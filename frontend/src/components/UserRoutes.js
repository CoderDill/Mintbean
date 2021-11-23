import {Routes, Route} from 'react-router-dom'
import ColoringPage from './ColoringPage'
import LandingPage from './LandingPage'
import MyPicturesContainer from './MyPicturesContainer'
export default function UserRoutes(){
    return (
        <Routes>
            <Route path="*" element={<h1>NOT FOUND</h1>}/>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/color" element={<ColoringPage/>}/>
            <Route path="/my-pictures" element={<MyPicturesContainer/>} /> 
        </Routes>
    )
}