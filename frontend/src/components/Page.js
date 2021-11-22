import '../styles/Page.css'
import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { getUserColoringsFromAPI } from '../actions/actions'
export default function Page(){
  const colorings = useSelector(store => store.coloringReducer)
  const userId = useSelector(store => store.userReducer.id)
  const [isLoading, setLoading] = useState(true)
  useEffect(()=>{
    const addSvgs = ()=>{
      for(const [key, value] of Object.entries(colorings)){
          let newSvg = document.createElement('svg')
          console.log(value)
          newSvg.innerHTML = value
          document.querySelector('.page').appendChild(newSvg)
        }
    }
    addSvgs()
  },[colorings])
  useEffect(()=> {
    const getColorings = async()=>{
       const response = getUserColoringsFromAPI(userId)
       console.log(response.length)
    }
    getColorings()
  },[userId])
    
    return (  
        <div className="page">
        
        </div>
      );
    
}