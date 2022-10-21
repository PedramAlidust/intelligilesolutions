<template>
  <div
    class="w-100 px-4 py-4 bg-light border rounded-1"
    style="overflow-y: auto">
    <div class="d-flex justify-content-between">
      <div>
        <p class="PageTitle">Add New product</p>
        <p class="Desc">
          Please fill in the form below carefully to create a new product .
        </p>
      </div>
      <div>
        <button class="btn-close" aria-label="Close" @click="$emit('close')" />
      </div>
    </div>
    <div class="mt-4">
      <div class="row row-cols-lg-4">
        <div
          class="
            border
            rounded-1
            d-flex
            flex-column
            align-items-center
            justify-content-center
            py-2
            px-4
            bg-white">
          <div>
            <img
              @click="$refs.fileInput.click()"
              v-if="previewImage"
              :src="previewImage"
              alt=""
              class="w-100"/>
            <img
              @click="onUpload"
              v-if="!previewImage"
              src="~/assets/pictures/uoloadP.png"
              alt=""
              class="w-100"/>
          </div>
          <div class="d-flex justify-content-center mt-4">
            <input
              style="display: none"
              type="file"
              @change="onFileSelected"
              ref="fileInput"/>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="d-lg-flex flex-column flex-md-row">
          <div class="w-50 position-relative d-none d-lg-block">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px">Name</label>
            <input
              v-model="ProductName"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Product Name"/>
          </div>
          <div class="w-100 position-relative d-lg-none">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Name</label>
            <input
              v-model="ProductName"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Product Name"/>
          </div>
          <div
            class="w-50 position-relative d-none d-md-block"
            style="margin-left: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Grouping</label>
            <input
              v-model="ProductGrouping"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Grouping Name"/>
          </div>
          <div class="w-100 position-relative d-md-none mt-4">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px">Grouping</label>
          </div>
        </div>
        <div class="mt-4">
          <div
            class="w-50 position-relative d-none d-lg-block"
            style="margin-right: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px">Price</label>
            <input
              v-model="ProductPrice"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the price of Products"/>
          </div>
          <div
            class="w-100 position-relative d-lg-none"
            style="margin-right: 25px">
            <label class="bg-light"
              style="position: absolute; top: -12px; left: 10px">Price</label>
            <input
              v-model="ProductPrice"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the price of Products"/>
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-between mt-4">
        <div class="d-flex flex-column">
          <p class="PageTitle">Product Weight</p>
          <div class="d-flex">
            <button
              v-for="(unitweight, index) in unitWeightArray"
              :key="index + 10"
              class="bg-transparent border rounded-1 px-2 py-2">
              {{ unitweight.weight }} {{ unitweight.unit }}
            </button>
          </div>
        </div>
        <div
          @click="DspModal"
          class="
            d-flex
            align-items-center
            border
            rounded-1
            border-warning
            px-2 px-md-3
            py-1">
          <p class="mt-3">Add Weight</p>
          <button
            class="bi-plus-lg bg-warning border-0 rounded-circle ms-2"></button>
        </div>
      </div>

      <div class="mt-4">
        <p class="PageTitle">Product Discription</p>
        <div class="d-lg-flex">
          <div class="w-50 position-relative d-none d-lg-block">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Discription</label>
            <textarea
              v-model="ProductDescription"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Product Description"/>
          </div>
          <div class="w-100 position-relative d-lg-none">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Discription</label>
            <textarea
              v-model="ProductDescription"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Grouping Name"/>
          </div>
          <div
            class="w-50 position-relative d-none d-lg-block"
            style="margin-left: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >How to use</label>
            <textarea
              v-model="ProductUsage"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the How to Use"/>
          </div>
          <div class="w-100 position-relative d-lg-none mt-4">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >How to use</label>
            <textarea
            v-model="ProductUsage"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the How to Use"/>
          </div>
        </div>
        <div class="w-100 mt-4">
          <div class="w-100 position-relative" style="margin-right: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Why it's cult</label>
            <textarea
              v-model="ProductWhy"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the Why it's cult"
            />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <p class="PageTitle">Product Details</p>
        <div class="d-lg-flex">
          <div class="w-50 position-relative d-none d-lg-block">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Ingrediebts</label
            >
            <textarea
              v-model="ProductIngrediebts"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="inter ingrediebts"
            />
          </div>
          <div class="w-100 position-relative d-lg-none">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Ingrediebts</label>
            <textarea
              v-model="ProductIngrediebts"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="inter ingrediebts"/>
          </div>
          <div
            class="w-50 position-relative d-none d-lg-block"
            style="margin-left: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px">Flavors</label>
            <textarea
              v-model="ProductFlavors"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="enter the flavors"/>
          </div>
          <div class="w-100 position-relative d-lg-none mt-4">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px">Flavors</label>
            <textarea
              v-model="ProductFlavors"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="enter the flavors"/>
          </div>
        </div>
        <div class="w-100 mt-4">
          <div class="w-100 position-relative" style="margin-right: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px">Recommended Usege</label>
            <textarea
              v-model="ProductRecomendUsage"
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the Recommended Usege"/>
          </div>
        </div>
      </div>
      <div class="mt-4 d-flex justify-content-end">
        <button
          @click="NewProduct"
          class="bg-transparent border-warning border rounded-1 py-2 px-2">
          Add a New Product
        </button>
      </div>
    </div>

    <!-- modal section -->
    <section
      v-if="weightFormStatus"
      style="backdrop-filter: blur(4px); z-index: 1000"
      class="
        w-100
        position-absolute
        top-0
        left-0
        d-flex
        flex-column
        justify-content-center
        align-items-center
        modal">
      <div
        class="
          d-none d-lg-flex
          flex-column
          bg-light
          py-4
          px-4
          w-25
          border
          rounded-1">
        <div class="d-flex justify-content-between">
          <p class="PageTitle">New Weight</p>
          <button
            @click="DspModal"
            class="btn-close"
            aria-label="Close"></button>
        </div>
        <p class="Desc">
          Please enter the numerical weight of the product along with its unit.
        </p>
        <div class="w-100 position-relative" style="margin-right: 25px">
          <label
            class="bg-light"
            style="position: absolute; top: -12px; left: 10px">Weight</label>
          <input
            v-model="weight"
            type="text"
            class="w-100 py-3 px-4 rounded-1 border bg-transparent"
            placeholder="Enter the weight of the product"/>
        </div>
        <div class="w-100 position-relative mt-4" style="margin-right: 25px">
          <label
            class="bg-light"
            style="position: absolute; top: -12px; left: 10px">Unit</label>
          <input
            v-model="unit"
            type="text"
            class="w-100 py-3 px-4 rounded-1 border bg-transparent"
            placeholder="Enter the product weight unit"/>
        </div>
        <div class="mt-4 d-flex">
          <button class="w-100 btn mt-4 mx-2" @click="DspModal">Cancel</button>
          <button
            @click="AddUnit"
            class="w-100 btn mt-4 text-light mx-2"
            style="background-color: #65a79f">
            Add
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: "",
      unit: "",
      unitWeightArray: [],
      weightFormStatus: false,
      selectedFile: null,
      previewImage: null,
      ProductName: "",
      ProductGrouping: "",
      ProductPrice: "",
      ProductWeight: "",
      ProductDescription: "",
      ProductUsage: "",
      ProductWhy: "",
      ProductIngrediebts: "",
      ProductFlavors: "",
      ProductRecomendUsage: "",
      ProductImg: "",
    };
  },
  methods: {
    AddUnit() {
      const weight = this.weight;
      const unit = this.unit;
      this.unitWeightArray.push({ weight, unit });
      this.weightFormStatus = false;
    },
    DspModal() {
      this.weightFormStatus = !this.weightFormStatus;
    },
    NewProduct() {
      this.$parent.AddANewProduct(
        this.unitWeightArray,
        this.ProductName,
        this.ProductGrouping,
        this.ProductPrice,
        this.ProductWeight,
        this.ProductDescription,
        this.ProductUsage,
        this.ProductWhy,
        this.ProductIngrediebts,
        this.ProductFlavors,
        this.ProductRecomendUsage,
        this.ProductImg,
      );
      /*close NewProductModal*/
      this.$emit('close')
      /* empty preview image */
      this.previewImage = null;
    },
    async onFileSelected(event) {
      this.selectedFile = event.target.files[0];


    /*check if file selected*/
    if(this.selectedFile) {

      const fd = new FormData();
      fd.append("file", this.selectedFile, this.selectedFile.name);
      fd.append("title", "kandaka title");
      fd.append("caption", "kandaka caption");

      /* file reader for prview image */
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
      };
      /* set request header */
      const headers = {
        "Content-Disposition": `attachment; filename=${this.selectedFile.name}`,
        Authorization: "Bearer" + this.$cookiz.get("AdminToken"),
        "content-type": "multipart/form-data",
      };

      await this.$axios
        .post("/wp-json/wp/v2/media", fd, { headers })
        .then((res) => {
          this.ProductImg = res.data.source_url
        })
        .catch((err) => {
          console.log(err);
        });

      }

    },
    async onUpload() {
        /* triger the upload */
        this.$refs.fileInput.click()
    },
  },
};
</script>

<style scoped>
.Desc {
  font-family: "Open Sans";
  font-size: 11pt;
  color: #707070;
}
.Desc:first-letter {
  text-transform: capitalize;
}
.PageTitle {
  font-family: "Open Sans";
  font-size: 18pt;
  font-weight: 600;
  color: #231942;
  text-transform: capitalize;
}
.PageTitle:first-letter {
  text-transform: capitalize;
}
.place::placeholder {
  font-size: 13px;
}
</style>