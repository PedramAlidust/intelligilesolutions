<template>
  <!-- navigation section -->
  <header class="SubPageMenuBkg">  
  <div class="container py-4 d-none d-lg-block">
    <div class="row">
      <div class="col-lg-1">
        <img src="~/assets/pictures/logokandaka.png" alt="logo" class="logo" />
      </div>
      <div class="col-lg-5 text-start pe-5">
        <nav class="navbar shadow-0 navbar-expand-lg py-4 pe-2">
          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav">
               <nuxt-link class="nav-link" to="/">
                 Home
              </nuxt-link>
              <li class="nav-item px-3">
                <nuxt-link class="nav-link" to="/about">
                  About
                </nuxt-link>
              </li>
              <li class="nav-item px-3">
                <a href="#popular" class="nav-link">Products</a>
              </li>
              <li class="nav-item px-3">
                <nuxt-link class="nav-link" to="/contact">
                  Contact
                </nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="col-lg-3 text-end py-4 SearchForm">
        <!-- search form --> 
        <div class="d-flex flex-row">
          <div class="form-outline">
            <input type="search" id="form1" class="form-control inputstyle" />
            <label class="SearchFormLabel" for="form1">Search...</label>
          </div>
          <button type="button" class="btn searchbtn rounded-circle">
            <i class="bi bi-search searchicon"></i>
          </button>
        </div>
      </div>
      <div class="col-lg-3 text-start py-3 mt-1 d-flex flex-row  flex-row-reverse">
        <nuxt-link to="/login">
        <button type="button" class="btn loginbtn">
            <i class="bi bi-box-arrow-right loginicon">
              <span class="signintext">sign in</span>
            </i>         
        </button>
        </nuxt-link>
        <button type="button" class="btn shopbtn">
            <i class="bi bi-bag shopicon"></i>         
        </button>      
      </div>
    </div>
  </div>
  <!-- menu responsive -->
  <div class="container-full d-lg-none py-3 MobileMenuBack px-5">
    <div class="row g-0">
       <div class="col-4">
          <div class="d-flex flex-row align-items-center mt-3">
            <img src="~/assets/pictures/search.svg" class="SearchIcon" alt="search">
            <div class="px-1"></div>
            <img src="~/assets/pictures/shop.svg" class="ShopIcon" alt="search">
          </div>
       </div>
       <div class="col-4 text-center">
          <img src="~/assets/pictures/logokandaka.png" alt="logo" class="logo" />
       </div>
       <div class="col-4 text-start">
          <img src="~/assets/pictures/menu.svg" alt="menu" class="MobileMenuIcon">
       </div>
    </div>
  </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: ["menu_data"],
};
</script>


<style scoped>
/* navbar component style */
nav a {
  color: #055452 !important;
  font-family: Playfair Display !important;
  font-weight: 700;
  font-size: 18px;
}

nav a:hover {
  color:  #e99d7b !important;
}

.logo {
  border-radius: 50%;
  width: 97px;
}

@media screen and (max-width: 320px) {
  .logo {
    display: none;
  }
}
  

@media all and (max-width: 994px) {

  .logo {
    border-radius: 50%;
    width: 70px;
  }

  .SearchIcon {
    width: 40px;
    background-color: #e99d7b;
    border-radius: 50%;
    padding: 9px;
  }

  .ShopIcon {
    width: 40px;  
    background-color: #e99d7b;
    border-radius: 40%;
    padding: 9px;
  }

}

@media all and (max-width: 1200px) {
  .SearchForm {
    display: none;
  }
}

 .SearchFormLabel {
  position: absolute;
  color: #a1a2a1;
  top: 10px;
  right: 75%;
  font-family: 'Open Sans';
  font-size: 8pt;
  font-style: italic;
  font-weight: normal;

 }

.MobileMenuBack {
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.09);
}

.MobileMenuIcon {
  margin-top: 30px;
}

.searchbtn {
  background-color: #e99d7b !important;
  margin-left: -36px !important;
  margin-top: 0px;
  height: 37px;
  width: 37px;
  z-index: 1;
}

.searchicon {
 color: #055452;
 position: relative;
 right: 2px;
}

.inputstyle {
  border: 0.5px solid #707070 !important;
  border-radius: 30px !important;
}

.loginbtn {
  background-color: #e99d7b !important;
  height: 45px;
  border-radius: 30px !important;
}

.loginicon {
  color: #055452;
  font-size: 15pt;
}

.signintext {
  font-weight: 600;
  font-size: 16px;
  color: #055452;
  font-family: 'Open Sans';
  font-style: normal;
  padding: 8px;
}

.shopbtn {
  background-color: #e99d7b !important;
  border-radius: 50% !important;
  margin-right: 10px;
  height: 40px;
  width: 40px;
}

@media all and (max-width: 1200px) {
  .SearchForm {
    display: none;
  }
}

 .SubPageMenuBkg {
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.09);
 }

</style>
