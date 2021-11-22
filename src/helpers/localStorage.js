import { useDispatch } from "react-redux";

export default function CheckForLSColorings(setLoading){
    
    const dispatch = useDispatch(); 
    const reqSvgs = require.context('../assets', true, /\.svg$/);
    const allSvgFilepaths = reqSvgs.keys();
    let paths = []
    allSvgFilepaths.forEach(path=> {
        paths.push(path.slice(2).slice(0, -4))
    } )
    paths.forEach(path => {
        let value = window.localStorage.getItem(path) || null
        if(value) {
            dispatch({type:"ADD_COLORING_TO_STATE", name:path, coloring:value})
        }
    })
    
}