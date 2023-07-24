import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
  let [meals, setMeals] = useState([])
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

  // useEffect for calling only once our variable

  useEffect(() => {
    getMealTypeList()
  }, [])
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
            <div className="container">
              <input
                list="location"
                type="text"
                placeholder="Please type a location"
                className="ps-2 me-2"
              />
              <span className="searchIcon">
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
              </span>
              <input type="text" placeholder="Search Restaurants" />
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
          <div className="mainContent mt-4">
            <section className="meal-type-list">
              {meals.map((meal) => {
                return (
                  <article className="meal-type-item">
                    <div key={meal._id} className="meal-type-item-img-div">
                      <img
                        className="meal-type-item-img"
                        src={'/images/' + meal.image}
                        alt=""
                      />
                    </div>
                    <div className="meal-type-item-p-div">
                      <p className="meal-type-item-title">{meal.name}</p>
                      <p className="meal-type-item-sub-title">{meal.content}</p>
                    </div>
                  </article>
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
