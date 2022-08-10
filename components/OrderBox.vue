<template>
  <div class="container box">
    <div class="d-flex align-items-center gap-3" v-if="state==='deliverd'">
      <img id="tick" src="~/assets/svg/tick.svg" alt="">
      <h5 class="mb-0">Delivered</h5>
    </div>
    <div class="d-flex align-items-center gap-3" v-else>
      <img id="time" src="~/assets/svg/time.svg" alt="">
      <h5 class="mb-0">Pending</h5>
    </div>
    <div class="d-flex flex-wrap mt-4">
      <div class="box-info">
        Date: <span>{{ date }}</span>
      </div>
      <div class="box-info">
        Time: <span>{{ time }}</span>
      </div>
      <div class="box-info">
        Total Price: <span>${{ total_price }}</span>
      </div>
    </div>
    <div class="row row-cols-3 gap-3 mt-3">
      <div class="box-body" v-for="order in data">
        <img id="thumb" :src="order.acf.productimage" alt="">
        <div>
          <p>{{ order.acf.product_title }}</p>
          <p>${{ order.acf.offprice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderBox",
  props: {
    state: String,
    data: Array | Object
  },

  computed: {
    total_price() {
      var total_price = 0
      for (let i = 0; i < this.data.length; i++) {
        total_price += parseInt(this.data[i].acf.offprice)
      }
      if (total_price >= 100) {
        const wage = total_price - (total_price * ((100 - 6) / 100))
        return (total_price + wage).toFixed(1)
      } else {
        const wage1 = total_price - (total_price * ((100 - 6) / 100))
        const wage2 = total_price - (total_price * ((100 - 10) / 100))
        const total_wage = wage1 + wage2
        return total_price + total_wage
      }
    },
    date() {
      return this.data[0].acf.date
    },
    time() {
      return this.data[0].acf.time
    }
  }
}
</script>

<style scoped>
.box {
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);
  border: solid 1px #e0e0e2;
}

.box #time {
  background-color: #e99d7b;
  width: 28px;
  height: 28px;
  padding: 4px;
  border-radius: 50%;
}

.box #tick {
  background-color: #6bb927;
  width: 28px;
  height: 28px;
  padding: 4px;
  border-radius: 50%;
}

.box-info {
  font-size: 16px;
  color: #a1a2a1;
  margin-right: 30px;
  padding: 5px;
}

.box-info span {
  padding-left: 5px;
  color: #231942 !important;
}

.box-body {
  display: flex;
  min-width: 300px;
  flex: 1;
  padding-bottom: 10px;
}

.box-body #thumb {
  width: 100px;
  object-fit: contain;
  margin-right: 8px;
  border-radius: 8px;
  overflow: hidden;
}

.box-body p {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
  color: #231942 !important;

}

</style>