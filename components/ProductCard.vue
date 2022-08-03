<template>
  <div>
    <div class="position-relative">
      <img :src="img" alt="" class="w-100" />
      <!-- <img :src="img" :alt="name" class="w-100" /> -->
      <!-- <div
        class="w-100 h-100 position-absolute top-0 left-0"
        style="background-color: black; opacity: 0.8; z-index: 100"
      ></div> -->
      <div
        class="w-100 position-absolute letf-0 bottom-0 d-flex justify-content-between align-items-center px-4 pb-4"
        style="z-index: 500"
      >
        <button
          class="bg-light border-0 rounded-circle"
          style="width: 40px; height: 40px"
        >
          <i class="bi bi-arrows-angle-expand fw-bold fs-6"></i>
        </button>
        <button
          style="background-color: #e99d7b"
          class="border-0 px-4 py-2 rounded-pill text-light"
        >
          Add To Cart
        </button>
        <button
          class="bg-light border-0 px-1 py-1 rounded-circle"
          style="width: 40px; height: 40px"
        >
          <i class="bi bi-heart text-danger fs-4"></i>
        </button>
      </div>
    </div>
    <div class="d-flex align-items-center mt-2">
      <!-- star -->
      <div>
        <i class="bi bi-star-fill starbi text-danger"></i>
        <i class="bi bi-star-fill starbi text-danger"></i>
        <i class="bi bi-star-fill starbi text-danger"></i>
        <i class="bi bi-star starbi text-danger"></i>
        <i class="bi bi-star starbi text-danger"></i>
      </div>
      <!-- stars count -->
      <div>
        <p class="m-0 StartCount">(5000)</p>
      </div>
      <!-- reviews count -->
      <div class="ms-auto">
        <p class="m-0 reviews text-muted">150 reviews</p>
      </div>
    </div>
    <p class="pt-2 ProductTitle">{{ name }}</p>
    <p class="ProductTitle">{{ price }}</p>
  </div>
</template>

<script>
export default {
  props: ["img", "price", "name"],
};
</script>

<style scoped></style>
