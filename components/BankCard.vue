<template>
  <div
  class="bank-card"
  :style="name!='blank' ? `background-color: ${colors[i]};` : ''"
  :class="name"
  >
    <div class="selected" v-if="select">
      <img src="~/assets/svg/check.svg" alt="">
    </div>
    <div class="bank" v-if="name==='blank'" @click="$emit('Add')">
      <img src="~/assets/svg/plus-small.svg" alt="" v-if="name==='blank'">
    </div>
    <img id="circle1" src="~/assets/svg/circle1.svg" alt="" v-if="name!=='blank'">
    <img id="circle2" src="~/assets/svg/circle3.svg" alt="" v-if="name!=='blank'">
    <img id="blank" src="~/assets/svg/credits.svg" width="130" alt="" v-if="name==='blank'">
    <div class="bank-info">
      <h5 v-if="name==='blank'">Add a new card</h5>
      <h5 v-else>{{ bank_name }}</h5>
      <div class="numbers">{{ card_number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankCard",
  props: {
    number: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: "blank"
    },
    select: {
      type: Boolean,
      default: false
    },
    i: {
      type: Number,
      default: false
    }
  },

  data() {
    return {
      colors: [
          '#3AB4F2',
          '#7D9D9C',
          '#54BAB9',
          '#27b688',
          '#F2DF3A',
          '#FF9F29',
          '#3CCF4E',
          '#54BAB9'
      ]
    }
  },

  computed: {
    bank_name() {
      if (this.bank !== 'blank') return this.name.toLowerCase()[0].toUpperCase() + this.name.slice(1)
    },

    card_number() {
      return this.number
    }
  }
}
</script>

<style scoped>
.bank-card {
  position: relative;
  height: 180px;
  width: 300px;
  border-radius: 24px;
  margin-right: 10px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);
  margin-bottom: 10px;
}

.selected {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -10px;
  right: -10px;
}

.selected img {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  padding: 10px;
  border: 2px solid #055452;
}

.bank {
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  width: 40px;
  margin-top: 15px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#circle1 {
  position: absolute;
  right: 0;
  top: 10px;
  width: 100px;
}

#circle2 {
  position: absolute;
  right: 2px;
  top: 0;
  width: 100px;
}

#blank {
  position: absolute;
  right: 40px;
  top: 20px;
}

.bank-info {
  color: #231942;
  padding: 40px 15px 0;
}

.bank-info .numbers {
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 3px;
  color: #231942;
}

.paypal {
  background: #1dcd9d;
}

.master {
  background: #fbaf2a;
}

.blank {
  border: 1px solid #fe8c7a !important;
}

.blank h5 {
  margin-top: 48px;
  font-size: 15px;
}

.blank .bank {
  border: 1px solid #fe8c7a !important;
  cursor: pointer;
}

</style>