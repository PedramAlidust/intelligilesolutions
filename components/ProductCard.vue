<template>
  <div style="width: 100%">
    <div class="position-relative main">
      <img
          :src="details.acf.productimg"
          class="effect"
          alt="awd"
          style="width: 100%; height: 400px"/>
      <div class="new">
        <p>New</p>
      </div>
    </div>
    <div class="mt-3 px-2">
      <div class="d-flex justify-content-between">
      </div>
      <div
          class="d-flex flex-column"
          style="margin-top: -13px; text-align: left"
      >
        <p class="fs-5">{{ details.acf.productname }}</p>
        <p class="fs-5" style="margin-top: -10px">
          ${{ details.acf.productprice }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  props: ["details"],

  computed: {
    ...mapState(['user', 'trending_discount'])
  },

  methods: {
    Saved() {
      const data = {
        status: "publish",
        acf: {
          product_title: this.details.acf.productname,
          product_price: this.details.acf.productprice,
          productimage: this.details.acf.productimage,
          productstar: 5
        }
      }

      this.$emit('Saved', data)
    }
  }
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
