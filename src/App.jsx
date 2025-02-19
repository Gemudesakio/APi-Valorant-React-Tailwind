import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import { useEffect, useState } from 'react'


async function FetchApi(url, setItem){
  try {
    const response = await fetch(url)
    const data = await response.json()
   
    
    setItem(data)
   
  } catch (error) {
    console.error("Error fetching API", error);
  }
}




export default function App(){

    const [item, setItem] = useState([])
    
    useEffect(()=>{
        FetchApi('https://valorant-api.com/v1/agents?isPlarayable=true', setItem)
    }, [])
    
   
    const datos = item && item.data ? item.data : [];

   
    const datosUnicos = datos 
    ? [...new Map(datos.map(item => [item.displayName, item])).values()]
        .sort((a, b) => a.displayName.localeCompare(b.displayName))
    : [];
  
  
    
    return(
    <div>
        <Navbar></Navbar>
        <Body datos={datosUnicos} ></Body>
         <Footer></Footer>
    </div>
    )
}