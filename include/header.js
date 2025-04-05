document.write(`




    <!-- preloader -->
    <div class="preloader">
        <div class="loader-book">
            <div class="loader-book-page"></div>
            <div class="loader-book-page"></div>
            <div class="loader-book-page"></div>
        </div>
    </div>
    <!-- preloader end -->


    <!-- header area -->
    <header class="header">
        <!-- header top -->
        <div class="header-top">
            <div class="container ps-0">
                <div class="header-top-wrap">
                    <div class="header-top-left">
                        <div class="header-top-social">
                            <span>Follow Us: </span>
                            <a href="${facebook}"><i class="fab fa-facebook-f"></i></a>
                            <a href="${instagram}"><i class="fab fa-instagram"></i></a>
                            <a href="${youtube}"><i class="fab fa-youtube"></i></a>
                            <a href="wa.me/+91${name}"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div class="header-top-right">
                        <div class="header-top-contact">
                            <ul>
                                <li>
                                    <a href="#"><i class="far fa-location-dot"></i> ${address}</a>
                                </li>
                                <li>
                                    <a
                                        href="#"><i
                                            class="far fa-envelopes"></i> <span >${email}</span></a>
                                </li>
                                <li>
                                    <a href="tel:+91${number}"><i class="far fa-phone-volume"></i> ${number}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main-navigation">
            <nav class="navbar navbar-expand-lg">
                <div class="container position-relative">
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/img/logo/logo.png" alt="logo">
                    </a>
                    <div class="mobile-menu-right">
                        <div class="search-btn">
                            <button type="button" class="nav-right-link search-box-outer"><i
                                    class="far fa-search"></i></button>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-mobile-icon"><i class="far fa-bars"></i></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="main_nav">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link  active" href="#" data-bs-toggle="dropdown">Home</a>
                                
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" data-bs-toggle="dropdown">Courses</a>
                                
                            </li>
                            <li class="nav-item mega-menu dropdown">
                                <a class="nav-link " href="#" data-bs-toggle="dropdown">Academics</a>
                                
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" data-bs-toggle="dropdown">About</a>
                                
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" data-bs-toggle="dropdown">Application Form</a>
                                
                            </li>
                            
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                        </ul>
                        <div class="nav-right">
                            <div class="search-btn">
                                <button type="button" class="nav-right-link search-box-outer"><i
                                        class="far fa-search"></i></button>
                            </div>
                            <div class="nav-right-btn mt-2">
                                <a href="application-form.html" class="theme-btn"><span
                                        class="fal fa-pencil"></span>Apply Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <!-- header area end -->

    <!-- popup search -->
    <div class="search-popup">
        <button class="close-search"><span class="far fa-times"></span></button>
        <form action="#">
            <div class="form-group">
                <input type="search" name="search-field" placeholder="Search Here..." required>
                <button type="submit"><i class="far fa-search"></i></button>
            </div>
        </form>
    </div>
    <!-- popup search end -->


    `);