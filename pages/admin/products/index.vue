<template>
<div
    class="mt-lg-4 position-relative"
    :class="productFromStatus ? '' : 'container-full'"
>
<div class="row">
  <div class="col-lg-12 col-md-12 mt-lg-3 py-2 bg-white bg-lg-transparent">
    <div class="">
      <div
          class="d-flex justify-content-between align-items-center pt-4 pt-lg-0">
        <!-- categorie and product btn -->
        <div class="d-flex ms-4 ms-lg-0">
          <button
              type="button"
              @click="productFrom(true)"
              class="BtnStyleProd btn btn-sm"
          >
            Add New Products
          </button>
        </div>
      </div>
      <div
          class="py-3 mt-2 d-lg-none d-flex justify-content-between align-items-items container"
      >
        <div class="d-flex align-items-center">
          <i class="bi bi-chevron-left"></i>
          <p class="mb-0">Back</p>
        </div>
        <div class="d-flex align-items-center">
          <p class="mb-0 me-2">Filter</p>
          <i class="bi bi-funnel-fill"></i>
        </div>
      </div>
    </div>
    <!-- admin products -->
    <div class="AdminProd container-ful mt-2 px-4 mt-4">
      <!-- results count -->
      <div
          class="d-none d-lg-flex align-items-center justify-content-between pt-4"
      >
        <!-- result number -->
        <div>
          <p>Showing {{ Products.length }} Results</p>
        </div>
      </div>
      <!-- end result count -->
      <div class="container-full">
        <div class="row">
          <div v-for="(product, index) in Products" :key="index + 7"  class="col-lg-6 col-md-6 p-0 mt-5 px-2">
            <section class="ProductBkg">
              <div class="d-flex product">
                <img :src="product.acf.productimg" class="ProductImg" alt="product"/>
                <div class="ps-2">
                  <p class="mt-1" style="font-weight: 600;">{{ product.acf.productname }}</p>
                  <p class="py-2" style="opacity: .5;">{{ product.acf.ProductGrouping }}</p>
                  <p class="pb-4" style="opacity: .5;">{{ product.acf.productprice }}$</p>
                </div>
              </div>
            </section>
          </div>
        <!--loading section -->
        <div v-if="loadproduct" class="text-center mt-4">
          <p class="text-success" style="font-size: 12pt; font-weight: bold">
            Loading...
          </p>
        </div>
        <!-- end loading section -->
        </div>
      </div>
    </div>
    <div
        class="d-lg-none my-4 d-flex justify-content-center align-items-center">
      <AdminPagination />
    </div>
  </div>
</div>
<Teleport to="body">
  <div
      class="h-100 position-absolute top-0 d-flex flex-column justify-content-center align-items-center modal"
      style="backdrop-filter: blur(4px); z-index: 1000"
      v-if="groupingStatus"
  >
    <NewGrouping @close="NewGroupingStatus(false)" />
  </div>
</Teleport>
<div
    class="w-100 h-100 position-absolute top-0 left-0 d-flex"
    v-if="productFromStatus"
    style="z-index: 999"
>
  <NewProduct @close="productFrom(false)" />
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
      ProductDspStatus: true,
      loadproduct: false,
      Products: [],
      groupingStatus: false,
      productFromStatus: false,
    };
  },

beforeMount() {
    this.loadproduct = true;
  },

  methods: {
   
  async ProductDsp(id) {
   
      this.ProductDspStatus = !this.ProductDspStatus
      
      /*change status of product*/

    /*post request to add new product*/
    const headers = {
        Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
        "Content-Type": "application/json",
      };

      if(!this.ProductDspStatus) {
        await this.$axios
        .put(`/wp-json/wp/v2/products/${id}`, {"acf":{"dspstatus": false}}, { headers })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      }
     
        if(this.ProductDspStatus) {
        await this.$axios
        .put(`/wp-json/wp/v2/products/${id}`, {"acf":{"dspstatus": true}}, { headers })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      }

    },
    NewGroupingStatus(status) {
      this.groupingStatus = status;
    },
    productFrom(status) {
      this.productFromStatus = status;
    },
   async AddANewProduct(        
        ProductName,
        ProductGrouping,
        productprice,
        productweight,
        productdescription,
        productusage,
        productwhy,
        productingrediebts,
        productflavors,
        productrecomendusage,
        productimg
        ) {

    /*post request to add new product*/
    const headers = {
        Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
        "Content-Type": "application/json",
      };

     const Data = JSON.stringify({
      "status": "publish",
      acf:{
      "productname": ProductName,
      "ProductGrouping": ProductGrouping,
      "productprice": productprice,
      "productweight": productweight, 
      "productdescription": productdescription,
      "productusage":productusage,
      "productwhy": productwhy,
      "productingrediebts": productingrediebts,
      "productflavors": productflavors,
      "productrecomendusage": productrecomendusage,
      "productimg": productimg,
      "date": "2022/08/10",
        }
     }) 

      await this.$axios
        .post("/wp-json/wp/v2/products", Data, { headers })
        .then((res) => {
          if(res.status == 201) {
            alert("Product Added Successfully");
          } else {
            alert("Something went wrong");
          }
          
        })
        .catch((err) => {
          console.log(err);
        });
      
    },

   async UpdateProductsList () {
        /* Get All Products Request */
        const products = await this.$axios.get("/wp-json/wp/v2/products")
        this.Products = products.data;   

        /* set loading to false */
        this.loadproduct = false; 
    }
  },

  
  mounted() {
     /*load all products*/ 
     this.UpdateProductsList()          
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
  width: 40%;
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