import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./ViewResturants.css";
const ViewResturants = () => {
  const [data, setData] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [inputState, setInputState] = useState();

  const inputElement = useRef();

  navigator.geolocation.getCurrentPosition((position) => {
    setLat(`${position.coords.latitude}`);
    setLong(`${position.coords.longitude}`);
  });

  const handleInputChange = () => {
    setInputState(inputElement.current.value);
  };
  useEffect(() => {
    updateData();
  }, [lat, long]);

  const updateData = () => {
    const options = {
      method: "GET",
      url: "https://api.foursquare.com/v3/places/search",
      params: {
        ll: `${lat},${long}`,
        categories: "13065",
        radius: 100000,
        sort: "DISTANCE",
        limit: "20",
      },
      headers: {
        Accept: "application/json",
        Authorization: "fsq3O/V4qgl9Xwc7/J2XjC24IKwNOvbtI89PeWz/7LeD1+g=",
      },
    };
    axios
      .request(options)
      .then(function (res) {
        let data = res.data.results;
        console.log(data);
        setData(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="ViewResturants">
      <div className="heading side-nav py-2">
        <h2 className="text-2xl my-1">All resturants</h2>

        <a href="/Map">
          <button className="rounded py-1 px-4 md:py-1 my-5 text-black  flex items-center  md:px-5 bg-white ">
            view map
          </button>{" "}
        </a>
      </div>
      <div className="main">
        {data ? (
          data.map((place) => (
            <div className="card">
              <img width={"200px"} height={"150px"} src={""} />
              <div className="card-body">
                <b>Name:</b> {place.name} <br />
                <b> Address:</b> {place.location.formatted_address}
                <br />
                <b>Distance:</b> {place.distance} <br />
              </div>
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
