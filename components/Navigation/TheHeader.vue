<template>
  <!-- navigation section -->
  <header>  
  <div class="container py-4 d-none d-lg-block">
    <div class="row">
      <div class="col-lg-1">
        <img src="~/assets/pictures/logokandaka.png" alt="logo" class="logo" />
      </div>
      <div class="col-lg-5 text-start pe-5">
        <nav class="navbar shadow-0 navbar-expand-lg py-4 pe-2">
          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link active-item">Home</a>
              </li>
              <li class="nav-item px-3">
                <a href="#trend" class="nav-link">About</a>
              </li>
              <li class="nav-item px-3">
                <a href="#popular" class="nav-link">Products</a>
              </li>
              <li class="nav-item px-3">
                <a href="#discount" class="nav-link">Contact</a>
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
      <div class="col-lg-3 text-start py-4 d-flex flex-row  flex-row-reverse">
        <button type="button" class="btn loginbtn">
            <i class="bi bi-box-arrow-right loginicon">
              <span class="signintext">sign in</span>
            </i>         
        </button>
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
</style>
