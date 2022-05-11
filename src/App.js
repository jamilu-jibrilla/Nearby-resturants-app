import {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import "./App.css";
import ViewResturants from "./ViewResturants";
import Map from "./Map";
import Home from "./Home";

function App() {
  
  const [appData, setAppData] =  useState({
    pictures:"dd",
    data:"",
    lat:"",
    long:"",
  
  })

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position) => {
      setAppData({
        ...appData,
        lat: `${position.coords.latitude}`,
        long: `${position.coords.longitude}`
      })
    });

    
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'fsq3O/V4qgl9Xwc7/J2XjC24IKwNOvbtI89PeWz/7LeD1+g='
      }
    };

    if(appData.lat && appData.long) {
      
      async function fetchData() {
        let res = await fetch(`https://api.foursquare.com/v3/places/search?ll=${appData.lat}%2C${appData.long}&radius=100000&categories=13065&sort=POPULARITY&limit=20`,options)
        let data= await res.json()
        Promise.all(data.results.map( place => {
           return fetch(`https://api.foursquare.com/v3/places/${place.fsq_id}/photos?limit=40&sort=NEWEST&classifications=food%2Coutdoor%2Cmenu%2Cindoor`,options)
          .then(res=> res.json())
        })).then(data2 => setAppData({
          ...appData,
          data:data.results,
          pictures:data2  
        }))
      }
      fetchData()
    }


  },[appData.lat,appData.long])
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/ViewResturants"  element={<ViewResturants appData={appData}/>} />
      </Routes>
    </div>
  );
}

export default App;
