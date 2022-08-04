<template>
  <div style="width: fit-content">
    <div class="position-relative main">
      <img
        :src="details.acf.productimage"
        class="effect"
        alt="awd"
        style="width: 100%; height: 400px"
      />
      <div class="new">
        <p>New</p>
      </div>
      <div class="details">
        <button
          class="bg-light border-0 rounded-circle"
          style="width: 40px; height: 40px"
        >
          <i class="bi bi-arrows-angle-expand fw-bold fs-6"></i>
        </button>
        <button
          style="background-color: #e99d7b"
          class="border-0 px-4 py-2 rounded-pill text-light mx-2"
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
    <div class="mt-3 px-2">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <div>
            <i class="bi bi-star-fill starbi text-danger"></i>
            <i class="bi bi-star-fill starbi text-danger"></i>
            <i class="bi bi-star-fill starbi text-danger"></i>
            <i class="bi bi-star starbi text-danger"></i>
            <i class="bi bi-star starbi text-danger"></i>
          </div>
          <div>
            <p class="m-0 StartCount">(5000)</p>
          </div>
        </div>
        <div>
          <p class="">150 reviews</p>
        </div>
      </div>
      <div class="d-flex flex-column" style="margin-top: -13px">
        <p class="fs-5">{{ details.title.rendered }}</p>
        <p class="fs-5" style="margin-top: -10px">
          ${{ details.acf.productprice }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["details"],
};
</script>

<style scoped>
.details {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 20px;
  left: 0;
  display: none;
  transition: all 0.3s ease-in;
}
.main:hover .details {
  display: flex;
  justify-content: center;
  align-items: end;
  z-index: 999;
}
.main:hover .effect {
  filter: brightness(0.5);
  border-radius: 15px;
}
.new {
  position: absolute;
  top: 10px;
  right: 10px;
}
.new p {
  background-color: crimson;
  color: white;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 15px;
}
</style>
