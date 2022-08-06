<template>
  <section>
    <div class="container-full mt-4 px-4">
      <!-- Tabs navs -->
      <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active px-3"
            id="ex1-tab-1"
            data-mdb-toggle="tab"
            href="#ex1-tabs-1"
            role="tab"
            aria-controls="ex1-tabs-1"
            aria-selected="true"
            >New Ticket</a
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
            >Current Ticket</a
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
    <div
      class="px-3 d-flex d-lg-none align-items-center justify-content-end"
      style="text-align: right"
    >
      <i class="bi bi-funnel-fill"></i>
      <p class="fs-5">Sort By</p>
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
              <th>Data</th>
              <th>Hour</th>
              <th>priority</th>
              <th>department</th>
              <th>Status</th>
              <th>Subject</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>1</p>
              </td>
              <td>
                <p>Jack Dorsi</p>
              </td>
              <td>
                <p>#14522322</p>
              </td>
              <td>
                <p>#14522322</p>
              </td>
              <td>
                <div>
                  <p
                    class="px-3 rounded-1 py-1"
                    style="background-color: #c7cbd5; width: fit-content"
                  >
                    low
                  </p>
                </div>
              </td>
              <td>
                <p>Unknown</p>
              </td>
              <td>
                <p>Deliverd</p>
              </td>
              <td>awd</td>
              <td
                data-bs-toggle="collapse"
                data-bs-target="#CollapseState1"
                role="button"
              >
                <i class="bi bi-three-dots-vertical"></i>
                <!-- change details modal -->
                <div
                  id="CollapseState1"
                  aria-expanded="false"
                  class="ChangeState bg-white collapse position-absolute"
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
                <!-- Show Details Btn -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- responsive Orders Items2 -->
    <div class="mt-4 px-3 d-lg-none d-md-none">
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
        <p class="LeftItemColor">Name</p>
        <p class="RightItemColor">jack Dorsi</p>
      </div>
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
      >
        <p class="LeftItemColor">Data</p>
        <p class="RightItemColor">#14522322</p>
      </div>
      <!-- end item section -->
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
      >
        <p class="LeftItemColor">Hour</p>
        <p class="RightItemColor">September30,2022 at 10:56 am</p>
      </div>
      <!-- end item section -->
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
      >
        <p class="LeftItemColor">priority</p>
        <div>
          <p
            class="px-3 rounded-1 py-1"
            style="background-color: #c7cbd5; width: fit-content"
          >
            low
          </p>
        </div>
      </div>
      <!-- end item section -->
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
      >
        <p class="LeftItemColor">department</p>
        <p class="RightItemColor">Unknown</p>
      </div>
      <!-- end item section -->
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="py-3 px-4 bg-white d-flex align-items-center justify-content-between"
      >
        <p class="LeftItemColor">Status</p>
        <p class="RightItemColor">Check</p>
      </div>
      <!-- end item section -->
      <!-- devider section -->
      <div class="devider"></div>
      <!-- item section -->
      <div
        class="py-3 px-4 bg-white d-flex align-items-center justify-content-end"
      >
        <div class="">
          <!-- change details modal -->
          <div
            id="CollapseState2"
            aria-expanded="false"
            class="ChangeState bg-white collapse"
          >
            <p role="button" class="StatusDevider py-2 text-danger text-center">
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
      <!-- end item section -->
    </div>

    <!-- Responsive Pagination -->
    <div class="container my-4 px-5 d-lg-none d-md-none">
      <AdminPagination />
    </div>
  </section>
</template>

<script>
import AdminPagination from "@/components/AdminPagination";
export default {
  name: "admin",
  layout: "admin",
  components: { AdminPagination },
};
</script>

<style scoped>
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
  display: flex;
  justify-content: center;
}
</style>
