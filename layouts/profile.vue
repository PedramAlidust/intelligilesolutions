<template>
  <div>
    <the-header>
      <div class="container-full d-lg-none py-2 subNavPage px-4">
        <div class="row w-100 justify-content-between g-0">
          <nuxt-link
            class="col d-flex align-items-center gap-3 text-dark text-decoration-none"
            to="/profile"
          >
            <img src="~/assets/svg/angle-small-right.svg" alt="" />
            <span>Back</span>
          </nuxt-link>
          <div class="col-auto g-0"></div>
        </div>
      </div>
    </the-header>
    <div class="d-none d-lg-block mt-5">
      <div class="container">
        <div class="row">
          <div class="col-4 col-xl-3">
            <profile-menu-list />
          </div>
          <div class="col-8 col-xl-9">
            <nuxt />
          </div>
        </div>
      </div>
    </div>
    <div class="d-block d-lg-none mt-5">
      <div class="container">
        <div class="row">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/Navigation/TheHeader";
import ProfileMenuList from "../components/Navigation/ProfileMenuList";

export default {
  name: "profile",
  components: { ProfileMenuList, TheHeader },
};
</script>
