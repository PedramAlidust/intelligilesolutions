<template>
  <section>
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
          <button type="button" class="BtnStyleProd btn btn-sm">
            Add New Discount
          </button>
        </div>
        <!-- end sort section -->
      </div>
      <!-- table section -->
      <div class="container-full px-3 table-responsive">
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
            <tr>
              <td>
                <p>1</p>
              </td>
              <td>
                <img class="DiscountImage" src="~/assets/pictures/off2.jpg" alt="DiscountBaner">
              </td>
              <td>
                <p>%50</p>
              </td>
              <td>
                <p>Kandaka-discount</p>
              </td>
              <td>
                <p>Get $ 50.00 off your next full price purchase!</p>
              </td>
              <td>
                <p>September30,2022</p>
              </td>
              <td>
                <!-- switch button -->
                <div class="d-flex justify-content-between">
                  <p>inactive</p>
                  <!-- Checked switch -->
                  <div class="ps-4 pe-3 form-check form-switch">
                    <input
                      style="margin:0; margin-top:3px;"                  
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

.DiscountImage {
  width: 200px;
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
</style>