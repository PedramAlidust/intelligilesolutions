<template>
  <div>
    <section class="d-none d-lg-block">
      <!-- title section -->
      <div class="container-full py-4">
        <p class="PageTitle">Comments</p>
      </div>
      <div class="container-full mt-4 px-4 TableBkg">
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
              <th>Customer</th>
              <th>Product</th>
              <th>Date</th>
              <th>Time</th>
              <th>Score</th>
              <th>Comments</th>
              <th></th>
            </tr>
            </thead>
            <tbody v-if="!loading">
            <tr v-for="(comment, index) in comments" :key="index + 95">
              <td>
                <p>1</p>
              </td>
              <td>
                <p>{{comment.acf.author}}</p>
              </td>
              <td>
                <p style="color: #055452">Sella body butter</p>
              </td>
              <td>
                <p>{{comment.acf.date}} </p>
              </td>
              <td>
                <p>{{comment.acf.time}}</p>
              </td>
              <td style="color: #ed8a19">
                <i v-for="(star, indextwo) in Number(comment.acf.score)" :key="indextwo + 985" class="bi bi-star-fill starbi"></i>                
                <span style="color: #000">{{comment.acf.score}}</span>
              </td>
              <td style="width: 30%">
                <p>
                  {{comment.acf.commenttxt}}
                </p>
              </td>
              <td class="d-flex flex-column gap-2">
                <button type="button" class="DetailBtn btn btn-sm">
                  <i class="CheckIcon bi bi-check2"></i>
                </button>
                <button @click="DeleteComment(comment.id)" type="button" class="DetailBtn btn btn-sm">
                  <i class="CancelIcon bi bi-x-lg"></i>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        <!--loading section -->
        <div v-if="loading" class="text-center mt-4">
          <p class="text-success" style="font-size: 12pt; font-weight: bold">
            Loading...
          </p>
        </div>
        </div>
      </div>
    </section>
    <section class="d-md-none d-lg-none py-4 px-3">
      <div class="w-100 d-flex justify-content-between">
        <div><h1>Comments</h1></div>
        <div class="d-flex align-items-center">
          <i class="bi bi-funnel-fill me-2"></i>
          <h3>Sort</h3>
        </div>
      </div>
      <div class="mt-4">
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">#</p>
          <p class="RightItemColor">1</p>
        </div>
        <!-- devider section -->
        <div class="devider"></div>
        <!-- end devider section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Coustmer</p>
          <p class="RightItemColor">Jack Dorsi</p>
        </div>
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Product</p>
          <p style="color: #055452; border-bottom: 1px solid #055452">
            Sella body butter
          </p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Date</p>
          <p class="RightItemColor">September30,2022 at 10:56 am</p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Time</p>
          <p class="RightItemColor">at 10:56 am</p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Score</p>
          <div style="color: #ed8a19">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
        >
          <p class="LeftItemColor">Comments</p>
          <p class="RightItemColor w-50">
            I really had to prep my face to make it super hydrated. I found the
            coverage better with a Overall, it has good coverage
          </p>
        </div>
        <!-- end item section -->
        <!-- devider section -->
        <div class="devider"></div>
        <!-- item section -->
        <div
            class="py-3 px-4 bg-white d-flex align-items-center justify-content-center"
        >
          <button type="button" class="mx-2 DetailBtn btn btn-sm px-2 py-1">
            <i class="CheckIcon bi bi-check2"></i>
          </button>
          <button type="button" class="DetailBtn btn btn-sm px-2 py-1">
            <i class="CancelIcon bi bi-x-lg"></i>
          </button>
        </div>
        <!-- end item section -->
      </div>
    </section>
  </div>
</template>

<script>
import AdminPagination from "@/components/AdminPagination";
export default {
  name: "admin",
  layout: "admin",
  data() {
    return {
      loading: null, 
      comments: []
    }
  },
  components: { AdminPagination },
  methods: {
    DeleteComment(id) {

    /* set request header */
    const headers = {
      Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
      "Content-Type": "application/json",
    };

        /* axios delete comment */
        this.$axios
          .delete(`/wp-json/wp/v2/commentv2/${id}`, {headers})
          .then(res => {
            if(res.status == 201) {
              alert('Comment deleted successfully');
            }
          })
          .catch(err => {
            console.log(err);
          });
    }
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
    const comments = await this.$axios.get("/wp-json/wp/v2/commentv2", { headers });
    this.comments = comments.data;

    /*set loading to false*/
    this.loading = false

  }
};
</script>

<style scoped>
* {
  font-size: 18px;
}
.PageTitle {
  font-family: "open sans", sans-serif;
  font-size: 16pt;
  color: #43425d;
  font-weight: 600;
}
.starbi {
  color: #ed8a19;
}
.CheckIcon {
  color: #fff;
  font-size: 16pt;
}
.CancelIcon {
  color: #000;
  font-size: 16pt;
}
.DetailBtn {
  width: 40px;
  background-color: #e99d7b;
  color: #231942;
  font-family: "Source Sans Pro", sans-serif;
  padding: 3px 2px !important;
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
  vertical-align: top;
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