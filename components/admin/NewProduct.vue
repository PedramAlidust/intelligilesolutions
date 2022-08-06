<template>
  <div
    class="w-100 px-4 py-4 bg-light border rounded-1"
    style="overflow-y: auto"
  >
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
          class="border rounded-1 d-flex flex-column align-items-center justify-content-center py-2 px-4 bg-white"
        >
          <div>
            <img src="~/assets/pictures/uoloadP.png" alt="" class="w-100" />
          </div>
          <div class="d-flex justify-content-center mt-4">
            <span>Add your Image</span>
            <button
              class="bi-plus-lg bg-warning border-0 rounded-circle"
              style="margin-left: 10px"
            />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="d-lg-flex flex-column flex-md-row">
          <div class="w-50 position-relative d-none d-lg-block">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Name</label
            >
            <input
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Grouping Name"
            />
          </div>
          <div class="w-100 position-relative d-lg-none">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Name</label
            >
            <input
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Grouping Name"
            />
          </div>
          <div
            class="w-50 position-relative d-none d-md-block"
            style="margin-left: 25px"
          >
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Grouping</label
            >
            <select
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
            >
              <option value="" defult disabled hidden>Please Select</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
          <div class="w-100 position-relative d-md-none mt-4">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Grouping</label
            >
            <select
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
            >
              <option value="" defult disabled hidden>Please Select</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
        </div>
        <div class="mt-4">
          <div
            class="w-50 position-relative d-none d-lg-block"
            style="margin-right: 25px"
          >
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Price</label
            >
            <input
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the price of Products"
            />
          </div>
          <div
            class="w-100 position-relative d-lg-none"
            style="margin-right: 25px"
          >
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Price</label
            >
            <input
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the price of Products"
            />
          </div>
        </div>
      </div>

      <div class="d-flex align-items-center justify-content-between mt-4">
        <div class="d-flex flex-column">
          <p class="PageTitle">Product Weight</p>
          <div class="d-flex">
            <button class="bg-transparent border rounded-1 px-2 py-2">
              10 ml
            </button>
            <button class="bg-transparent border rounded-1 px-2 py-2 ms-2">
              20 ml
            </button>
            <button class="bg-transparent border rounded-1 px-2 py-2">
              30 ml
            </button>
          </div>
        </div>
        <div>
          <div
            class="d-flex align-items-center border rounded-1 border-warning px-2 px-md-3 py-1"
            @click="formStatus(true)"
          >
            <p class="mt-3">Add Weight</p>
            <button
              class="bi-plus-lg bg-warning border-0 rounded-circle ms-2"
            ></button>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <p class="PageTitle">Product Discription</p>
        <div class="d-lg-flex">
          <div class="w-50 position-relative d-none d-lg-block">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Discription</label
            >
            <textarea
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Grouping Name"
            />
          </div>
          <div class="w-100 position-relative d-lg-none">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Discription</label
            >
            <textarea
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Grouping Name"
            />
          </div>
          <div
            class="w-50 position-relative d-none d-lg-block"
            style="margin-left: 25px"
          >
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >How to use</label
            >
            <textarea
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the How to Use"
            />
          </div>
          <div class="w-100 position-relative d-lg-none mt-4">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >How to use</label
            >
            <textarea
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the How to Use"
            />
          </div>
        </div>
        <div class="w-100 mt-4">
          <div class="w-100 position-relative" style="margin-right: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Why it's cult</label
            >
            <textarea
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
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="inter ingrediebts"
            />
          </div>
          <div class="w-100 position-relative d-lg-none">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Ingrediebts</label
            >
            <textarea
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="inter ingrediebts"
            />
          </div>
          <div
            class="w-50 position-relative d-none d-lg-block"
            style="margin-left: 25px"
          >
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Flavors</label
            >
            <textarea
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="enter the flavors"
            />
          </div>
          <div class="w-100 position-relative d-lg-none mt-4">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Flavors</label
            >
            <textarea
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="enter the flavors"
            />
          </div>
        </div>
        <div class="w-100 mt-4">
          <div class="w-100 position-relative" style="margin-right: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Recommended Usege</label
            >
            <textarea
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the Recommended Usege"
            />
          </div>
        </div>
      </div>

      <div class="mt-4 d-flex justify-content-end">
        <button
          class="bg-transparent border-warning border rounded-1 py-2 px-2"
        >
          Add a New Product
        </button>
      </div>
    </div>
    <Teleport to="body">
      <div
        class="w-100 position-absolute top-0 left-0 d-flex flex-column justify-content-center align-items-center modal"
        style="backdrop-filter: blur(4px); z-index: 1000"
        v-if="weightFormStatus"
      >
        <div
          class="d-none d-lg-flex flex-column bg-light py-4 px-4 w-25 border rounded-1"
        >
          <div class="d-flex justify-content-between">
            <p class="PageTitle">New Weight</p>
            <button
              @click="formStatus(false)"
              class="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <p class="Desc">
            Please enter the numerical weight of the product along with its
            unit.
          </p>
          <div class="w-100 position-relative" style="margin-right: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Weight</label
            >
            <input
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the weight of the product"
            />
          </div>
          <div class="w-100 position-relative mt-4" style="margin-right: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Unit</label
            >
            <select
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the weight of the product"
            >
              <option value="" selected disabled>
                Enter the product weight unit
              </option>
            </select>
          </div>
          <div class="mt-4 d-flex">
            <button class="w-100 btn mt-4 mx-2" @click="formStatus(false)">
              Cancel
            </button>
            <button
              class="w-100 btn mt-4 text-light mx-2"
              style="background-color: #65a79f"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </Teleport>
    <Teleport to="body">
      <div
        class="w-100 position-absolute top-0 left-0 d-flex flex-column justify-content-center align-items-center modal"
        style="backdrop-filter: blur(4px); z-index: 1000"
        v-if="weightFormStatus"
      >
        <div
          class="w-100 d-lg-none flex-column bg-light py-4 px-4 w-25 border rounded-1"
        >
          <div class="d-flex justify-content-between">
            <p class="PageTitle">New Weight</p>
            <button
              @click="formStatus(false)"
              class="btn-close"
              aria-label="Close"
            ></button>
          </div>
          <p class="Desc">
            Please enter the numerical weight of the product along with its
            unit.
          </p>
          <div class="w-100 position-relative" style="margin-right: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Weight</label
            >
            <input
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the weight of the product"
            />
          </div>
          <div class="w-100 position-relative mt-4" style="margin-right: 25px">
            <label
              class="bg-light"
              style="position: absolute; top: -12px; left: 10px"
              >Unit</label
            >
            <select
              type="text"
              class="w-100 py-3 px-4 rounded-1 border bg-transparent"
              placeholder="Enter the weight of the product"
            >
              <option value="" selected disabled>
                Enter the product weight unit
              </option>
            </select>
          </div>
          <div class="mt-4 d-flex">
            <button class="w-100 btn mt-4 mx-2" @click="formStatus(false)">
              Cancel
            </button>
            <button
              class="w-100 btn mt-4 text-light mx-2"
              style="background-color: #65a79f"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weightFormStatus: false,
    };
  },
  methods: {
    formStatus(status) {
      this.weightFormStatus = status;
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
