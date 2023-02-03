import React from "react";
import { Link } from "react-router-dom";
import MateusPic from "./img/mateus-palace.jpg";
import MateusGarden from "./img/PalacioDeMateus-5.jpg";
import MateusEntry from "./img/mateus.jpeg";

function Home() {
  return (
    <div>
      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="img-fluid"
                src={MateusPic}
                alt="error"
                width="272"
                height="257"
              />

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>
                    Some representative placeholder content for the first slide
                    of the carousel.
                  </p>
                  {/* <p>
                  <Link className="btn btn-lg btn-primary" to="#">
                    Sign up today
                  </Link>
                </p> */}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#777" />
              </svg>

              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>
                    Some representative placeholder content for the second slide
                    of the carousel.
                  </p>
                  {/* <p>
                  <Link className="btn btn-lg btn-primary" to="#">
                    Learn more
                  </Link>
                </p> */}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <rect width="100%" height="100%" fill="#777" />
              </svg>

              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  {/* <p>
                  <Link className="btn btn-lg btn-primary" to="#">
                    Browse gallery
                  </Link>
                </p> */}
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* 
  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. --> */}

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2 className="fw-normal">Portugal</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              {/* <p>
              <Link className="btn btn-secondary" to="#">
                View details &raquo;
              </Link>
            </p> */}
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2 className="fw-normal">News</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              {/* <p>
              <Link className="btn btn-secondary" to="#">
                View details &raquo;
              </Link>
            </p> */}
            </div>
            <div className="col-lg-4">
              <svg
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 140x140"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777" />
                <text x="50%" y="50%" fill="#777" dy=".3em">
                  140x140
                </text>
              </svg>

              <h2 className="fw-normal">Events</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              {/* <p>
              <Link className="btn btn-secondary" to="#">
                View details &raquo;
              </Link>
            </p> */}
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                {" "}
                <span className="text-muted"></span>
              </h2>
              <p className="lead">
                Through the “A Cultura em Diálogo” cycle, begun on 3 December
                1977, the Fundação has aimed to institutionalise, in a region
                that was particularly destitute at that time, dialogue about,
                around and within culture. In the years that have passed since
                then, numerous Seminars and Meetings have been organised, many
                by the Fundação itself, others by those associated with us.
                These have debated very varied aspects of Portuguese society and
                the most pressing local and national needs...
                <a
                  href="http://casademateus.com/the-foundation/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  read more
                </a>
              </p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid" src={MateusPic} alt="error" />
              {/* <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg> */}
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                {" "}
                <span className="text-muted"></span>
              </h2>
              <p className="lead">
                The Casa de Mateus was built in the first half of the 18th
                century by António José Botelho Mourão, 3rd Morgado de Mateus.
                This replaced the former family house which had stood on the
                site since the beginning of the 17th century. In 1910, it was
                classified as a National Monument.The artefacts on permanent
                display at the Casa de Mateus constitute an important and unique
                collection of heritage and artistic value that communicates the
                history of the Family...
                <a
                  href="http://casademateus.com/sightseeing-wine-tourism/house-and-chapel/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  read more
                </a>
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="img-fluid" src={MateusEntry} alt="error" />
              {/* <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg> */}
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                {" "}
                <span className="text-muted"></span>
              </h2>
              <p className="lead">
                The Casa de Mateus it is a magical place. A time machine that
                allows us to travel over the last five hundred years of the
                Portuguese History, Europe and the World. We assure you of an
                absolutely personalized experience, through the House and the
                gardens, made up of stories and people that fill our
                imagination...
                <a
                  href="http://casademateus.com/book-a-visit/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  read more
                </a>
              </p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid" src={MateusGarden} alt="error" />
              {/* <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg> */}
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>

        <footer className="container">
        <p>
          <a
                  href="http://casademateus.com/book-a-visit/?lang=en#book-now"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a visit
                </a>
          </p>
          <p className="float-end">
            <Link to="#">Back to top</Link>
          </p>
          <p>
            &copy; 2023 Mateus Palace &middot; <Link to="#">Privacy</Link>{" "}
            &middot; <Link to="#">Terms</Link>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Home;
