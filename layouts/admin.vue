<template>
  <main>
    <section class="AdminBkg">
      <div class="container-full">
        <div class="row gx-0">
          <div
            :class="{
              SideBkg: GetAdminRole == 'administrator',
              SideSubAdminBkg: GetAdminRole == 'editor',
            }"
            class="col-md-2 col-lg-2 text-center d-none d-md-block d-lg-block"
          >
            <img
              v-if="GetAdminRole == 'administrator'"
              src="~/assets/pictures/logokandaka.svg"
              class="DashLogo"
              alt="KandakaLogo"/>

            <img
              v-if="GetAdminRole == 'editor'"
              src="~/assets/pictures/subadminicon.png"
              class="p-4 DashLogo"
              alt="KandakaLogo"/>
              <div v-if="GetAdminRole == 'editor'" class="text-center">
                 <p style="margin: 0; font-size: 14pt;font-weight: bold;" class="">{{ DspUserName }}</p>
                 <p style="font-size: 11pt;" class="text-muted">{{ DspUserEmail }}</p>
              </div>
            <div
              class="d-flex align-items-center justify-content-start px-4 pt-4">
              <img
                v-if="GetAdminRole == 'administrator'"
                src="~/assets/pictures/DashBoardIcon.svg"
                class="DashBoardIcon"
                alt="DashBoardIcon"
              />
              <img
                v-if="GetAdminRole == 'editor'"
                src="~/assets/pictures/dashicon.png"
                class="DashBoardIcon"
                alt="DashBoardIcon"
              />
              <nuxt-link to="/admin">
                <p
                  :class="{
                    ItemsColor: GetAdminRole == 'administrator',
                    SubAdminItemsColor: GetAdminRole == 'editor',
                  }"
                  class="m-0 px-3"
                >
                  Dashboard
                </p>
              </nuxt-link>
            </div>
            <!-- Dashborad Items -->
            <!-- Exit Items -->
            <div
              class="
                d-flex
                align-items-center
                justify-content-start
                px-4
                IconDist
              "
            >
               <img
                v-if="GetAdminRole == 'administrator'"
                src="~/assets/svg/exit.svg"
                class="DashBoardIcon"
                alt="DashBoardIcon"
              />
              <img
                v-if="GetAdminRole == 'editor'"
                src="~/assets/svg/exitsvg.svg"
                class="DashBoardIcon"
                alt="DashBoardIcon"
              />
              <p
              role="button" 
              @click="ExitApp"
              :class="{ItemsColor: GetAdminRole == 'administrator',
                    SubAdminItemsColor: GetAdminRole == 'editor',}" 
                    class="m-0 px-3">
                Exit
              </p>
            </div>
          </div>
          <!-- search section -->
          <div class="col-12 col-md-10 col-lg-10 px-md-4 px-lg-4">
            <div
              class="
                container-full
                NavBar
                mt-4
                px-4
                d-none d-md-block d-lg-block
              "
            >
              <div class="d-flex align-items-center justify-content-between">
                <!-- bootstrap form -->
                <form class="form-inline">
                  <div class="d-flex">
               
                  </div>
                </form>
                <!-- searchbar right  items -->
                <div class="d-flex align-items-center">
                  <p class="AdminUser p-0 m-0 px-3">Main Admin User</p>
                  <img
                    class="AdminImg"
                    src="~/assets/pictures/AdminImg.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <!-- menu responsive -->
            <div class="container-full d-md-none bg-white position-relative">
              <div class="row g-0 border-bottom py-2 px-3">
                <div class="col-4 text-end my-auto">
                  <button class="border-0 bg-transparent" @click="header(true)">
                    <img src="~/assets/pictures/AdminMenu.jpg" alt="MenuIcon" />
                  </button>
                </div>
                <div class="col-4 text-center my-auto">
                  <img
                    class="KandakaLogo"
                    src="~/assets/pictures/logokandaka.svg"
                    alt="KandakaLogo"
                  />
                </div>
                <div class="col-4 text-start my-auto">
                  <img
                    class="UserPic"
                    src="~/assets/pictures/AdminImg.png"
                    alt="AdminPic"
                  />
                </div>
              </div>
              <div
                class="w-100 position-absolute left-0 d-md-none d-lg-none"
                style="z-index: 900; height: calc(100vh - 6rem)"
                @click="header(false)"
                v-if="headerStatus"
              >
                <div class="w-50 SideBkg text-center position-absolute left-0">
                  <img
                    src="~/assets/pictures/logokandaka.svg"
                    class="DashLogo"
                    alt="KandakaLogo"
                  />
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-start
                      px-4
                      pt-4
                    "
                  >
                    <img
                      src="~/assets/svg/DashBoardIcon.svg"
                      class="DashBoardIcon"
                      alt="DashBoardIcon"
                    />
                    <nuxt-link to="/admin">
                      <p class="m-0 ItemsColor px-3">Dashboard</p>
                    </nuxt-link>
                  </div>
                  <!-- Dashborad Items -->
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-start
                      px-4
                      IconDist
                    "
                  >
                    <img
                      src="~/assets/svg/shop.svg"
                      class="DashBoardIcon"
                      alt="DashBoardIcon"
                    />
                    <nuxt-link to="/admin/products">
                      <p class="m-0 ItemsColor px-3">Products</p>
                    </nuxt-link>
                  </div>
                  <!-- Dashborad Items -->
                  <div v-if="GetAdminRole == 'administrator'" class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img
                      src="~/assets/svg/subadmin.svg"
                      class="DashBoardIcon"
                      alt="DashBoardIcon"
                    />
                    <a href="/admin/subadmin">
                      <p class="m-0 ItemsColor px-3">Sub Admin</p>
                    </a>
                  </div>
                  <!-- Dashborad Items -->
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-start
                      px-4
                      IconDist
                    "
                  >
                    <img
                      src="~/assets/svg/contact.svg"
                      class="DashBoardIcon"
                      alt="DashBoardIcon"
                    />
                    <nuxt-link to="/admin/contact">
                      <p class="m-0 ItemsColor px-3">Contact</p>
                    </nuxt-link>
                  </div>
                  <!-- Dashborad Items -->
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-start
                      px-4
                      IconDist
                    "
                  >
                    <img
                      src="~/assets/svg/discounts.svg"
                      class="DashBoardIcon"
                      alt="DashBoardIcon"
                    />
                    <nuxt-link to="/admin/discount">
                      <p class="m-0 ItemsColor px-3">Discounts</p>
                    </nuxt-link>
                  </div>
                  <!-- Dashborad Items -->
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-start
                      px-4
                      IconDist
                    "
                  >
                    <img
                      src="~/assets/svg/comments.svg"
                      class="DashBoardIcon"
                      alt="DashBoardIcon"
                    />
                    <nuxt-link to="/admin/comments">
                      <p class="m-0 ItemsColor px-3">Comments</p>
                    </nuxt-link>
                  </div>
                  <!-- Exit Items -->
                  <div @click="ExitApp" class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/exit.svg" class="DashBoardIcon" alt="DashBoardIcon" />
                    <p class="m-0 ItemsColor px-3">Exit</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Menu Responsive -->
            <!-- other sections goes here -->
            <nuxt />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TicketBox from "@/components/admin/TicketDropDown";
import ContactBox from "@/components/admin/ContactDropDown";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { TicketBox, ContactBox },

  data() {
    return {
      ticket: false,
      contact: false,
      headerStatus: false,
    };
  },
  computed: {
    ...mapGetters(["GetAdminRole"]),
    DspUserName() {
      return this.$cookiz.get("AdminName");
    },
    DspUserEmail() {
      return this.$cookiz.get("AdminEmail");
    },
  },

  methods: {
     ...mapActions(["ExitAdmin"]),
    ExitApp() {
      this.ExitAdmin()
    },
    TicketToggle() {
      this.ticket = !this.ticket;
      this.contact = false;
    },

    ContactToggle() {
      this.contact = !this.contact;
      this.ticket = false;
    },

    header(status) {
      this.headerStatus = status;
    },
  },
  /* check if Admin user is not authenticated */
  middleware({ redirect, app }) {
    if (!app.$cookiz.get("AdminToken")) {
      redirect("/admin/login");
    }
  },
};
</script>

<style scoped>
/* Responsive Admin Menu */

.KandakaLogo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.UserPic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

/* End Admin Menu */

a {
  text-decoration: none;
}

canvas {
  width: 100%;
  height: 100%;
}

.TotalOrders {
  color: #e1da18;
}

.OverviewNum {
  color: #f20000;
}

.TicketNum {
  color: #4d77f9;
}

.UserNum {
  color: #ed3b65;
}

.ProdNum {
  color: #159282;
}

.ProdCount {
  font-size: 8pt;
  color: #8898aa;
}

.TotalProd {
  width: 40px;
}

.StateTitle {
  font-family: "Open Sans", sans-serif;
  font-size: 10pt;
  color: #8898aa;
  padding: 15px;
  padding-bottom: 0;
}

.DashState {
  background-color: #fff;
  border-radius: 5px;
  min-height: 10vh;
}

.AdminUser {
  font-family: "Source Sans Pro", sans-serif;
  color: #4d4f5c;
  font-size: 10pt;
}

.AdminImg {
  width: 30px;
  height: 30px;
}

.RingIcon {
  width: 55px;
}

.CommentIcon {
  width: 19px;
}

.BarIcon {
  width: 2px;
}

.DashBoardIcon {
  width: 11%;
}

.SearchIcon {
  width: 15px;
}

::placeholder {
  color: #e0e0e5;
  font-size: 10pt;
}

.DashLogo {
  width: 50%;
}

.Inputstyle:focus {
  border-color: none;
  box-shadow: none;
}

.form-control {
  border: none;
}

.form-inline {
  width: 20%;
}

.AdminBkg {
  background-color: #f0f0f7;
}

@media (max-width: 991px) {
  .AdminBkg {
    min-height: 100vh;
  }
}

.NavBar {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.05);
  padding: 7px;
}

.IconDist {
  margin-top: 25px;
}

.ItemsColor {
  color: #fff;
  font-family: "Open Sans";
  font-size: 11pt;
}

.SubAdminItemsColor {
  color: black;
  font-family: "Open Sans";
  font-size: 11pt;
}

.SideBkg {
  background-image: url("~/assets/pictures/AdminSidebar.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
}
@media screen and (min-width: 1200px) {
  .SideBkg {
    background-image: url("~/assets/pictures/AdminSidebar.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .SideSubAdminBkg {
    background-color: #fff;
  }

  .DashLogo {
    width: 80%;
  }
  .IconDist {
    margin-top: 35px;
  }
  .DashBoardIcon {
    width: 10%;
  }
}
</style>
