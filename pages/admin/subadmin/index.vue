<template>
  <section>
    <!-- Tabs navs -->
    <div class="container-full mt-4 px-4 TableBkg d-none d-md-block d-lg-block">
      <div class="d-flex justify-content-between pt-5 px-3">
        <!-- pagination -->
        <AdminPagination />
        <!-- end pagination -->
        <!-- sort section -->
        <div class="d-flex align-items-center">
          <button
            @click="RegisterModal"
            type="button"
            class="BtnStyleProd btn btn-sm"
          >
            Add New Admin
          </button>
        </div>
        <!-- end sort section -->
      </div>
      <!-- table section -->
      <div class="container-full px-3">
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gmail</th>
              <th>Phone Num</th>
              <th>User name</th>
              <th>Password</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in GetSubAdmins" :key="user.id">
              <td>
                <p>{{ user.id }}</p>
              </td>
              <td>
                <p>{{ user.name }}</p>
              </td>
              <td>
                <p>{{ user.acf.zipcode }}</p>
              </td>
              <td>
                <p>{{ user.acf.phonenum }}</p>
              </td>
              <td>
                <p>{{ user.acf.FullName }}</p>
              </td>
              <td>
                <p>pass</p>
              </td>
              <td>
                <i class="bi bi-eye"></i>
              </td>
              <td>
                <!-- switch button -->
                <div class="d-flex justify-content-between">
                  <p>inactive</p>
                  <!-- Checked switch -->
                  <div class="form-check form-switch">
                    <input
                      class="InputStyle form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      checked
                    />
                  </div>
                  <!-- end checked switch -->
                  <p>Active</p>
                </div>
              </td>
              <td>
                <i class="bi bi-three-dots-vertical"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--Phone response-->
    <div class="mt-4 px-3 d-lg-none d-md-none">
      <div class="d-flex justify-content-center align-items-center">
        <button
          @click="RegisterModal"
          type="button"
          class="BtnStyleProd btn btn-sm"
        >
          Add New Admin
        </button>
      </div>
      <div class="mt-4" v-for="user in GetSubAdmins" :key="user.id">
        <div
          class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">#</p>
          <p class="RightItemColor">{{ user.id }}</p>
        </div>
        <!-- devider section -->
        <div class="devider"></div>
        <!-- end devider section -->
        <div
          class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Name</p>
          <p class="RightItemColor">{{ user.name }}</p>
        </div>
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
          class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Gmail</p>
          <p class="RightItemColor">{{ user.acf.zipcode }}</p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
          class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Phone Num</p>
          <p class="RightItemColor">{{ user.acf.phonenum }}</p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
          class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Price</p>
          <p class="RightItemColor">{{ user.acf.FullName }}</p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
          class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Password</p>
          <div class="d-flex align-items-center">
            <i class="bi bi-eye me-2"></i>
            <p class="RightItemColor">pass</p>
          </div>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <div
          class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <!-- call details modal -->
          <div class="d-flex justify-content-between">
            <p>inactive</p>
            <!-- Checked switch -->
            <div class="form-check form-switch">
              <input
                class="InputStyle form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked
              />
            </div>
            <!-- end checked switch -->
            <p class="ms-3">Active</p>
          </div>
          <!-- change details -->
          <div>
            <!-- change details modal -->
            <div
              id="CollapseState2"
              aria-expanded="false"
              class="ChangeState bg-white collapse"
            >
              <p
                role="button"
                class="StatusDevider py-2 text-danger text-center"
              >
                Check
              </p>
              <p
                role="button"
                class="StatusDevider py-2 text-warning text-center"
              >
                Send
              </p>
              <p
                role="button"
                class="StatusDevider py-2 text-success text-center"
              >
                Delivered
              </p>
              <p role="button" class="py-2 text-primary text-center">
                Preparation
              </p>
            </div>
            <i
              data-bs-toggle="collapse"
              data-bs-target="#CollapseState2"
              class="bi bi-three-dots-vertical"
            ></i>
          </div>
        </div>
      </div>

      <!-- end item section -->
    </div>
    <!-- New Admin Modal -->
    <div v-if="NewAdminModal" class="BackDrop">
      <div class="FormModal bg-white px-4 py-4">
        <div class="d-flex justify-content-between">
          <p class="RegisterModal">New Admin</p>
          <i @click="CloseModal" class="CloseBtn bi bi-x-lg"></i>
        </div>
        <p class="RegisterDesc mt-3">
          Please fill in the following forms carefully to add a new admin to the
          sub panel.
        </p>
        <!-- form Input -->
        <form class="bg-white mt-4">
          <!-- Name input -->
          <div class="form-outline mb-3">
            <input
              placeholder="Name"
              v-model="Name"
              type="text"
              id="form1Example3"
              class="RegInput form-control"
            />
          </div>
          <!-- UserName input -->
          <div class="form-outline mb-4">
            <input
              placeholder="UserName"
              v-model="UserName"
              type="text"
              id="form1Example4"
              class="RegInput form-control"
            />
          </div>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <input
              placeholder="Email address"
              v-model="Email"
              type="email"
              id="form1Example1"
              class="RegInput form-control"
            />
          </div>
          <!-- Password input -->
          <div class="form-outline mb-4">
            <input
              placeholder="Password"
              v-model="Password"
              type="password"
              id="form1Example2"
              class="RegInput border-secondary form-control"
            />
          </div>
        </form>
        <!-- end form Input -->
        <div class="d-flex align-items-center justify-content-center">
          <div @click="CloseModal" class="mx-2 CancelBtn mt-2 btm btn-sm">
            Cancel
          </div>
          <a
            href="/admin/subadmin"
            @click="PostData"
            class="SaveBtn mt-2 btn btn-sm"
            role="button"
            >Save</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AdminPagination from "@/components/AdminPagination";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "admin",
  layout: "admin",
  components: { AdminPagination },
  data() {
    return {
      Name: "",
      Email: "",
      Password: "",
      UserName: "",
      NewAdminModal: false,
    };
  },

  methods: {
    RegisterModal() {
      this.NewAdminModal = true;
    },
    CloseModal() {
      this.NewAdminModal = false;
    },
    ...mapActions(["SetSubAdmin"]),
    PostData() {
      this.SetSubAdmin({
        username: this.Name,
        email: this.Email,
        password: this.Password,
      });
    },
  },

  computed: {
    ...mapGetters(["GetSubAdminUser", "GetSubAdminPass", "GetSubAdminEmail"]),
    /* filter the data */
    GetSubAdmins() {
      /* filter all users if acf is not false */
      return this.AllUsers.filter((user) => {
        if (user.acf) {
          return user.acf !== false;
        }
      });
    },
  },

  async asyncData({ store }) {
    /* Register a User Through AsyncDta */

    var data = JSON.stringify({
      name: store.getters.GetSubAdminUser,
      username: store.getters.GetSubAdminUser,
      email: store.getters.GetSubAdminEmail,
      password: store.getters.GetSubAdminPass,
      roles: ["editor"],
      acf: {
        FullName: "AlisaBecker",
        firstname: "jak",
        lastname: "jaki",
        streetaddress: "mayamei",
        aptsuite: "apartment",
        city: "beverlihilz",
        state: "masachoset",
        zipcode: "45869",
        phonenum: "095686354",
        deliveryinstruction: "that is awsome",
        paymentmethod: "visa",
        cardfirstname: "jak",
        cardlastname: "jak obst",
        cardnumber: "566824",
        cvv: "45",
        cardexpmonth: "11/05/2021",
        cardexpyear: "2025",
      },
    });

    var config = {
      method: "post",
      url: "https://api.intelligilesolutions.com/wp-json/wp/v2/users",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmludGVsbGlnaWxlc29sdXRpb25zLmNvbSIsImlhdCI6MTY1OTczMjExNSwibmJmIjoxNjU5NzMyMTE1LCJleHAiOjE2NjAzMzY5MTUsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.bBnL6XbpjhJ0pOeeEHeLXpGP0DncuT9fRTYW3Ii-fII",
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
      });

    /* Get All SubAdmin Data */

    var config = {
      method: "get",
      url: "https://api.intelligilesolutions.com/wp-json/wp/v2/users",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmludGVsbGlnaWxlc29sdXRpb25zLmNvbSIsImlhdCI6MTY1OTczMjExNSwibmJmIjoxNjU5NzMyMTE1LCJleHAiOjE2NjAzMzY5MTUsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.bBnL6XbpjhJ0pOeeEHeLXpGP0DncuT9fRTYW3Ii-fII",
        "Content-Type": "application/json",
      },
    };

    return await axios(config)
      .then(function (response) {
        return {
          AllUsers: response.data,
        };
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  },
};
</script>

<style scoped>
::placeholder {
  opacity: 1 !important;
  font-family: "Open Sans", sans-serif;
  font-size: 10pt;
  color: #231942;
}

.RegInput {
  border: solid 0.5px #c9c6d1 !important;
  border-radius: 4px !important;
  height: 45px;
}

.CancelBtn {
  background-color: #fff;
  color: #231942 !important;
  border: solid 0.8px #a3a6b4;
  padding: 10px 53px;
  box-shadow: none;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.SaveBtn {
  background-color: #65a79f;
  padding: 10px 53px;
  color: #fff !important;
  box-shadow: none;
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.RegisterDesc {
  font-size: 10pt;
  font-family: "Open Sans", sans-serif;
  color: #4d4f5c;
}

.CloseBtn {
  color: #a4afb7;
  font-size: 16pt;
  cursor: pointer;
}

.RegisterModal {
  font-family: "Open Sans", sans-serif;
  color: #231942;
  font-size: 18pt;
}

/* filterd blur backdrop */
.BackDrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  backdrop-filter: blur(5px);
}

.form-switch {
  padding-right: 15;
  padding-left: 0;
}

.InputStyle:focus {
  box-shadow: none !important;
  background-image: none !important;
}

.InputStyle::before {
  box-shadow: none !important;
  background-image: none !important;
}

.form-switch .form-check-input:after {
  background-color: #e99d7b;
}

.form-check-input {
  background-image: none;
  border: none;
}

.form-check-input:checked {
  background-color: #055452;
  box-shadow: none;
  border: none;
}

.form-check-input:checked:focus {
  background-color: #055452;
  transition: none;
  border: none;
}

.form-switch .form-check-input:checked[type="checkbox"]:after {
  background-color: #e99d7b;
  outline: 0;
  box-shadow: 0;
  border: none;
}

.BtnStyleProd {
  box-shadow: none;
  background-color: #e99d7b;
  color: #fff;
  padding: 8px 12px;
  border-radius: 2px;
}

th {
  background-color: #f5f6fa;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: 10pt;
  color: #212529;
  padding: 10px 15px;
  border-bottom: 0;
}

td {
  color: black;
  font-weight: 400;
  font-family: "Source Sans Pro", sans-serif;
}

p {
  margin-bottom: 0;
}

.DetailBtn {
  background-color: #e99d7b;
  color: #231942;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 10pt;
  padding: 5px 25px;
  text-transform: capitalize;
}

.DetailBtn:focus {
  box-shadow: none;
}

.page-link {
  color: #4d4f5c;
  padding: 8px 15px;
}

.page-link:focus {
  background-color: #055452;
  color: #fff;
  box-shadow: none;
}

.SortStatus {
  color: #828282;
  font-family: "Open Sans";
  font-size: 10pt;
  font-weight: 400;
}

.sort {
  color: #000000;
  font-family: "Open Sans";
  font-size: 14pt !important;
  font-weight: 400;
  font-size: 10pt;
}

.TableBkg {
  background-color: #fff;
  min-height: 80vh;
}

.nav-link {
  font-family: "Source Sans Pro", sans-serif;
  color: #9296ad;
  background-color: #fff;
  font-size: 10pt;
}

.nav-link.active {
  background-color: #055452;
  color: #fff !important;
  border-radius: 8px;
  font-weight: 600;
}

.nav-tabs {
  border-bottom: 0;
}
/*Form Modal */
.FormModal {
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: #fff !important;
  box-shadow: 0 0 7.5px 0 rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 1280px) {
  .FormModal {
    position: fixed;
    top: 20%;
    left: 35%;
    z-index: 3;
    width: 400px;
    background-color: #fff !important;
    box-shadow: 0 0 7.5px 0 rgba(0, 0, 0, 0.1);
    padding: 40px 50px;
  }
}
</style>
