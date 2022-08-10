<template>
  <div class="box">
    <div class="box-body">
      <img id="thumb" :src="product_image" alt="">
      <div>
        <h4>{{ data.acf.author }}</h4>
        <div class="d-flex gap-3 justify-content-between flex-wrap">
          <ProductScore :score="parseInt(data.acf.score)"/>
          <span>{{ date }}</span>
        </div>
        <p class="d-none d-md-block">{{ data.acf.commenttxt }}</p>
      </div>
    </div>
    <p class="d-block d-md-none">{{ data.acf.commenttxt }}</p>
  </div>
</template>

<script>
//Components
import ProductScore from "~/components/ProductScore";

//Mixins
import global from '~/mixins/global'

export default {
  name: "CommentBox",
  components: {ProductScore},
  mixins: [global],
  props: ['data'],

  data() {
    return {
      product_image: ''
    }
  },

  created() {
    this.FindingProduct(this.data.acf.productid)
        .then(product => this.product_image = product.acf.productimage)
  },

  computed: {
    date() {
      return this.data.acf.date.split('T')[0]
    }
  }
}
</script>

<style scoped>
.box {
  padding-bottom: 20px;
  margin-bottom: 28px;
  justify-content: space-between;
  border-bottom: solid 1px #e0e0e2;
}

.box-body {
  flex: 1;
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.box-body #thumb {
  min-width: 100px;
  height: 100px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 8px;
}

.box-body h4 {
  font-size: 20px;
  color: #055452;
}

.box-body p, .box p {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  padding-top: 14px;
  color: #707070 !important;
}

.box-body span {
  color: #b2b2b2;
  font-size: 14px;
}

</style>