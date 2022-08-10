<template>
  <Modal title="Billing" :open="open" @close="$emit('close', true)" :bg="'#fff'" :color="'#000'">
    <div class="px-4 py-4 d-flex flex-column justify-content-between box">
      <NewCartBox :open="show" @close="show = false"/>
      <details>
        <summary>Personal information</summary>
        <div class="Wrapper">
          <span class="Title">First name <span style="color: red">*</span></span>
          <div class="Input">
            <input type="text" id="input" class="Input-text" v-model="data.first_name">
          </div>
        </div>

        <div class="Wrapper">
          <span class="Title">Last name <span style="color: red">*</span></span>
          <div class="Input">
            <input type="text" id="input" class="Input-text" v-model="data.last_name">
          </div>
        </div>

        <div class="Wrapper">
          <span class="Title">Company name (optional)</span>
          <div class="Input">
            <input type="text" id="input" class="Input-text" v-model="data.company">
          </div>
        </div>

        <div class="Wrapper">
          <span class="Title">Email address <span style="color: red">*</span></span>
          <div class="Input">
            <input type="text" id="input" class="Input-text" v-model="data.email">
          </div>
        </div>

        <div class="Wrapper">
          <span class="Title">Order notes (optional)</span>
          <div class="Input">
            <textarea type="text" id="input" class="Input-text" v-model="data.notes"> </textarea>
          </div>
        </div>
      </details>
      <hr style="width: 100%; border: 1px solid gray">
      <div class="d-flex justify-content-between payment-box">
        <span>Payment method</span>
        <span @click="show = true">Add</span>
      </div>
      <hr style="width: 100%; border: 1px solid gray">
      <div class="order">
        <span>Your Order</span>
        <ul>
          <li> <span> Product </span> <span> Total </span> </li>
          <hr style="width: 100%; border: 1px solid gray">
          <li> <span> Subtotal </span> <span> ${{ orders.sub }} </span> </li>
          <hr style="width: 100%; border: 1px solid gray">
          <li> <span> Shipping </span> <span> {{ shipping }} </span> </li>
          <hr style="width: 100%; border: 1px solid gray">
          <li> <span> Total </span> <span> ${{ orders.total }} </span> </li>
        </ul>
      </div>
      <div class="button-add" @click="$emit('Checkout', data)">PROCEED TO CHECKOUT</div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import InputField from "@/components/InputField";
import NewCartBox from "@/components/NewCartBox";

import {mapActions, mapState} from "vuex";

export default {
  name: "NewTicketBox",
  components: {InputField, Modal, NewCartBox},
  props: ['open', 'orders'],
  data() {
    return {
      data: {
        first_name: '',
        last_name: '',
        company: '',
        email: '',
        notes: '',
        payment: ''
      },
      show: false,
    }
  },

  created() {
    this.data.payment = {
      paymentmethod: this.user.acf.paymentmethod,
      cardfirstname: this.user.acf.cardfirstname,
      cardlastname: this.user.acf.cardlastname,
      cardnumber: this.user.acf.cardnumber,
      cvv: this.user.acf.cvv,
      cardexpmonth: this.user.acf.cardexpmonth,
      cardexpyear: this.user.acf.cardexpyear
    }
  },

  computed: {
    ...mapState(['user']),

    shipping() {
      if (this.orders.sub > 100) return 'Free shipping'
      else return 'Local pickup'
    }
  },

  methods: {
    ...mapActions(['AddNewCart']),
  }
}
</script>

<style scoped>
.box {
  max-height: 80vh;
  overflow-y: auto;
}

.order {
  margin-top: 20px;
  background: #eaeaea;
  border: 1px solid #949494;
  padding: 1.3rem 1.5rem;
  border-radius: 10px;
}

.order > span {
  font-size: 19px;
  font-weight: 600;
  border-bottom: 2px solid #000;
}

.order ul {
  margin-top: 20px;
  list-style: none;
  padding: 0;
}

.order ul li {
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
}

.payment-box {
  width: 100%;
}

.payment-box span:first-child {
  font-size: 18px;
  font-weight: 600;
}

.payment-box span:last-child {
  font-size: 18px;
  font-weight: 600;
  color: #e99d7b;
  cursor: pointer;
}

summary {
  font-size: 19px;
  font-weight: 600;
}

.button-add {
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 20px;
  color: white;
  background-color: #e99d7b;
  border: none;
  border-radius: 8px;
  padding: 6px 48px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin: 10px auto;
}

.Wrapper {
  max-width: 100%;
  margin: 20px 0;
}

.Title {
  margin: 0 0 10px 0;
  padding: 0;
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  line-height: 10px;
  text-align: left;
  color: #000;
}

.Input {
  position: relative;
}

.Input-text {
  display: block;
  margin: 0;
  padding: .5rem 1rem;
  color: inherit;
  width: 100%;
  font-family: inherit;
  font-size: 18px;
  font-weight: inherit;
  line-height: 20px;
  border: 1px solid gray;
  border-radius: 0.4rem;
  transition: box-shadow .5s;
}

.Input-text::placeholder {
  color: #B0BEC5;
}
</style>