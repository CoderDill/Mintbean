import '../styles/Page.css'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getUserColoringsFromAPI } from '../actions/actions'
export default function Page(){
  const colorings = useSelector(store => store.coloringReducer)
  const userId = useSelector(store => store.userReducer.id)
  useEffect(()=>{
    const addSvgs = ()=>{
      for(const [key, value] of Object.entries(colorings)){
          let newSvg = document.createElement('svg')
          newSvg.innerHTML = value
          document.querySelector('.page').appendChild(newSvg)
        }
    }
    addSvgs()
  },[colorings])
  
  useEffect(()=> {
    const getColorings = async()=>{
       const response = await getUserColoringsFromAPI(userId)
       console.log(response)
       for(const image of response){
        const imgData = image.image.data
        const img = new Buffer.from(imgData).toString("ascii")
        console.log(img)
        let newSvg = document.createElement('svg')
        newSvg.innerHTML = img; 
        document.querySelector('.page').appendChild(newSvg)
       }
    }
    getColorings()
  },[userId])
    
    return (  
        <div className="page">
        
        </div>
      );
    
}