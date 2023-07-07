import axios from 'axios'
import React, { useEffect } from 'react'

export default function AxiosTutorial() {
    useEffect(()=>{
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=b370af09d6aa0fc72404af205ae1ac45")
        .then((response)=>{
            console.log(response)
        })

    },[])

    
  return (
    <div>
      
    </div>
  )
}
