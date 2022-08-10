<template>
  <div class="box">
    <img :src="data.acf.productimage" alt="" />
    <div class="box-inner">
      <div class="box-title">
        <div class="px-3" style="flex: 1">
          <h4>{{ data.acf.productname }}</h4>
          <span>{{ data.acf.productdesc }}</span>
          <hr style="width: 80%;">
          <div>Count in store: {{ data.acf.productcount }}</div>
        </div>
        <div class="close">&#215;</div>
      </div>
      <div class="unit-price">
        <span class="price">${{ OffPrice(data.acf.productprice, trending_discount) }}</span>
      </div>
      <div class="counter-wrapper">
        <div class="counter">
          <span @click="decrease">-</span>
          <span class="num">{{ count }}</span>
          <span class="next" @click="increase">+</span>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center">
          <span class="title">subtotal</span>
          <span class="price" :class="{ 'has-discount': trending_discount != 0 }" v-if="trending_discount != 0">${{ price }}</span>
          <span class="price">${{ OffPrice(price, trending_discount) }}</span>
        </div>
      </div>
      <div class="close" @click="Delete(cart.id)">&#215;</div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

import global from "@/mixins/global";

export default {
  name: "ProductItemBox",
  props: ["cart", "data", "index"],
  mixins: [global],

  data() {
    return {
      count: 1
    }
  },

  created() {
    if (this.$cookiz.get(`count:${this.data.id}`) != undefined) this.count = this.$cookiz.get(`count:${this.data.id}`)
    this.$emit('UpdatePrice', this.OffPrice(this.price, this.discount))
    this.$emit('GetCount', this.count)
  },

  methods: {
    ...mapActions(['DeleteFromCart']),

    increase() {
      if (this.count < this.data.acf.productcount) {
        this.count++
        this.$emit('EditCount', {i: this.index, count: this.count})
        this.$emit('IncreasePrice', this.OffPrice(this.data.acf.productprice, this.discount))
        this.$emit('UpdateCart')
      };
    },
    decrease() {
      if (this.count > 1) {
        this.count--
        this.$emit('EditCount', {i: this.index, count: this.count})
        this.$emit('DecreasePrice', this.OffPrice(this.data.acf.productprice, this.discount))
        this.$emit('UpdateCart')
      };
    },
    Delete(id) {
      this.DeleteFromCart(id)
    }
  },

  computed: {
    ...mapState(['trending_discount']),

    price() {
      return parseInt(this.data.acf.productprice) * this.count
    },

    discount() {
      return this.trending_discount
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  padding: 14px;
  margin-bottom: 10px;
  border-radius: 16px;
  box-shadow: 0 1px 6px 2px rgb(214, 214, 214);
  background: white;
  position: relative;
}
.box-inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.box img {
  height: 120px;
  width: 120px;
  min-width: 120px;
  border-radius: 16px;
  overflow: hidden;
}
.box h4 {
  font-size: 20px;
  color: #055452;
}
.box-title {
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.unit-price {
  display: none;
}
.price {
  font-weight: 600;
  font-size: 20px;
  color: #055452;
}
.has-discount {
  color: #c6c6c6;
  text-decoration: line-through;
}
.counter-wrapper {
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
.counter {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  height: 50px;
  border: 1px solid #c6c6c6;
  border-radius: 28px;
  box-shadow: inset 5px 2px 9px 4px #e0e0e0;
}
.counter span {
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  width: 50px;
}
.counter .next {
  color: #055452;
}
.counter .num {
  color: #055452;
  cursor: default;
  width: 80px;
}
.num::after {
  content: "|";
  color: #dad9d9;
  margin-left: 20px;
}
.num::before {
  content: "|";
  color: #dad9d9;
  margin-right: 20px;
}
.title {
  color: #c6c6c6;
  text-transform: uppercase;
  font-size: 12px;
  display: none;
}
.close {
  display: none;
  right: 10px;
  top: 0;
  flex: auto;
  min-width: 50px;
  cursor: pointer;
  color: #d90f0f;
  font-size: 40px;
  padding: 0 10px;
  text-align: end;
}
.box-title .close {
  display: block;
  flex: 0 !important;
}
@media screen and (min-width: 1200px) {
  .box-inner {
    flex-direction: row;
    align-items: center;
  }
  .unit-price {
    display: flex;
    flex-direction: column;
  }
  .counter-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .counter {
    margin-right: 10%;
  }
  .close {
    display: block;
  }
  .title {
    display: block;
  }
  .box-title .close {
    display: none;
  }
}
</style>