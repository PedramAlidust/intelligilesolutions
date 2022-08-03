<template>
  <div class="container-full">
    <div class="row">
      <div class="col-lg-3 col-md-3">
        <!-- Categories -->
        <section class="CatSec mt-4 py-2 px-4">
          <div class="d-flex flex-row align-items-center py-3">
            <img
              src="~/assets/pictures/categorie.svg"
              class="CatImg"
              alt="categorie"
            />
            <p class="px-2 CatTxt m-0">Categories</p>
          </div>
          <!-- categories details -->
          <div class="d-flex align-items-center justify-content-between">
            <p class="CategorieTxt">Accesories</p>
            <p>(5)</p>
          </div>
          <hr />
          <div class="pt-3 d-flex align-items-center justify-content-between">
            <p class="CategorieTxt">Face care</p>
            <p>(5)</p>
          </div>
          <hr />
          <div class="pt-3 d-flex align-items-center justify-content-between">
            <p class="CategorieTxt">Lip care</p>
            <p>(5)</p>
          </div>
          <hr />
          <div class="pt-3 d-flex align-items-center justify-content-between">
            <p class="CategorieTxt">Skin care</p>
            <p>(5)</p>
          </div>
          <hr />
          <div class="pt-3 d-flex align-items-center justify-content-between">
            <p class="CategorieTxt">Nail care</p>
            <p>(5)</p>
          </div>
          <hr />
          <div class="pt-3 d-flex align-items-center justify-content-between">
            <p class="CategorieTxt">Blusher</p>
            <p>(5)</p>
          </div>
        </section>
        <!-- Popular Tags -->
        <section class="CatSec mt-4 py-2 px-4">
          <div class="d-flex flex-row align-items-center py-3">
            <img
              src="~/assets/pictures/categorie.svg"
              class="CatImg"
              alt="categorie"
            />
            <p class="px-2 CatTxt m-0">Popular Tags</p>
          </div>
          <hr />
          <!-- categories details -->
          <div class="d-flex align-items-center justify-content-center">
            <button
              type="button"
              class="mt-3 mx-2 btn btn-sm btn-light btn-rounded"
            >
              Beauty
            </button>
            <button
              type="button"
              class="mt-3 mx-2 btn btn-sm btn-light btn-rounded"
            >
              MakeupArtist
            </button>
          </div>
          <div class="py-3 d-flex align-items-center justify-content-center">
            <button type="button" class="mx-2 btn btn-sm btn-light btn-rounded">
              Makeup
            </button>
            <button type="button" class="mx-2 btn btn-sm btn-light btn-rounded">
              Hair
            </button>
            <button type="button" class="mx-2 btn btn-sm btn-light btn-rounded">
              Nails
            </button>
          </div>
          <div class="pb-3 d-flex align-items-center justify-content-center">
            <button type="button" class="mx-2 btn btn-sm btn-light btn-rounded">
              Hairstyle
            </button>
            <button type="button" class="mx-2 btn btn-sm btn-light btn-rounded">
              Skincare
            </button>
          </div>
        </section>
      </div>
      <div class="col-lg-9 col-md-9 mt-3">
        <div class="d-flex justify-content-between align-items-center">
          <AdminPagination />
          <!-- categorie and product btn -->
          <div class="d-flex align-items-center">
            <button
              type="button"
              @click="NewGroupingStatus(true)"
              class="BtnStyleGroup btn btn-sm mx-3"
            >
              Add New Grouping
            </button>
            <button
              type="button"
              @click="productFrom(true)"
              class="BtnStyleProd btn btn-sm"
            >
              Add New Products
            </button>
          </div>
        </div>
        <!-- admin products -->
        <div class="AdminProd container-ful mt-2 px-4">
          <!-- results count -->
          <div class="d-flex align-items-center justify-content-between pt-4">
            <!-- result number -->
            <div>
              <p>Showing 08 Results</p>
            </div>
            <!-- sort by -->
            <div class="d-flex align-items-center">
              <p class="sort">Sort</p>
              <p class="SortStatus px-2">Last Opened</p>
            </div>
          </div>
          <!-- end result count -->
          <div class="container-full">
            <div class="row">
              <div class="col-lg-6 col-md-6 p-0 mt-5 px-2">
                <section class="ProductBkg">
                  <div class="d-flex justify-content-between product">
                    <img
                      src="~/assets/pictures/ProductOne.jpg"
                      class="ProductImg"
                      alt="product"
                    />
                    <div class="ps-2">
                      <p class="mt-1">Sella body butter</p>
                      <p class="py-2">Lip Care</p>
                      <p class="pb-4">$2000</p>
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
                        <p class="ps-3">Active</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="col-lg-6 col-md-6 p-0 mt-5 px-2">
                <section class="ProductBkg">
                  <div class="d-flex justify-content-between product">
                    <img
                      src="~/assets/pictures/ProductOne.jpg"
                      class="ProductImg"
                      alt="product"
                    />
                    <div class="ps-2">
                      <p class="mt-1">Sella body butter</p>
                      <p class="py-2">Lip Care</p>
                      <p class="pb-4">$2000</p>
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
                        <p class="ps-3">Active</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Teleport to="body">
        <div
          class="w-100 vh-100 position-absolute top-0 left-0 d-flex flex-column justify-content-center align-items-center modal"
          style="backdrop-filter: blur(4px); z-index: 1000"
          v-if="groupingStatus"
        >
          <NewGrouping @close="NewGroupingStatus(false)" />
        </div>
      </Teleport>
      <Teleport to="body">
        <div
          class="w-100 vh-100 position-absolute top-0 left-0 d-flex flex-column justify-content-center align-items-center modal"
          style="backdrop-filter: blur(4px); z-index: 1000"
          v-if="productFromStatus"
        >
          <NewProduct @close="productFrom(false)" />
        </div>
      </Teleport>
    </div>
  </div>
</template>

<script>
import AdminPagination from "@/components/AdminPagination";
import NewGrouping from "@/components/admin/NewGrouping.vue";
import NewProduct from "@/components/admin/NewProduct.vue";

export default {
  name: "admin",
  layout: "admin",
  components: { AdminPagination, NewGrouping, NewProduct },
  data() {
    return {
      groupingStatus: false,
      productFromStatus: false,
    };
  },
  methods: {
    NewGroupingStatus(status) {
      this.groupingStatus = status;
    },
    productFrom(status) {
      this.productFromStatus = status;
    },
  },
};
</script>

<style scoped>
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

.ProductBkg {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 1.5px 1.5px 10px 0 rgba(0, 0, 0, 0.06);
  border: solid 0.5px #caced5;
}

.ProductImg {
  width: 50%;
  height: 155px;
}

.product p {
  margin: 0;
}

.form-check {
  padding-left: 0;
  margin: 0;
}

.form-switch {
  margin: 0;
}

/* sort section */
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

.AdminProd {
  background-color: #fff;
  min-height: 70vh;
}

.BtnStyleGroup {
  border: solid 1px #055452;
  box-shadow: none;
  color: #055452;
  background-color: transparent;
  padding: 8px 8px;
  font-family: "Source Sans Pro", sans-serif;
  border-radius: 2px;
}

.BtnStyleProd {
  box-shadow: none;
  background-color: #e99d7b;
  color: #fff;
  padding: 8px 12px;
  border-radius: 2px;
}

hr {
  height: 1px !important;
  color: #acaaaa !important;
  width: 100%;
  margin: 0 auto !important;
}

.CatTxt:hover {
  cursor: pointer;
  color: #e99d7b;
  transition: 0.5s;
}

.CategorieTxt:hover {
  cursor: pointer;
  color: #e99d7b;
  transition: 0.5s;
}

button {
  color: #5a5a5a;
  border-radius: 8px;
  padding: 10px;
  background-color: #f0f0f0;
  box-shadow: none;
}

.CategorieTxt {
  font-family: "Open Sans";
  font-size: 11pt;
}

.CatImg {
  width: 15px;
  height: 15px;
}

.CatSec {
  background-color: #f9f9f9;
  border-radius: 5px;
}

.CatTxt {
  font-family: "Open Sans", sans-serif;
  font-size: 13pt;
  color: #231942;
}
</style>
