<template>
  <!-- New Admin Modal -->
  <div class="BackDrop">
    <div class="FormModal bg-white">
      <div class="d-flex justify-content-between">
        <p class="UserName">{{ name }}</p>
        <i role="button" @click="CloseDetail" class="CloseBtn bi bi-x-lg"></i>
      </div>
      <!-- Phone Section -->
      <div class="d-flex align-items-top pt-2">
      <p class="PhoneStyle">Phone:</p>
      <p class="PhoneDesc ps-3">(001)-5410000000</p>
      </div>
      <!-- Address Section -->
      <div class="d-flex align-items-top pt-2">  
      <p class="PhoneStyle">Address:</p>
      <p class="AddressDesc ps-2">132 North Border Street England,CA 50085</p>
      </div>
      <!-- table section -->
      <div class="container-full table-responsive mt-4">
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Products</th>
              <th>Weight</th>
              <th>Item</th>
              <th>Discount</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>1</p>
              </td>
              <td>
                <img class="my-2 DiscountImage" src="~/assets/pictures/off2.jpg" alt="DiscountBaner">
              </td>
              <td>
                <p style="color: #055452;">Sella Body Better</p>
              </td>
              <td>
                <p>20ml</p>
              </td>
              <td>
                <p>5</p>
              </td>
              <td>
                <p>40%</p>
              </td>
               <td>
                <p>$800</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- end form Input -->
      <div class="d-flex align-items-center justify-content-center mt-4">
        <a class="SaveBtn mt-2 btn btn-sm" role="button">Confirm</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "phone",
    "address",
    "image",
    "no",
    "product",
    "weight",
    "item",
    "discount",
    "price",
  ],
  methods: {
    CloseDetail() {
      this.$emit("CloseEvent");
    },
  },
};
</script>

<style scoped>
/*  General style  */
p {
    margin: 0;
    padding: 0;
}
/* End General style  */

/*Table section */

.DiscountImage {
  width: 100px;
  border-radius: 12px;
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
  color: #a3a6b4;
  padding: 10px 15px;
  border-bottom: 0;
}

td {
  font-weight: 400;
  font-family: "Source Sans Pro", sans-serif;
}

/* End table section */

.UserName {
  color: #231942;
  font-size: 14pt;
}

.PhoneDesc {
   color: #231942;
   font-size: 11pt;
   margin-top: 4px;
}

.AddressDesc {
   color: #231942;
   font-size: 11pt;
   margin-top: 4px;
}

.PhoneStyle {
    color: #4d4f5c;
    font-family: 'Open Sans', sans-serif;
    font-size: 12pt;
}

/* modal section */
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

.SaveBtn {
  background-color: #65a79f;
  padding: 8px 53px;
  color: #fff !important;
  box-shadow: none;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14pt;
  border-radius: 4px;
  cursor: pointer;
  text-transform: capitalize;
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

.CloseBtn {
 color: #a4afb7;
 font-size: 16pt;
}

/*Form Modal */
.FormModal {
  position: fixed;
  top: 25%;
  left: 25%;
  z-index: 3;
  width: 700px;
  background-color: #fff !important;
  box-shadow: 0 0 7.5px 0 rgba(0, 0, 0, 0.1);
  padding: 40px 50px;
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

/* end modal section */
</style>