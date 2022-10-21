<template>
  <section>
    <!-- dashboard states section -->
    <div class="container-full mt-1 mt-md-3 mt-lg-4">
      <div class="row row-cols-md-3 row-cols-lg-5 px-3">
        <div class="col mt-2">
          <div
            class="
              d-flex
              justify-content-between
              DashState
              align-items-center
              px-3
              py-2
              shadow
              h-100">
            <div>
              <p class="m-0 StateTitle">Total Products</p>
              <p v-if="!loading" class="pt-1 m-0">{{ products.length }}</p>
              <p class="text-success" style="font-size: 9pt;" v-if="loading">Loading...</p>
              <p class="pt-1 ProdCount">
                <span class="ProdNum">{{ NewProducts }}</span>
                New Products
              </p>
            </div>
            <img
              class="TotalProd"
              src="~/assets/pictures/TotalProd.svg"
              alt="TotalProd"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- dashboard graph section -->
    <div class="box-chart mt-3 p-5">
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex flex-column totals">
            <span>Total Products</span>
            <span v-if="!loading">{{ products.length }}</span>
            <p class="text-success" style="font-size: 9pt;" v-if="loading">Loading...</p>
          </div>
          <!-- <div class="d-flex gap-5">
            <div class="labels label1">
              <span>2021</span>
            </div>
            <div class="labels label2">
              <span>2022</span>
            </div>
          </div> -->
        </div>
      </div>
      <canvas id="myChart"></canvas>
    </div>
  </section>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
/* import chart.js */
import Chart from "chart.js/auto";
export default {
  name: "admin",
  layout: "admin",
  data() {
    return {
      orders: [],
      tickets: [],
      users: [],
      products: [],
      loading: false,
    }
  },
  computed: {
        ...mapGetters(['GetAdminToken', 'GetAdminRole']), 
        totalOverview() {
          /*display total orders where acf is equal to panding */
          return this.orders.filter(order => order.acf.orderstatus === 'pending').length;
        },
        LastDayOrder() {
          /* display total orders when acf date is equal to last day data */
          return this.orders.filter(order => order.acf.date == moment().subtract(1, 'days').format('DD-MM-YYYY')).length;
        },
        NewOrders() {
          /* display total orders when acf date is equal to last day data */
          return this.orders.filter(order => order.acf.date == moment().format('DD-MM-YYYY')).length;
        },
        CurrentTickets() {
          /* display current tickets */
          return this.tickets.filter(ticket => ticket.acf.ticket_status == 'pending').length;
        }, 
        NewProducts() {
          /* display new products */
          return this.products.filter(product => product.acf.date == moment().format('DD-MM-YYYY')).length;
        },
        TotalCost() {
          /* calculate total prices of afc productprice */
          return this.products.reduce((total, product) => {
            return total + Number(product.acf.productprice);
          }, 0);
      
        },
        TotalRevenue() {
          /* calculate total productprice of orders */
          return this.orders.reduce((total, order) => {
            return total + Number(order.acf.product_price);
          }, 0);
        }
  },
  async mounted() {

  /* reload page on user log in once */
    if (localStorage.getItem("readmin")) {
      //remove local storage
      localStorage.removeItem("readmin");

      // Set a flag so that we know not to reload the page twice.
      location.reload();
    }

      /* set request header */
      const headers = {
              Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
              "Content-Type": "application/json",
      };


    /* get all products */
    
     const products = await this.$axios.get("/wp-json/wp/v2/products", { headers });
     this.products = products.data;


    /*  store in revenue and cost constant  */
      const revenue = this.TotalRevenue
      const cost = this.TotalCost

    /* chartjs config section */
    function chart1() {
      var ctx = document.getElementById("myChart");
      const plugin = {
        id: "custom_canvas_background_color",
        beforeDraw: (chart) => {
          const ctx = chart.canvas.getContext("2d");
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, chart.width, chart.height);
        },
        title: {
          display: true,
          text: "Sales",
          fontSize: 20,
          fontColor: "#000",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          padding: 10,
          position: "top",
          align: "left",
        },
      };
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              lineTension: 0,
              label: "Cost",
              data: [10,30,50,90,80,30,70,cost],
              backgroundColor: "#2cd9c5",
              borderWidth: 2,
            },
            {
              lineTension: 0,
              label: "Revenue",
              data: [100,200,50,110,89,78,200,revenue],
              backgroundColor: "#8c54ff",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          layout: {
            padding: {
              left: 50,
              top: 50,
              right: 50,
              bottom: 50,
            },
          },
          plugins: {
            legend: { display: true },
          },
        },
        plugins: [plugin],
      });
    }

    function chart2() {
      var ctx = document.getElementById("myChart2");
      const plugin = {
        id: "custom_canvas_background_color",
        beforeDraw: (chart) => {
          const ctx = chart.canvas.getContext("2d");
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, chart.width, chart.height);
        },
        title: {
          display: true,
          text: "Sales",
          fontSize: 20,
          fontColor: "#000",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          padding: 10,
          position: "top",
          align: "left",
        },
      };
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              lineTension: 0,
              label: "2021",
              data: [6, 8, 5, 12, 16, 20, 18, 15, 12, 10, 8, 20],
              backgroundColor: "#2cd9c5",
              borderWidth: 2,
            },
            {
              lineTension: 0,
              label: "2022",
              data: [4, 6, 3, 10, 14, 18, 16, 13, 10, 8, 6, 18],
              backgroundColor: "#8c54ff",
              borderWidth: 2,
            },
          ],
        },

        options: {
          responsive: true,
          layout: {
            padding: {
              left: 50,
              top: 50,
              right: 50,
              bottom: 50,
            },
          },
          plugins: {
            legend: { display: true },
          },
        },
        plugins: [plugin],
      });
    }
    chart1();
    chart2();


    /* loading false after mounted */
    this.loading = false;

  },
  beforeMount() {
   /* make dsp loading true */
    this.loading = true;
  },
};
</script>

<style scoped>
select {
  width: 130px;
  background-color: transparent;
  border: 1px solid rgb(207, 207, 207);
  border-radius: 5px;
  padding: 6px 8px;
  opacity: 0.6;
  font-size: 14px;
}
.totals span:first-child {
  font-size: 23px;
}
.totals span:last-child {
  font-size: 25px;
  font-weight: bold;
}
.title span {
  font-size: 20px;
  font-weight: bold;
}
.title p {
  font-size: 18px;
}
.times {
  font-weight: 600;
  font-size: 17px;
}
.times span:nth-child(3) {
  background-color: #dcdbdb;
  padding: 2px 12px;
  border-radius: 4px;
}
.labels {
  position: relative;
}
.labels2 {
  position: relative;
  opacity: 0.5;
  font-size: 13px;
}
.labels::before {
  content: "";
  width: 25px;
  height: 4px;
  position: absolute;
  top: 50%;
  left: -30px;
}
.labels2::before {
  content: "";
  width: 25px;
  height: 10px;
  position: absolute;
  top: 30%;
  left: -30px;
  border-radius: 10000px;
}
.label1::before {
  background-color: #159282;
}
.label2::before {
  background-color: #4d77f9;
}
.box-chart {
  background-color: #fff;
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
  width: 12%;
}
.SearchIcon {
  width: 15px;
}
::placeholder {
  color: #e0e0e5;
  font-size: 10pt;
}
.DashLogo {
  width: 80%;
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
.NavBar {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.05);
  padding: 7px;
}
.IconDist {
  margin-top: 35px;
}
.ItemsColor {
  color: #fff;
  font-family: "Open Sans";
  font-size: 11pt;
}
.SideBkg {
  background-image: url("~/assets/pictures/AdminSidebar.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
.shadow {
  box-shadow: 0px 0px 15px black;
}
@media only screen and (min-width: 1200px) {
  .shadow {
    box-shadow: 0px 0px 5px black;
  }
}
</style>