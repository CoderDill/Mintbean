import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import "../styles/LandingPage.css"

//images
import Matt from '../assets/LandingPage/MattDillon.jpg'
import Will from '../assets/LandingPage/WillSanders.jpg'
import John from '../assets/LandingPage/JohnQuattrocchi.png'
import Express from '../assets/LandingPage/ExpressJS.png'
import Crayons from '../assets/LandingPage/Crayons.jpg'
import StoryPaint from '../assets/LandingPage/StoryPaint2.png'
export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/color");
  };
  const handleClick2 = () => {
    navigate("/login");
  };
  return (
    <Box className="LandingPage" sx={{ paddingTop: "10rem" }}>
      <div class="container-fluid">
        <div class="d-flex justify-content-center LandingPage-logo">
          <img id="title" src={StoryPaint} alt="" />
        </div>
        <div class="row"></div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col col-2"></div>
          <div class="col col-8">
            <h2 class="text-center">Paint a coloring book with a story</h2>
            <p class="fw-light fs-4 text-center">
              Create an account to save all your progress and pick up where you
              left off next time. Otherwise, continue as a guest,
              where you can still download your book.
            </p>
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-lg-6 col-md-8 col-sm-10 m-1 bg-dark bg-opacity-75 text-white text-center p-5">
            <h2 class="mb-4 text-white text-center">Create an Account</h2>
            <div class="row">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Username</span>
                <input type="text" class="form-control" placeholder="Username" />
              </div>
            </div>
            <div class="row">
              <div class="input-group input-group-sm mb-3">
                <span class="input-group-text">Password</span>
                <input
                  type="text"
                  required
                  class="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            
            <span>
              <button
                onClick={handleClick2}
                class="btn btn-secondary m-md-3 m-sm-2 m-3"
              >
                Create Account
              </button>
              <button
                onClick={handleClick}
                class="btn btn-secondary m-md-3 m-sm-2 m-3"
              >
                Continue as Guest
              </button>
            </span>
          </div>
        </div>
      </div>

      <div class="container">
        <h2 class="display-5 fw-bold text-center pt-3 pb-2">Developers</h2>
        <div class="row">
          <div class="col col-xl-4 col-lg-3 col-0"></div>
          <div class="col col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12">
            <div
              id="carouselDevelopers"
              class="carousel slide p-5 bg-light bg-opacity-50"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <h4 class="text-center">Matt Dillon</h4>
                  <div class="d-flex justify-content-center">
                    <img
                      src={Matt}
                      class="img-thumbnail mb-3"
                      alt="Missing"
                    />
                  </div>
                  <h5 class=" text-center">Full Stack Developer</h5>
                  <p class="lead text-center fs-6">
                    Matt likes long walks on the beach and a glass of warm milk
                    before bed. He also is a leo and has a passion for passion
                    fruit.
                  </p>
                  <span class="d-flex justify-content-center">
                    <a
                      class="me-3"
                      href="https://www.linkedin.com/in/coderdill/"
                    >
                      <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a class="me-3" href="https://twitter.com/CoderDill">
                      <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://github.com/coderdill" class="me-3">
                      <i class="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://www.facebook.com/coderdill">
                      <i class="fab fa-facebook fa-2x"></i>
                    </a>
                  </span>
                </div>
                <div class="carousel-item">
                  <h4 class="text-center">Will Sanders</h4>
                  <div class="d-flex justify-content-center">
                    <img
                      src={Will}
                      class="img-thumbnail mb-3"
                      alt="will-sanders"
                    />
                  </div>
                  <h5 class="text-center">Full Stack Developer</h5>
                  <p class="lead text-center fs-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    quae nulla nostrum labore veritatis, nesciunt velit
                    inventore earum rem! Porro.
                  </p>
                  <span class="d-flex justify-content-center">
                    <a
                      class="me-3"
                      href="https://www.linkedin.com/in/williamsanders81/"
                    >
                      <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a class="me-3" href="www.google.com">
                      <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://github.com/Wsanders81" class="me-3">
                      <i class="fab fa-github fa-2x"></i>
                    </a>
                    <a href="www.google.com">
                      <i class="fab fa-facebook fa-2x"></i>
                    </a>
                  </span>
                </div>
                <div class="carousel-item">
                  <h4 class="text-center">John Quattrocchi Jr.</h4>
                  <div class="d-flex justify-content-center">
                    <img
                      src={John}
                      class="img-thumbnail mb-3"
                      alt="john-quattrochi"
                    />
                  </div>
                  <h5 class="text-center">UX/UI Designer</h5>
                  <p class="lead text-center fs-6">
                    John began his coding journey in early 2021 upon joining a
                    Springboard program. He has a background in the poker and
                    casino industry. Throughout his career he has had the
                    opportunity to hone his large scale project and event
                    management skills. John has a genuine and life-long interest
                    in advancing technologies (and gaming in his spare time).
                  </p>
                  <span class="d-flex justify-content-center">
                    <a class="me-3" href="https://www.linkedin.com/in/jquatjr/">
                      <i class="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a class="me-3" href="https://www.twitter.com/johnqtd">
                      <i class="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://github.com/jquatjr" class="me-3">
                      <i class="fab fa-github fa-2x"></i>
                    </a>
                    <a href="https://facebook.com/gotacrotchy">
                      <i class="fab fa-facebook fa-2x"></i>
                    </a>
                  </span>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselDevelopers"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselDevelopers"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col col-lg-3 col-0"></div>
        </div>
      </div>

      <div class="container bg-light bg-opacity-50 pb-4">
        <div class="row">
          <h4 class="text-center">This App Brought to You By:</h4>
          <div class="col-2"></div>
          <div class="col-4 text-center">
            <div class="fs-5 fw-bold">Front End</div>
            <li>
              <span>
                <i class="fab fa-react"></i> React.js
              </span>
            </li>

            <li>Material.Ui</li>
            <li>
              <span>
                <i class="fab fa-bootstrap"></i> Bootstrap
              </span>
            </li>
            <li>JQuery</li>
          </div>
          <div class="col-4 text-center">
            <div class="fs-5 fw-bold">Back End</div>
            <li>
              <span>
                <i class="fab fa-node"></i> Node.js
              </span>
            </li>
            <li>
              <img id="express" src={Express} alt="" />
              Express.js
            </li>
            <li>Node-postgres</li>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></script>
    </Box>
  );
}
