<template>
  <div>
    <template v-if="user">
      <dropdown>
        <button type="button" class="btn loginbtn">
          <i class="bi bi-chevron-down loginicon">
            <span class="signintext">{{ user.name }}</span>
          </i>
        </button>
        <template slot="content">
          <nuxt-link class="nav-item" to="/">
            <div class="nav-item-text">
              <span class="nav-item-user">
                <i class="bi bi-person"></i>
                {{ user.name }}
              </span>
              <i class="bi bi-chevron-right"></i>
            </div>
          </nuxt-link>
          <nuxt-link class="nav-item" to="/">
            <i class="bi bi-cart-plus"></i>
            <div class="nav-item-text">Cart</div>
          </nuxt-link>
          <nuxt-link class="nav-item" to="/">
            <i class="bi bi-cart-check"></i>
            <div class="nav-item-text">Orders</div>
          </nuxt-link>
          <nuxt-link class="nav-item" to="/">
            <i class="bi bi-heart"></i>
            <div class="nav-item-text">Saved</div>
          </nuxt-link>
          <nuxt-link class="nav-item" to="/">
            <i class="bi bi-cart-plus"></i>
            <div class="nav-item-text">Comments</div>
          </nuxt-link>
          <nuxt-link class="nav-item" to="/">
            <i class="bi bi-headset"></i>
            <div class="nav-item-text">Support</div>
          </nuxt-link>
          <a href="#" class="nav-item" @click="logout">
            <i class="bi bi-box-arrow-right"></i>
            <div>Exit</div>
          </a>
        </template>
      </dropdown>
    </template>
    <template v-else>
      <nuxt-link to="/login">
        <button type="button" class="btn loginbtn">
          <i class="bi bi-box-arrow-right loginicon">
            <span class="signintext">sign in</span>
          </i>
        </button>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
import {mapState} from "vuex";
import dropdown from "../Dropdown";

export default {
  name: "TheNavMenu",
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  components: {dropdown},
  methods:{
    logout() {
      // logout process
    }
  }
}
</script>

<style scoped>
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

.nav-item {
  display: flex;
  gap: 15px;
  margin: 10px;
  color: black;
  appearance: none;
  text-decoration: none;
  transition: color 0.15s ease-in-out;
}

.nav-item:hover {
  color: #e99d7b;
}

.nav-item-text {
  display: flex;
  width: 100%;
  text-align: left;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.nav-item-user {
  flex: 1;
  display: flex;
  gap: 15px;
}
</style>