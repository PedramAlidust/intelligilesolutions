<template>
  <div>
    <section class="d-none d-lg-block">
      <div class="container-full mt-4 px-4">
        <!-- Tabs navs -->
      </div>
      <!-- Tabs navs -->
      <div class="container-full mt-4 px-4 TableBkg">
        <div class="d-flex justify-content-between pt-5 px-3">
          <!-- pagination -->
          <AdminPagination />
          <!-- end pagination -->
          <!-- sort section -->
          <div class="d-flex align-items-center">
            <button
                @click="Discount(true)"
                type="button"
                class="BtnStyleProd btn btn-sm">
              Add New Discount
            </button>
          </div>
          <!-- end sort section -->
        </div>
        <!-- table section -->
        <div v-if="!loading" class="container-full px-3 table-responsive">
          <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Percent</th>
              <th>Code</th>
              <th>Text</th>
              <th>Expiration date</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(discount, index) in discounts" :key="index + 50">
              <td>
                <p>1</p>
              </td>
              <td>
                <img
                    class="DiscountImage"
                    :src="discount.acf.image"
                    alt="DiscountBaner"/>
              </td>
              <td>
                <p>%{{ discount.acf.discount }}</p>
              </td>
              <td>
                <p>{{ discount.acf.cuponcode }}</p>
              </td>
              <td>
                <p>{{ discount.acf.pricetitle }}</p>
              </td>
              <td>
                <p>{{ discount.acf.expiration }}</p>
              </td>
              <td>
                <!-- switch button -->
                <div class="d-flex justify-content-between">
                  <p>inactive</p>
                  <!-- Checked switch -->
                  <div class="ps-4 pe-3 form-check form-switch">
                    <input
                        style="margin: 0; margin-top: 3px"
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
               <button type="button" class="DetailBtn btn btn-sm">
                  <i class="CheckIcon bi bi-check2"></i>
                </button>
                <button type="button" class="DetailBtn btn btn-sm">
                  <i class="CancelIcon bi bi-x-lg"></i>
                </button>
            </tr>
            </tbody>
          </table>
        </div>
          <!--loading section -->
        <div v-if="loading" class="text-center mt-4">
          <p class="text-success" style="font-size: 12pt; font-weight: bold">
            Loading...
          </p>
        </div>
      </div>
    </section>
    <!--mobile-->
    <section class="d-md-none d-lg-none py-5 px-3">
      <div class="w-100 d-flex justify-content-between">
        <div><h1>Discount</h1></div>
        <div>
          <button
              @click="Discount(true)"
              class="BtnStyleProd border-0 rounded-1 d-flex"
          >
            <i class="bi bi-plus-lg" />
            <p class="ms-2 mb-0">Add New Discount</p>
          </button>
        </div>
      </div>
      <div class="mt-4">
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <img src="~/assets/pictures/off2.jpg" alt="" class="img-fluid" />
        </div>
        <!-- devider section -->
        <div class="devider"></div>
        <!-- end devider section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">#</p>
          <p class="RightItemColor">1</p>
        </div>
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Percent</p>
          <p class="RightItemColor">Jack Dorsi</p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Code</p>
          <p class="RightItemColor">Kandaka-discount</p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Text</p>
          <p class="RightItemColor">September30,2022</p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Expiration date</p>
          <p class="RightItemColor">at 10:56 am</p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Order Status</p>
          <p class="RightItemColor">Check</p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <!-- call details modal -->
          <div class="d-flex">
            <p>inactive</p>
            <!-- Checked switch -->
            <div class="ps-4 pe-3 form-check form-switch">
              <input
                  style="margin: 0; margin-top: 3px"
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
          <i class="bi bi-three-dots-vertical"></i>
        </div>
        <!-- end item section -->
      </div>
    </section>

    <!--add discount-->
    <div v-if="AddDiscount" class="BackDrop" style="overflow-y: scroll">
      <div class="FormModal bg-white px-4 py-4">
        <div class="d-flex justify-content-end">
          <button @click="Discount(false)" class="border-0 bg-transparent">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="mt-4">
          <div
              class="border rounded-1 d-flex flex-column align-items-center justify-content-center py-2 px-4 bg-white"
          >
            <div>
              <img src="~/assets/pictures/uoloadP.png" alt="" class="w-100" />
            </div>
            <div class="d-flex justify-content-center mt-4">
              <span>Add your Image</span>
              <button
                  class="bi-plus-lg bg-warning border-0 rounded-circle"
                  style="margin-left: 10px"
              />
            </div>
          </div>
        </div>
        <!-- form Input -->
        <form class="bg-white mt-4">
          <div class="form-outline rounded-1 mb-3 position-relative">
            <label
                class="position-absolute bg-white"
                style="top: -15px; left: 10px"
            >Subject</label
            >
            <input
                placeholder="Please enter the title of the discount"
                type="text"
                v-model="subject"
                id="form1Example3"
                class="RegInput form-control py-2 px-3"
            />
          </div>
          <div class="form-outline rounded-1 mt-4 position-relative">
            <label
                class="position-absolute bg-white"
                style="top: -15px; left: 10px"
            >Percent</label
            >
            <input
                placeholder="Please enter the Percent of the discount"
                type="text"
                v-model="percent"
                id="form1Example3"
                class="RegInput form-control py-2 px-3"
            />
          </div>
          <div class="form-outline rounded-1 mt-4 position-relative">
            <label
                class="position-absolute bg-white"
                style="top: -15px; left: 10px"
            >Code</label
            >
            <input
                placeholder="Discount code"
                type="text"
                v-model="code"
                id="form1Example3"
                class="RegInput form-control py-2 px-3"
            />
          </div>
          <div class="form-outline rounded-1 mt-4 position-relative">
            <label
                class="position-absolute bg-white"
                style="top: -15px; left: 10px"
            >Expiration</label>
            <input
                placeholder="Expiration date"
                type="text"
                v-model="code"
                id="form1Example3"
                class="RegInput form-control py-2 px-3"
            />
          </div>
        </form>
        <!-- end form Input -->
        <div class="d-flex align-items-center justify-content-center mt-3">
          <div @click="Discount(false)" class="CancelBtn me-2 mt-2 btm btn-sm">
            Cancel
          </div>
          <a
              href="/admin/subadmin"
              class="SaveBtn mt-2 btn btn-sm"
              role="button">Add</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminPagination from "@/components/AdminPagination";
export default {
  name: "admin",
  layout: "admin",
  components: { AdminPagination },
  data() {
    return {
      loading: false,
      discounts: [],
      AddDiscount: false,
      subject: "Please enter the title of the discount",
      percent: "Please enter the Percent of the discount",
      code: "Discount Code",
      toggle: false
    };
  },
  methods: {
    Discount(status) {
      this.AddDiscount = status;
    },
  },
  beforeMount() {
    this.loading = true
  },
  async mounted() {
    /* set request header */
    const headers = {
      Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
      "Content-Type": "application/json",
    };

    /* get orders */
    const discount = await this.$axios.get("/wp-json/wp/v2/trendingdiscount", { headers });
    this.discounts = discount.data;

    /*set loading to false*/
    this.loading = false

  }
};
</script>

<style scoped>

.starbi {
  color: #ed8a19;
}
.CheckIcon {
  color: #fff;
  font-size: 12pt;
}
.CancelIcon {
  color: #000;
  font-size: 12pt;
}
.DetailBtn {
  margin-top: 15px;
  width: 40px;
  background-color: #e99d7b;
  color: #231942;
  font-family: "Source Sans Pro", sans-serif;
  padding: 0px 0px !important;
  text-transform: capitalize;
  border-radius: 8px;
  box-shadow: none;
}
.DetailBtn:focus {
  box-shadow: none;
}
.DetailBtn:last-child {
  background-color: transparent;
  border: 1px solid #000;
}

* {
  font-size: 18px;
}
.toggle-box {
  width: 130px;
  background-color: #fff;
  box-shadow: 1px 1px 6px gray;
  border-radius: 4px;
  position: absolute;
  right: 120px;
  margin-top: -80px;
  z-index: 10;
}
.toggle-box ul {
  list-style: none;
  padding: 15px 0;
  margin: 0;
}
.toggle-box hr {
  margin: 15px 0;
  background-color: gray;
  opacity: .2;
}
.toggle-box ul li {
  font-weight: 600;
  text-align: center;
}
.toggle-box ul li a {
  text-decoration: none;
  color: #000;
}
.DiscountImage {
  width: 120px;
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
  font-weight: 600;
  opacity: .6;
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
.RegInput {
  border: solid 0.5px #c9c6d1 !important;
  border-radius: 4px !important;
  height: 45px;
}
.RegisterDesc {
  font-size: 10pt;
  font-family: "Open Sans", sans-serif;
  color: #4d4f5c;
}
.RegisterModal {
  font-family: "Open Sans", sans-serif;
  color: #231942;
  font-size: 18pt;
}
.FormModal {
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: #fff !important;
  box-shadow: 0 0 7.5px 0 rgba(0, 0, 0, 0.1);
}
.BackDrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 1280px) {
  .FormModal {
    position: fixed;
    z-index: 3;
    height: auto;
    width: 400px;
    background-color: #fff !important;
    box-shadow: 0 0 7.5px 0 rgba(0, 0, 0, 0.1);
    padding: 40px 50px;
  }
}
</style>