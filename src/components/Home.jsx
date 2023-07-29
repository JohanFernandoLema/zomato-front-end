import axios from 'axios'
import { useEffect, useState } from 'react'
import './Home.scss'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  let navigate = useNavigate()
  let initData = {
    city_id: 0,
    country_name: '',
    location_id: 0,
    name: '',
    _id: '',
  }
  let [meals, setMeals] = useState([])
  let [selectLocationID, setSelectLocationID] = useState({ ...initData })
  let [hidden, setHidden] = useState(true)
  let [locations, setLocations] = useState([])
  let [restaurantList, setRestaurantList] = useState({
    list: [],
    message: '0 restaurant found',
  })

  let setAsSelectedLocation = (id) => {
    console.log(id)
    setSelectLocationID(locations[id])
    setHidden(true)
  }
  let getMealTypeList = async () => {
    try {
      let url = 'http://localhost:3300/api/get-meal-type-list'
      let response = await axios.get(url)
      let data = response.data

      console.log(data.result)

      setMeals(data.result)
    } catch (err) {
      console.log(err)
    }
  }

  let getLocationList = async () => {
    try {
      let url = 'http://localhost:3300/api/get-location-list'
      let response = await axios.get(url)
      let data = response.data
      setLocations(data.result)
      console.log(data.result)
    } catch (err) {
      console.log(err)
    }
  }

  let getRestaurantByLocId = async () => {
    let url =
      'http://localhost:3300/api/get-location-by-loc/' +
      selectLocationID.location_id
    let { data } = await axios.get(url)
    setRestaurantList({
      list: data.result,
      message: data.result.length + ' restaurant found',
    })
    console.log(data.result)
  }

  // useEffect for calling only once our variable

  useEffect(() => {
    getMealTypeList()
    getLocationList()
  }, [])

  useEffect(() => {
    if (selectLocationID.location_id !== 0) {
      getRestaurantByLocId()
    }
    // eslint-disable-next-line
  }, [selectLocationID])
  return (
    <>
      <header>
        <div className="zomatoNavigation">
          {/* <!-- BUTTONS --> */}
          <nav className="d-lg-flex justify-content-end d-none">
            <button className="me-3 mt-2 rounded-3 bg-transparent border-0 text-white h6 me-lg-4 mt-lg-4 p-lg-3">
              Login
            </button>
            <button className="mt-2 me-3 bg-transparent text-white h6 me-lg-5 mt-lg-4 p-lg-3">
              Create an Account
            </button>
          </nav>

          {/* <!-- LOGO --> */}
          <div className="text-center pt-5">
            <span className="restaurantTitle text-white">ZOMATO</span>
            <p className="h1 text-white mb-4 mt-5">
              find the best restaurants, cafes, and bars
            </p>
            <div className="container searchInputs">
              <div className="containerLocations">
                <input
                  list="location"
                  type="text"
                  placeholder="Please select a location"
                  className="ps-2 me-2 inputField"
                  readOnly
                  value={selectLocationID.name}
                  onClick={() => setHidden(false)}
                />
                {hidden ? null : (
                  <ul className="list-group">
                    {locations.map((location, index) => {
                      return (
                        <li
                          key={location._id}
                          className="list-group-item"
                          onClick={() => setAsSelectedLocation(index)}
                        >
                          {location.name}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
              <span className="searchIcon">
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
              </span>
              <div>
                <input
                  type="text"
                  placeholder={restaurantList.message}
                  onChange={() => {}}
                  readOnly
                />
                <ul className="list-group restaurantList">
                  {restaurantList.list.map((restaurant) => {
                    return (
                      <li
                        key={restaurant._id}
                        className="list-group-item"
                        onClick={() =>
                          navigate('/restaurants/' + restaurant._id)
                        }
                      >
                        <img
                          className="imageRestaurant"
                          src={'/images/assets/' + restaurant.image}
                          alt=""
                        />
                        <span>
                          {restaurant.name} {restaurant.locality}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="container mt-3">
          <h1 className="mt-4 mb-3">Quick Searches</h1>
          <h3 className="text-muted d-none d-lg-flex">
            Discover restaurants by their type of meal
          </h3>
          <h5 className="text-muted d-lg-none">
            Discover restaurants by their type of meal
          </h5>
          <div className="mt-4">
            <section className="mainContent meal-type-list">
              {meals.map((meal) => {
                return (
                  <div key={meal._id} className="d-flex bg cards mb-5">
                    <img
                      src={'/images/' + meal.image}
                      alt=""
                      className="gallery me-2"
                    />
                    <div>
                      <div className="p-4 d-inline-block">
                        <h3 className="fw-bold">{meal.name}</h3>
                        <p>{meal.content}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
