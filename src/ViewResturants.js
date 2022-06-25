import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./ViewResturants.css";
const ViewResturants = ({appData}) => {
  console.log(appData)
  console.log(appData.pictures[1])

  return (
    <div className="ViewResturants">
      <div className="heading flex items-center justify-center ">
       <input type="text" placeholder="Search resturants..." className=""/>
      </div>
      <div className="main flex justify-center flex-wrap">
        {appData.data ? (
          appData.data.map((place, index) => (
            // <div className="card mx-4  w-34 my-12 h-96">
            //   <div className="card-image" >
            //     <img width={"200px"} height={"150px"} src={appData.pictures[index].length === 0 ? "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/r/z/p53930-15529157675c8f9d37cfcb7.jpg?tr=tr:n-xlarge" : appData.pictures[index][0].prefix+"500x300"+appData.pictures[index][0].suffix}/> 
            //   </div>
            //   <div className="card-text" >
            //     <h4 className="py-2 px-2 font-medium">{place.name}</h4>
            //     <h6 className="py-1 px-2 text-sm">{place.location.formatted_address}</h6>     
            //   </div>
            // </div>

            // <div class="max-w-sm card rounded overflow-hidden shadow-lg mx-6 mt-48">
            //   <img class="w-full" src={appData.pictures[index].length === 0 ? "https://v1.tailwindcss.com/img/card-top.jpg" : appData.pictures[index][0].prefix+"500x300"+appData.pictures[index][0].suffix} alt="Sunset in the mountains" />
            //   <div class="px-6 py-4">
            //     <div class="font-bold text-lg  mb-1">{place.name}</div>
            //     <div className="flex mb-1">
            //       <img className="image" src="https://img.icons8.com/fluency/48/000000/star.png"/>
            //       <img className="image" src="https://img.icons8.com/fluency/48/000000/star.png"/>
            //       <img className="image" src="https://img.icons8.com/fluency/48/000000/star.png"/>
            //       <img className="image" src="https://img.icons8.com/fluency/48/000000/star.png"/>
            //       <img className="image" src="https://img.icons8.com/fluency/48/000000/star.png"/>
            //     </div>
            //     <p class="text-gray-700 text-base">
            //     {place.location.formatted_address}
            //     </p>
            //   </div>
            //   <div class="px-6 pt-4 pb-2">
            //     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Food</span>
            //     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            //     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            //   </div>
            // </div>
          // <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <div class="card mx-7 my-4  c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              <div class="relative pb-48 overflow-hidden">
                <img class="absolute inset-0 h-full w-full object-cover" src={appData.pictures[index].length < 1 ? "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" : appData.pictures[index][Math.floor(Math.random() * appData.pictures[index].length)].prefix+"500x300"+appData.pictures[index][Math.floor(Math.random() * appData.pictures[index].length)].suffix} alt=""/>
              </div>
              <div class="p-4">
                <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Open</span>
                <h2 class="mt-2 mb-2  font-bold">{place.name}</h2>
                <p class="text-sm">{place.description ?  place.description : 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla'}.</p>
                <div class="mt-3 flex items-center">
                  <span class="text-sm font-semibold">ab</span>&nbsp;<span class="font-bold text-xl">45,00</span>&nbsp;<span class="text-sm font-semibold">€</span>
                </div>
              </div>
              <div class="p-4 border-t border-b text-xs text-gray-700">
                <span class="flex items-center mb-1">
                  <i class="far fa-clock fa-fw mr-2 text-gray-900"></i>{place.categories.name}
                </span>
                <span class="flex items-center">
                  <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> {place.location.formatted_address}
                </span>        
              </div>
                <div class="p-4 flex items-center text-sm text-gray-600"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><span class="ml-2">34 Bewertungen</span></div>
          </div>
        
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "2em",
              color: "#3f3d56",
            }}
          >
            Loading....
          </div>
        )}
      </div>
    </div>
  );
};
export default ViewResturants;
