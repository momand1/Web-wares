<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Acceuil</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Produits
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Catégorie 1</a></li>
              <li><a class="dropdown-item" href="#">Catégorie 2</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Catégorie 3</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Details Produits</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Caisse</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Panier</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Connection</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Inscription</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Admin</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
     <div class="container">
      <div class="row mb-2">
          <div class="col-12 text-center pt-3">
              <h1>Web Wares</h1>
              <p>Slogan</p>
          </div>
      </div>
      
      <!--Start code-->
      <div class="row">
          <div class="col-12 pb-5">
              <!--SECTION START-->
              <section class="row">
                  <!--Start slider news-->
                  <div class="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                      <div id="featured" class="carousel slide carousel" data-ride="carousel">
                          <!--dots navigate-->
                          <ol class="carousel-indicators top-indicator">
                              <li data-target="#featured" data-slide-to="0" class="active"></li>
                              <li data-target="#featured" data-slide-to="1"></li>
                              <li data-target="#featured" data-slide-to="2"></li>
                              <li data-target="#featured" data-slide-to="3"></li>
                          </ol>
                          
                          <!--carousel inner-->
                          <div class="carousel-inner">
                              <!--Item slider-->
                              <div class="carousel-item active">
                                  <div class="card border-0 rounded-0 text-light overflow zoom">
                                      <div class="position-relative">
                                          <!--thumbnail img-->
                                          <div class="ratio_left-cover-1 image-wrapper">
                                              <a href="#">
                                                  <img class="img-fluid w-100"
                                                       src="https://bootstrap.news/source/img1.jpg"
                                                       alt="#">
                                              </a>
                                          </div>
                                          <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                              <!--title-->
                                              <a href="#">
                                                  <h2 class="h3 post-title text-white my-1">Bootstrap 4 template news portal magazine perfect for news site</h2>
                                              </a>
                                              <!-- meta title -->
                                              <div class="news-meta">
                                                  <span class="news-author">by <a class="text-white font-weight-bold" href="#">Jennifer</a></span>
                                                  <span class="news-date">Oct 22, 2019</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                              <!--Item slider-->
                              <div class="carousel-item">
                                  <div class="card border-0 rounded-0 text-light overflow zoom">
                                      <div class="position-relative">
                                          <!--thumbnail img-->
                                          <div class="ratio_left-cover-1 image-wrapper">
                                              <a href="#">
                                                  <img class="img-fluid w-100"
                                                       src="https://bootstrap.news/source/img2.jpg"
                                                       alt="">
                                              </a>
                                          </div>
                                          <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                              <!--title-->
                                              <a href="#">
                                                  <h2 class="h3 post-title text-white my-1">Walmart shares up 10% on online sales lift</h2>
                                              </a>
                                              <!-- meta title -->
                                              <div class="news-meta">
                                                  <span class="news-author">by <a class="text-white font-weight-bold" href="#">Jennifer</a></span>
                                                  <span class="news-date">Oct 22, 2019</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                              <!--Item slider-->
                              <div class="carousel-item">
                                  <div class="card border-0 rounded-0 text-light overflow zoom">
                                      <div class="position-relative">
                                          <!--thumbnail img-->
                                          <div class="ratio_left-cover-1 image-wrapper">
                                              <a href="#">
                                                  <img class="img-fluid w-100"
                                                       src="https://bootstrap.news/source/img3.jpg"
                                                       alt="">
                                              </a>
                                          </div>
                                          <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                              <!--title-->
                                              <a href="#">
                                                  <h2 class="h3 post-title text-white my-1">Bank chief warns on Brexit staff moves to other company</h2>
                                              </a>
                                              <!-- meta title -->
                                              <div class="news-meta">
                                                  <span class="news-author">by <a class="text-white font-weight-bold" href="#">Jennifer</a></span>
                                                  <span class="news-date">Oct 22, 2019</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                              <!--Item slider-->
                              <div class="carousel-item">
                                  <div class="card border-0 rounded-0 text-light overflow zoom">
                                      <div class="position-relative">
                                          <!--thumbnail img-->
                                          <div class="ratio_left-cover-1 image-wrapper">
                                              <a href="#">
                                                  <img class="img-fluid w-100"
                                                       src="https://bootstrap.news/source/img4.jpg"
                                                       alt="">
                                              </a>
                                          </div>
                                          <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                              <!--title-->
                                              <a href="#">
                                                  <h2 class="h3 post-title text-white my-1">The world's first floating farm making waves in Rotterdam</h2>
                                              </a>
                                              <!-- meta title -->
                                              <div class="news-meta">
                                                  <span class="news-author">by <a class="text-white font-weight-bold" href="#">Jennifer</a></span>
                                                  <span class="news-date">Oct 22, 2019</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <!--end item slider-->
                          </div>
                          <!--end carousel inner-->
                      </div>
                      
                      <!--navigation-->
                      <a class="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#featured" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                      </a>
                  </div>
                  <!--End slider news-->
                  
                  <!--Start box news-->
                  <div class="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                      <div class="row">
                          <!--news box-->
                          <div class="col-6 pb-1 pt-0 pr-1">
                              <div class="card border-0 rounded-0 text-white overflow zoom">
                                  <div class="position-relative">
                                      <!--thumbnail img-->
                                      <div class="ratio_right-cover-2 image-wrapper">
                                          <a href="#">
                                              <img class="img-fluid"
                                                   src="https://bootstrap.news/source/img5.jpg"
                                                   alt="">
                                          </a>
                                      </div>
                                      <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                          <!-- category -->
                                          <a class="p-1 badge badge-primary rounded-0" href="#">Lifestyle</a>
  
                                          <!--title-->
                                          <a href="#">
                                              <h2 class="h5 text-white my-1">Should you see the Fantastic Beasts sequel?</h2>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                          <!--news box-->
                          <div class="col-6 pb-1 pl-1 pt-0">
                              <div class="card border-0 rounded-0 text-white overflow zoom">
                                  <div class="position-relative">
                                      <!--thumbnail img-->
                                      <div class="ratio_right-cover-2 image-wrapper">
                                          <a href="#">
                                              <img class="img-fluid"
                                                   src="https://bootstrap.news/source/img6.jpg"
                                                   alt="">
                                          </a>
                                      </div>
                                      <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                          <!-- category -->
                                          <a class="p-1 badge badge-primary rounded-0" href="#">Motocross</a>
                                          <!--title-->
                                          <a href="#">
                                              <h2 class="h5 text-white my-1">Three myths about Florida elections recount</h2>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                          <!--news box-->
                          <div class="col-6 pb-1 pr-1 pt-1">
                              <div class="card border-0 rounded-0 text-white overflow zoom">
                                  <div class="position-relative">
                                      <!--thumbnail img-->
                                      <div class="ratio_right-cover-2 image-wrapper">
                                          <a href="#">
                                              <img class="img-fluid"
                                                   src="https://bootstrap.news/source/img7.jpg"
                                                   alt="">
                                          </a>
                                      </div>
                                      <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                          <!-- category -->
                                          <a class="p-1 badge badge-primary rounded-0" href="#">Fitness</a>
                                          <!--title-->
                                          <a href="#">
                                              <h2 class="h5 text-white my-1">Finding Empowerment in Two Wheels and a Helmet</h2>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                          <!--news box-->
                          <div class="col-6 pb-1 pl-1 pt-1">
                              <div class="card border-0 rounded-0 text-white overflow zoom">
                                  <div class="position-relative">
                                      <!--thumbnail img-->
                                      <div class="ratio_right-cover-2 image-wrapper">
                                          <a href="#">
                                              <img class="img-fluid"
                                                   src="https://bootstrap.news/source/img8.jpg"
                                                   alt="blog website templates bootstrap">
                                          </a>
                                      </div>
                                      <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                          <!-- category -->
                                          <a class="p-1 badge badge-primary rounded-0" href="#">Adventure</a>
                                          <!--title-->
                                          <a href="#">
                                              <h2 class="h5 text-white my-1">Ditch receipts and four other tips to be a shopper</h2>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <!--end news box-->
                      </div>
                  </div>
                  <!--End box news-->
              </section>
              <!--END SECTION-->
          </div>
      </div>
      <!--end code-->
    </div>
    </template>
  
    <style>
  .b-0 {
      bottom: 0;
  }
  .bg-shadow {
      background: rgba(76, 76, 76, 0);
      background: webkit-gradient(left top, left bottom, color-stop(0%, rgba(179, 171, 171, 0)), color-stop(49%, rgba(48, 48, 48, 0.37)), color-stop(100%, rgba(19, 19, 19, 0.8)));
      background: linear-gradient(to bottom, rgba(179, 171, 171, 0) 0%, rgba(48, 48, 48, 0.71) 49%, rgba(19, 19, 19, 0.8) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 );
  }
  .top-indicator {
      right: 0;
      top: 1rem;
      bottom: inherit;
      left: inherit;
      margin-right: 1rem;
  }
  .overflow {
      position: relative;
      overflow: hidden;
  }
  .zoom img {
      transition: all 0.2s linear;
  }
  .zoom:hover img {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
  }</style>
    
    