<template>
  <section class="px-3 px-lg-0">
    <div class="container-lg-full mt-4">
      <!-- Tabs navs -->
      <ul
        class="d-flex justify-content-center nav nav-tabs mb-3"
        id="ex1"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active px-3"
            id="ex1-tab-1"
            data-mdb-toggle="tab"
            href="#ex1-tabs-1"
            role="tab"
            aria-controls="ex1-tabs-1"
            aria-selected="true"
            >New Orders</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link px-3"
            id="ex1-tab-2"
            data-mdb-toggle="tab"
            href="#ex1-tabs-2"
            role="tab"
            aria-controls="ex1-tabs-2"
            aria-selected="false"
            >Current Orders</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link px-3"
            id="ex1-tab-3"
            data-mdb-toggle="tab"
            href="#ex1-tabs-3"
            role="tab"
            aria-controls="ex1-tabs-3"
            aria-selected="false"
            >History</a
          >
        </li>
      </ul>
    </div>
    <!-- Orders Desktop version -->
    <div class="container-full mt-4 px-4 TableBkg d-none d-md-block d-lg-block">
      <div class="d-flex justify-content-between pt-5 px-3">
        <!-- pagination -->
        <AdminPagination />
        <!-- end pagination -->
        <!-- sort section -->
        <div class="d-flex align-items-center">
          <p class="sort">Sort</p>
          <p class="SortStatus px-2">Last Opened</p>
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
              <th>Order id</th>
              <th>Date</th>
              <th>Price</th>
              <th>Delivery Status</th>
              <th>Order Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="!loading">
            <tr v-for="(order, index) in orders" :key="index">
              <td>
                <p>{{ index + 1 }}</p>
              </td>
              <td>
                <p>{{ order.acf.product_title }}</p>
              </td>
              <td>
                <p>{{ order.id }}</p>
              </td>
              <td>
                <p>{{ order.acf.date }}</p>
              </td>
              <td>
                <p>{{ order.acf.product_price }}$</p>
              </td>
              <td>
                <p>{{ order.acf.orderstatus }}</p>
              </td>
              <td>
                <p
                  :class="{
                    redstatus: order.acf.orderstatus == 'check',
                    yellowstatus: order.acf.orderstatus == 'send',
                    greenstatus: order.acf.orderstatus == 'delivered',
                    greenstatus: order.acf.orderstatus == 'confirmed',
                    bluestatus: order.acf.orderstatus == 'preparation',
                  }"
                  class="d-flex align-items-center gap-1"
                >
                  <i style="font-size: 13px" class="bi bi-circle-fill"></i
                  >{{ order.acf.orderstatus }}
                </p>
              </td>
              <td>
                <!-- change details modal -->
                <div
                  :id="'CollapseState' + index"
                  aria-expanded="false"
                  class="ChangeState bg-white collapse">
                  
                  <p
                    @click="ChangeOrderStatus('check', order.id)"
                    role="button"
                    class="StatusDevider py-2 text-danger text-center"
                  >
                    Check
                  </p>
                  <p
                    @click="ChangeOrderStatus('send', order.id)"
                    role="button"
                    class="StatusDevider py-2 text-warning text-center"
                  >
                    Send
                  </p>
                  <p
                    @click="ChangeOrderStatus('delivered', order.id)"
                    role="button"
                    class="StatusDevider py-2 text-success text-center"
                  >
                    Delivered
                  </p>
                  <p
                  @click="ChangeOrderStatus('preparation', order.id)"
                  role="button" class="py-2 text-primary text-center">
                  Preparation
                  </p>
                </div>
                <!-- Show Details Btn -->
                <button
                  @click="
                    DetailsState(
                      order.id,
                      order.acf.userid,
                      order.acf.productimage,
                      order.acf.product_title,
                      order.acf.count,
                      order.acf.discount,
                      order.acf.product_price
                    )
                  "
                  type="button"
                  class="DetailBtn btn">
                  Details
                </button>
              </td>
              <td
                data-bs-toggle="collapse"
               :data-bs-target="'#CollapseState' + index"
                role="button">
                <i
                  style="font-size: 20px"
                  class="bi bi-three-dots-vertical"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center mt-4" v-if="loading">
          <p class="text-success" style="font-size: 12pt; font-weight: bold">
            Loading...
          </p>
        </div>
      </div>
    </div>

    <!-- responsive Orders Item -->
    <div v-for="(order, index) in orders" :key="index + 9" class="mt-4 d-lg-none d-md-none">
      <div class="d-flex align-items-center justify-content-end pb-2">
        <i class="bi bi-funnel-fill me-2"></i>
        <h2>Sort</h2>
      </div>
      <div
        class="
          py-3
          px-4
          bg-white
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <p class="LeftItemColor">#</p>
        <p class="RightItemColor">{{ index + 1 }}</p>
      </div>
      <!-- devider section -->
      <div class="devider"></div>
      <!-- end devider section -->
      <div
        class="
          py-3
          px-4
          bg-white
          d-flex
          align-items-center
          justify-content-between
        ">
        <p class="LeftItemColor">Name</p>
        <p class="RightItemColor">{{ order.acf.product_title }}</p>
      </div>
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="
          py-3
          px-4
          bg-white
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <p class="LeftItemColor">Order id</p>
        <p class="RightItemColor">{{ order.id }}</p>
      </div>
      <!-- end item section -->
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="
          py-3
          px-4
          bg-white
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <p class="LeftItemColor">Date</p>
        <p class="RightItemColor">{{ order.acf.date }}</p>
      </div>
      <!-- end item section -->
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="
          py-3
          px-4
          bg-white
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <p class="LeftItemColor">Price</p>
        <p class="RightItemColor">{{ order.acf.product_price }}</p>
      </div>
      <!-- end item section -->
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="
          py-3
          px-4
          bg-white
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <p class="LeftItemColor">Delivery Status</p>
        <p class="RightItemColor">{{ order.acf.orderstatus }}</p>
      </div>
      <!-- end item section -->
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="
          py-3
          px-4
          bg-white
          d-flex
          align-items-center
          justify-content-between
        "
      >
        <p class="LeftItemColor">Order Status</p>
        <p style="color: #a3a6b4">{{ order.acf.orderstatus }} </p>
      </div>
      <!-- end item section -->
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="
          py-3
          px-4
          bg-white
          d-flex
          align-items-center
          justify-content-between">
        <!-- call details modal -->
        <div>
          <button
            @click="DetailsState(
               order.id,
               order.acf.userid,
               order.acf.productimage,
               order.acf.product_title,
               order.acf.count,
               order.acf.discount,
               order.acf.product_price
            )"
            type="button"
            class="DetailBtn btn btn-sm"
          >
            Details
          </button>
        </div>
        <!-- change details -->
        <div>
          <!-- change details modal -->
          <div
            :id="'CollapseState' + index"
            aria-expanded="false"
            class="ChangeState bg-white collapse"
          >
            <p @click="ChangeOrderStatus('check', order.id)" role="button" class="StatusDevider py-2 text-danger text-center">
              Check
            </p>
            <p
              @click="ChangeOrderStatus('send', order.id)"
              role="button"
              class="StatusDevider py-2 text-warning text-center"
            >
              Send
            </p>
            <p
              @click="ChangeOrderStatus('delivered', order.id)"
              role="button"
              class="StatusDevider py-2 text-success text-center"
            >
              Delivered
            </p>
            <p 
              @click="ChangeOrderStatus('prepration', order.id)"
              role="button" class="py-2 text-primary text-center">
              Preparation
            </p>
          </div>
          <i
            data-bs-toggle="collapse"
            :data-bs-target="'#CollapseState' + index"
            class="bi bi-three-dots-vertical"
          ></i>
        </div>
      </div>
      <!-- end item section -->
    </div>

    

    <!-- Responsive Pagination -->
    <div class="container my-4 px-5 d-lg-none d-md-none">
      <AdminPagination />
    </div>

    <TheDetailModal
      v-if="DspDetails"
      @CloseEvent="CloseDetail"
      :name="this.ModalName"
      :phone="this.ModalPhone"
      :address="this.ModalAddress"
      :image="this.productimage"
      :product="this.product_title"
      :item="this.count"
      :discount="this.discount"
      :price="this.price"
      :orderid="orderid"
    />
  </section>
</template>

<script>
import TheDetailModal from "@/components/admin/DetailModal";
import AdminPagination from "@/components/AdminPagination";
export default {
  name: "admin",
  layout: "admin",
  components: { AdminPagination, TheDetailModal },
  data() {
    return {
      ChangeState: false,
      DspDetails: false,
      ModalName: "",
      ModalPhone: "",
      ModalAddress: "",
      productimage: "", 
      product_title: "",
      count: "", 
      discount: "", 
      price: "", 
      orderid: "",
      orders: [],
      users: [],
      loading: false,
    };
  },
  computed: {},
  methods: {
    ChangeStateAction() {
      this.ChangeState = !this.ChangeState;
    },
    DetailsState(orderid, userid, productimage, product_title, count, discount, price) {
      this.DspDetails = !this.DspDetails;

      /*find users where userid = userid */
      this.users.forEach((user) => {
        if (user.id == userid) {
          this.ModalName = user.name
          this.ModalPhone = user.acf.phonenum
          this.ModalAddress = user.acf.streetaddress
          this.productimage = productimage
          this.product_title = product_title
          this.count = count
          this.discount = discount
          this.price = price
          this.orderid = orderid
        }
      });
    },
    CloseDetail() {
      this.DspDetails = !this.DspDetails;
    },

    async UpdateOrders() {
    /* set request header */
    const headers = {
      Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
      "Content-Type": "application/json",
    };
      /* get orders */
    const orders = await this.$axios.get("/wp-json/wp/v2/orders", { headers });
    this.orders = orders.data;
    },

    async ChangeOrderStatus(status, orderid) {
    /* set request header */
    const headers = {
      Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
      "Content-Type": "application/json",
    };
    /*send post request */
    await this.$axios
          .put(
            `/wp-json/wp/v2/orders/${orderid}`,
            { acf: { orderstatus: status } },
            { headers }
          )
          .then((response) =>
            console.log(response)
          ).catch((err)=> {
            console.log(err)
          })

     /* update orders */
     this.UpdateOrders()     
    }

  },
  beforeMount() {
    this.loading = true;
  },
  async mounted() {
    /* set request header */
    const headers = {
      Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
      "Content-Type": "application/json",
    };

    /* get orders */
    const orders = await this.$axios.get("/wp-json/wp/v2/orders", { headers });
    this.orders = orders.data;

    /* get users */
    const users = await this.$axios.get("/wp-json/wp/v2/users", { headers });
    this.users = users.data;

    /* set loading to false */
    this.loading = false;
  },
};
</script>

<style scoped>
.redstatus {
  color: #dc3545;
}

.yellowstatus {
  color: #ffc107;
}

.greenstatus {
  color: #198754;
}

.bluestatus {
  color: #0d6efd;
}

tr td p {
  font-size: 12pt;
}

/*responsive Orders */
* {
  font-size: 18px;
}
/*responsive Orders */

.LeftItemColor {
  color: #a3a6b4;
}

.RightItemColor {
  color: #231942;
}

.devider {
  border-bottom: 1px solid #f0f0f7;
}

/*end responsive Orders */

.StatusDevider {
  border-bottom: 1px solid #f1f1f3;
  width: 100%;
}

.ChangeState {
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.09);
  background-color: #e99d7b;
  border-radius: 4px;
  width: 110px;
  z-index: 999;
  position: absolute;
  right: 110px;
}

@media screen and (max-width: 768px) {
  .ChangeState {
    right: 95px;
  }
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
</style>