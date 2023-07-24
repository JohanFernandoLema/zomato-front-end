const Search = () => {
  return (
    <div class="container-fluid">
      <div class="row bg-danger justify-content-center">
        <div class="col-10 d-flex justify-content-between py-2">
          <p class="m-0 brand">e!</p>
          <div>
            <button class="btn text-white">Login</button>
            <button class="btn btn-outline-light">
              <i class="fa fa-search" aria-hidden="true"></i>Create a Account
            </button>
          </div>
        </div>
      </div>
      {/* <!-- section --> */}
      <div class="row">
        <div class="col-12 px-5 pt-4">
          <p class="h3">Breakfast Places In Mumbai</p>
        </div>
        {/* <!-- food item --> */}
        <div class="col-12 d-flex flex-wrap px-lg-5 px-md-5 pt-4">
          <div class="food-shadow col-12 col-lg-3 col-md-4 me-5 p-3 mb-4">
            <div class="d-flex justify-content-between">
              <p class="fw-bold m-0">Filter</p>
              <button
                class="d-lg-none d-md-none btn"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFilter"
                aria-controls="collapseFilter"
              >
                <span class="fa fa-eye"></span>
              </button>
            </div>
            {/* <!-- Collapse start  --> */}
            <div class="collapse show" id="collapseFilter">
              <div>
                <label for="" class="form-label">
                  Select Location
                </label>
                <select class="form-select form-select-sm">
                  <option value="">option-1</option>
                  <option value="">option-1</option>
                  <option value="">option-1</option>
                  <option value="">option-1</option>
                  <option value="">option-1</option>
                </select>
              </div>
              <p class="mt-4 mb-2 fw-bold">Cuisine</p>
              <div>
                <div class="ms-1">
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    North Indian
                  </label>
                </div>
                <div class="ms-1">
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    North Indian
                  </label>
                </div>
                <div class="ms-1">
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    North Indian
                  </label>
                </div>
                <div class="ms-1">
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    North Indian
                  </label>
                </div>
                <div class="ms-1">
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    North Indian
                  </label>
                </div>
                <div class="ms-1">
                  <input type="checkbox" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    North Indian
                  </label>
                </div>
              </div>
              <p class="mt-4 mb-2 fw-bold">Cost For Two</p>
              <div>
                <div class="ms-1">
                  <input type="radio" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    less then 500
                  </label>
                </div>
                <div class="ms-1">
                  <input type="radio" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    500 to 1000
                  </label>
                </div>
                <div class="ms-1">
                  <input type="radio" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    1000 to 1500
                  </label>
                </div>
                <div class="ms-1">
                  <input type="radio" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    1500 to 2000
                  </label>
                </div>
                <div class="ms-1">
                  <input type="radio" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    2000+
                  </label>
                </div>
              </div>
              <p class="mt-4 mb-2 fw-bold">Sort</p>
              <div>
                <div class="ms-1">
                  <input type="radio" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    Price low to high
                  </label>
                </div>
                <div class="ms-1">
                  <input type="radio" class="form-check-input" />
                  <label for="" class="form-check-label ms-1">
                    Price high to low
                  </label>
                </div>
              </div>
            </div>
            {/* <!-- Collapse end --> */}
          </div>
          {/* <!-- search result --> */}
          <div class="col-12 col-lg-8 col-md-7">
            <div class="col-12 food-shadow p-4 mb-4">
              <div class="d-flex align-items-center">
                <img src="./images/food-item.png" alt="" class="food-item" />
                <div class="ms-5">
                  <p class="h4 fw-bold">The Big Chill Cakery</p>
                  <span class="fw-bold text-muted">FORT</span>
                  <p class="m-0 text-muted">
                    <i
                      class="fa fa-map-marker fa-2x text-danger"
                      aria-hidden="true"
                    ></i>
                    Shop 1, Plot D, Samruddhi Complex, Chincholi …
                  </p>
                </div>
              </div>
              <hr />
              <div class="d-flex">
                <div>
                  <p class="m-0">CUISINES:</p>
                  <p class="m-0">COST FOR TWO:</p>
                </div>
                <div class="ms-5">
                  <p class="m-0 fw-bold">Bakery</p>
                  <p class="m-0 fw-bold">
                    <i class="fa fa-inr" aria-hidden="true"></i>
                    700
                  </p>
                </div>
              </div>
            </div>

            <div class="col-12 food-shadow p-4 mb-4">
              <div class="d-flex align-items-center">
                <img src="/images/food-item.png" alt="" class="food-item" />
                <div class="ms-5">
                  <p class="h4 fw-bold">The Big Chill Cakery</p>
                  <span class="fw-bold text-muted">FORT</span>
                  <p class="m-0 text-muted">
                    Shop 1, Plot D, Samruddhi Complex, Chincholi …
                  </p>
                </div>
              </div>
              <hr />
              <div class="d-flex">
                <div>
                  <p class="m-0">CUISINES:</p>
                  <p class="m-0">COST FOR TWO:</p>
                </div>
                <div class="ms-5">
                  <p class="m-0 fw-bold">Bakery</p>
                  <p class="m-0 fw-bold">
                    <i class="fa fa-inr fa-2x" aria-hidden="true"></i> 700
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 pagination d-flex justify-content-center">
              <ul class="pages">
                <li>&lt;</li>
                <li class="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>&gt;</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Search
