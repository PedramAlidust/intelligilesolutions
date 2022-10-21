<template>
  <div>
    <div class="container-full mt-4 px-4 d-none d-md-block d-lg-block">
      <!-- Tabs navs -->
      <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link px-3"
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
            class="nav-link active px-3"
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
      class="bg-white px-4 py-2 d-flex d-md-none d-lg-none justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center">
        <i class="bi bi-chevron-left"></i>
        <p class="mb-0 ms-2">Back</p>
      </div>
      <div>
        <i class="bi bi-search" style="color: #bcbcbc"></i>
      </div>
    </div>

    <div
      class="d-flex flex-column flex-md-row flex-lg-row bg-white rounded-1"
      style="height: 80vh"
    >
      <div class="w-25 d-none d-md-flex d-lg-flex flex-column border-end">
        <div class="w-100 px-4 py-3">
          <i class="bi bi-search" style="color: #bcbccb"></i>
          <input
            type="text"
            class="border-0 ms-2"
            placeholder="search Message ..."
            style="color: #bcbccb; outline: none"
          />
        </div>
        <div class="mt-4 w-100">
          <div class="px-4 py-2 user d-flex justify-content-between">
            <div class="d-flex align-items-center">
              <img
                src="../../../../assets/pictures/AdminImg.png"
                alt=""
                class="border-circle"
                style="width: 50px"
              />
              <div class="flex flex-column ms-3">
                <p class="mb-0" style="color: #4d4f5c; font-size: 13px">
                  Jack Dorsi
                </p>
                <p class="mb-0" style="color: #4d4f5c; font-size: 13px">
                  Hello,I have a question ....
                </p>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-between">
              <p class="mb-0" style="color: #4d4f5c; font-size: 13px">
                3 min ago
              </p>
              <p class="mb-0" style="color: #2cc51c; font-size: 13px">open</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 d-flex d-md-none d-lg-none flex-column border-end">
        <div class="w-100 px-4 py-3 d-none d-md-flex d-lg-flex">
          <i class="bi bi-search" style="color: #bcbccb"></i>
          <input
            type="text"
            class="border-0 ms-2"
            placeholder="search Message ..."
            style="color: #bcbccb; outline: none"
          />
        </div>
        <div class="mt-4 w-100">
          <div
            class="px-4 py-2 user d-flex justify-content-between border-bottom"
          >
            <div class="d-flex align-items-center">
              <img
                src="../../../../assets/pictures/AdminImg.png"
                alt=""
                class="border-circle"
                style="width: 50px"
              />
              <div class="flex flex-column ms-3">
                <p class="mb-0" style="color: #4d4f5c; font-size: 13px">
                  Jack Dorsi
                </p>
                <p class="mb-0" style="color: #4d4f5c; font-size: 13px">
                  Hello,I have a question ....
                </p>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-between">
              <p class="mb-0" style="color: #4d4f5c; font-size: 13px">
                3 min ago
              </p>
              <p class="mb-0" style="color: #2cc51c; font-size: 13px">open</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 d-flex" style="overflow-y: auto">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "admin",
};
</script>

<style scoped>
.user:active {
  background-color: #cecfd0;
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
