<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!--Maps CDN-->
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js'></script>
    <!--Maps-->
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
    <!--bootstrap Icons-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../src/style.css">
    <!--Jquery Bundler-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
    <!--navbar-->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top ">
        <div class="container">
            <a href="#" class="navbar-brand">Allen Dave</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            ><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#learn" class="nav-link">What you'll Learn</a>
                    </li>
                    <li class="nav-item">
                        <a href="#Questions" class="nav-link">Questions</a>
                    </li>
                    <li class="nav-item">
                        <a href="#instructors" class="nav-link">Instructors</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!--show cases-->
    <section class="bd-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
            <div class="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1 class="text-dark">Become a <span class="text-warning">Frontend Developer</span></h1>
                    <p class="lead my-4 text-dark">We focus on teaching our students the fundamentals of the latest
                      and greatest technologies to prepare them for their first developer role`</p>
                    <button class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">Start the Enrollment</button>
                </div>
                <img class="img-fluid w-50 d-none d-sm-block" src="../images/codes.svg" alt="" />
            </div>
        </div>
    </section>
    <!--newsletter-->
    <section class="bg-primary text-light p-5">
        <div class="container">
            <div class="d-md-flex justify-content-between align-items-center">
                <h3 class="mb-3 mb-md-0"> Sign up for our Newsletter</h3>
                <div class="input-group news-input">
                    <input type="text" class="form-control" placeholder="Enter your Email" />
                    <button class="btn btn-dark btm-lg" type="button">Submit</button>
                </div>
            </div>
        </div>
    </section>
    <!--boxes-->
    <section class="p-5">
        <div class="container">
            <div class="row text-center g-4">
                <div class="col-md">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                            <i class="bi bi-laptop"></i>
                        </div>
                        <h3 class="card-title mb-3">Virtual</h3>
                        <p class="card-text">
                            Coding is life when you were work with IT industry
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
                <div class="col-md">
                    <div class="card bg-secondary text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                            <i class="bi bi-person-square"></i>
                        </div>
                        <h3 class="card-title mb-3">Profile</h3>
                        <p class="card-text">
                            I'm your future Frontend Developer Soon  so get afraid for me HAHA!
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>  
            </div>
                <div class="col-md">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                            <i class="bi bi-people"></i>
                        </div>
                        <h3 class="card-title mb-3">Community</h3>
                        <p class="card-text">
                            Community Developer is recommended where forum and guidance from them.
                        </p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    <!---learn sections-->
    <section class="p-5" id="learn">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md">
                    <img src="../images/fundamentals.svg" alt="" class="img-fluid">
                </div>
                <div class="col-md p-5">
                    <h2>Learn the Fundamentals of Frontend Dev.</h2>
                    <p class="lead">
                        Learn about the fundamentals of frontend developer, the three common parts of website development
                        the HTM CSS and JS keep practising tell you master them all.
                    </p>
                    <p>
                        Don't matter how hard it is, though at first Yes, it is so very difficult to understand
                        as a newbie or getting started as a new one.
                    </p>
                    <a href="#" class="btn btn-light mt-3">
                        <i class="bi bi-chevron-right">Read More</i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="p-5 bg-dark text-light" id="learn">
        <div class="container">
            <div class="row align-items-center justify-content-between">
               
                <div class="col-md p-5">
                    <h2>Learn React</h2>
                    <p class="lead">
                        Then learn react from JS Frameworks, it is commonly use for facebook, youtube, netflix and more.
                    </p>
                    <p>
                        It is the best thing to learn for js frameworks and it is the most popular and from js life.
                        Things to learn is very difficult at first when you kept practising from it, it is nice and
                        have a good salary rate when you master it.
                    </p>
                    <a href="#" class="btn btn-light mt-3">
                        <i class="bi bi-chevron-right">Read More</i>
                    </a>
                </div>
                <div class="col-md">
                    <img src="../images/react.svg" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </section>
    <!--section Accordion-->
    <section class="p-5" id="Questions">
        <div class="container">
            <h2 class="text-center mb-4">Frequently Asked Questions</h2>
            <div class="accordion accordion-flush" id="Questions">
                <!--item 1-->
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Questions-one">
                      Where Exactly are you locate?
                    </button>
                  </h2>
                  <div id="Questions-one" class="accordion-collapse collapse" data-bs-parent="#Questions"> 
                    <div class="accordion-body">I live here in Barangay 649 Baseco Port Area Manila, Zone 68 Metro Manila, National Capital Region, </div>
                  </div>
                </div>
                <!--item 2-->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Questions-two">
                        How do you work with Frontend Developer?
                      </button>
                    </h2>
                    <div id="Questions-two" class="accordion-collapse collapse" data-bs-parent="#Questions">
                      <div class="accordion-body">Just keep practising though I myself, I'm not surely called as a developer cause I'm NOT fully developed as 
                          a developer. I need to learn more about it.
                      </div>
                    </div>
                  </div>
                <!--item 3-->
                <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Questions-three">
                        How long you've been learning as Frontend Developer?
                      </button>
                    </h2>
                    <div id="Questions-three" class="accordion-collapse collapse" data-bs-parent="#Questions">
                      <div class="accordion-body">A big start from August 20 2021 though I need to learn more as usual, I need to broad my knowledge about it.
                          so if you want it too. so kept learing kiddo.. </div>
                    </div>
                  </div>
              </div>
              <!--item 4-->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Questions-four">
                    Where do I sign up?
                  </button>
                </h2>
                <div id="Questions-four" class="accordion-collapse collapse" data-bs-parent="#Questions">
                  <div class="accordion-body">Just set appointment and go with the enrollment fill up the enrollment form, to getting started with the course.</div>
                </div>
              </div>
              <!--item 5-->
              <!--<div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Questions-five">
                    Where Exactly are you locate?
                  </button>
                </h2>
                <div id="Questions-five" class="accordion-collapse collapse" data-bs-parent="#Questions">
                  <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et illum aliquam praesentium, iusto expedita assumenda reiciendis id quas deleniti voluptate voluptates neque maiores itaque fugit, natus aspernatur nisi vel?</div>
                </div>
              </div>!-->
            </div>
        </div>
    </section>
    <section class="p-5 bg-primary" id="instructors">
        <div class="container">
            <h2 class="text-center text-white">Our Instructors</h2>
            <p class="lead text-center text-white mb-5"> Our instructor all have 5+ years working as a web developer</p>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                    <div class="card-body text-center">
                        <img src="https://randomuser.me/api/portraits/men/10.jpg" class="rounded-circle mb-3" alt="">
                        <h3 class="card-title mb-3">Aaron</h3>
                        <p class="card-text">Lorem ipsum dolor sit a,
                            officiis omnis laudantium earum minima repellat nihil ad quae!</p>
                            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-github text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                    <div class="card-body text-center">
                        <img src="https://randomuser.me/api/portraits/women/20.jpg" class="rounded-circle mb-3" alt="">
                        <h3 class="card-title mb-3">Sarah Smith</h3>
                        <p class="card-text">Lorem ipsum dolor sit a,
                            officiis omnis laudantium earum minima repellat nihil ad quae!</p>
                            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-github text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                    <div class="card-body text-center">
                        <img src="https://randomuser.me/api/portraits/women/15.jpg" class="rounded-circle mb-3" alt="">
                        <h3 class="card-title mb-3">Angel Doe</h3>
                        <p class="card-text">Lorem ipsum dolor sit a,
                            officiis omnis laudantium earum minima repellat nihil ad quae!</p>
                            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-github text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                    <div class="card-body text-center">
                        <img src="https://randomuser.me/api/portraits/men/13.jpg" class="rounded-circle mb-3" alt="">
                        <h3 class="card-title mb-3">Jonathan</h3>
                        <p class="card-text">Lorem ipsum dolor sit a,
                            officiis omnis laudantium earum minima repellat nihil ad quae!</p>
                            <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-github text-dark mx-1"></i></a>
                            <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--contact # map-->
    <section class="p-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-md">
                    <h2 class="text-center mb-4">Contact Me</h2>
                    <ul class="list-group list-group-flush lead">
                        <li class="list-group-item">
                            <span class="fw-bold">Main Location:</span>Baseco Port Area Manila
                        </li>
                        <li class="list-group-item">
                            <span class="fw-bold">Cell Number:</span>(+63)-909-370-3071
                        </li>
                        <li class="list-group-item">
                            <span class="fw-bold">Email:</span>ayoallendave273@gmail.com
                        </li>
                    </ul>
                </div>
                <div class="col-md">
                    <div id="map"></div>
                </div>
            </div>
        </div>
    </section>
    <!---footer-->
    <footer class="p-5 bg-dark text-white text-center position-relative">
        <div class="container">
            <p class="lead">Copyright &copy;Allen Dave</p>
            <a href="" class="position-absolute p-5 bottom-0 end-0"><i class="bi bi-arrow-up-circle h1"></i></a>
        </div>
    </footer>

    <div class="modal fade" id="enroll" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Enrollment Form</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="lead">Fill out this form and we will get back to you</p>
              <form>
                  <div class="mb-3">
                      <label for="first-name" class="col-form-label">First Name:</label>
                      <input type="text" class="form-control" id="first-name">
                  </div>
                  <div class="mb-3">
                    <label for="last-name" class="col-form-label">Last Name:</label>
                    <input type="text" class="form-control" id="last-name">
                </div>
                <div class="mb-3">
                    <label for="email" class="col-form-label">Email:</label>
                    <input type="text" class="form-control" id="email">
                </div>
                <div class="mb-3">
                    <label for="phone-number" class="col-form-label">Phone Number:</label>
                    <input type="text" class="form-control" id="phone-number">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>     
      </div>
    <script>
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxsZW5kYXZlLWh5cGhlbiIsImEiOiJjbDI4Z3ZzYzAwMGJ1M2RucHhiYXc0Zm44In0.k-OeYFbqc_eimRANd2yrog';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [120.984222, 14.599512],
            zoom: 18,
        });
    </script>
    <script src="../src/script.js"></script>

</body>
</html>
