<template>
  <div class="px-4">
    <NewCartBox :open="show" @close="show = false"/>
    <Portal to="under-header">
      <div class="container-full d-lg-none py-2 subNavPage px-4">
        <div class="row w-100 justify-content-between g-0">
          <nuxt-link class="col d-flex align-items-center gap-3 text-dark text-decoration-none" to="/profile">
            <img src="~/assets/svg/angle-small-right.svg" alt=""/>
            <span>Back</span>
          </nuxt-link>
          <!--  Actions are here  -->
          <div class="col-auto g-0"></div>
        </div>
      </div>
    </Portal>

    <h3 class="pb-2">Personal Information</h3>
    <div class="container g-2">
      <div class="row border rounded-3">
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.FullName" name="FullName" title="Full Name" placeholder="Please Enter your full name" :optional="true" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.email" name="email" title="Email" type="email" placeholder="Please Enter your email" :optional="true" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-b border-r">
          <input-field v-model="userData.phonenum" name="phonenum" title="Phone Num" placeholder="Please Enter your phone number" :optional="true" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6">
          <input-field v-model="userData.password" name="password" title="Password" type="password" placeholder="Please Enter your password" :optional="true" @saving="save"/>
        </div>
      </div>
    </div>

    <h3 class="pb-2 pt-5">Address Information</h3>
    <div class="container g-2">
      <div class="row border rounded-3">
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.firstname" name="firstname" title="First name" placeholder="Please Enter your first name" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.lastname" name="lastname" title="Last name" placeholder="Please Enter your last name" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.streetaddress" name="streetaddress" title="Street Address" placeholder="Please Enter your street address" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="more" name="apt" title="Apt,suite,etc.(optional)" placeholder="Please Add optional data" :optional="true" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.city" name="city" title="City" placeholder="Please Enter your city" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.state" name="state" title="State" placeholder="Please Enter your state" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.zipcode" name="zipcode" title="Zip Code" placeholder="Please Enter your zip code" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.phonenum" name="phonenum" title="Phone Num" placeholder="Please Enter your phone" @saving="save"/>
        </div>
        <div class="col-12 p-4 mb-4">
          <label for="delivery" class="form-label">Delivery instructions</label>
          <textarea v-model="userData.deliveryinstruction" class="form-control" id="delivery" rows="3" placeholder="write something..."></textarea>
        </div>
      </div>
    </div>

    <h3 class="pb-2 pt-5">Payment Method</h3>
    <span class="text-black-50">Choose your payment method below</span>
    <div class="container g-2 mb-2">
      <div class="row flex flex-wrap py-4 gap-2">
       <bank-card v-for="(card, i) in cards" :key="i" :name="card.acf.cardname" :number="card.acf.cardnumber" :select="cardSelected == card.id" @click.native="SelectCard(card.id)" :i="i"/>
       <bank-card @Add="Add"/>
      </div>
    </div>

    <div class="d-flex align-items-center gap-3 pt-5 pb-4">
      <span class="circle">1</span>
      <h3 class="mb-0">Village Bank</h3>
    </div>
    <div class="container g-2 mb-10">
      <div class="row border rounded-3">
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.cardfirstname" name="firstname" title="First name" placeholder="Please Enter your first name" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.cardlastname" name="lastname" title="Last name" placeholder="Please Enter your last name" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom border-r">
          <input-field v-model="userData.cardnumber" name="cardnumber" title="Card Number" placeholder="Please Enter your street address" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-bottom">
          <input-field v-model="userData.cvv" name="cvv" title="CVV" placeholder="Please Add optional data" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6 border-b border-r">
          <input-field v-model="userData.cardexpmonth" name="card_exp_month" title="Exp Month" placeholder="Please Enter your city" @saving="save"/>
        </div>
        <div class="col-md-12 col-lg-6">
          <input-field v-model="userData.cardexpyear" name="card_exp_year" title="Exp Year" placeholder="Please Enter your state" @saving="save"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from "~/components/InputField";
import BankCard from "~/components/BankCard";
import NewCartBox from "~/components/NewCartBox";
import {mapState} from "vuex";

export default {
  name: "profile-edit",
  components: {BankCard, InputField, NewCartBox},
  layout: "profile",
  data() {
    return {
      userData: {
        FullName: '',
        aptsuite: '',
        cardexpmonth: '',
        cardexpyear: '',
        cardfirstname: '',
        cardlastname: '',
        cardnumber: '',
        city: '',
        cvv: '',
        deliveryinstruction: '',
        firstname: '',
        lastname: '',
        paymentmethod: '',
        phonenum: '',
        state: '',
        streetaddress: '',
        zipcode: '',
      },
      more: "",
      cardSelected: '',
      show: false
    };
  },

  async asyncData({$axios, $cookiz, error}) {
    const headers = { 'Authorization': 'Bearer' + $cookiz.get('jwt-token'), 'Content-Type': 'application/json' }

    return await $axios.post(`/wp-json/wp/v2/users/me`, {token: $cookiz.get('jwt-token')}, {headers}).then(response => {
      return {userData: response.data.acf, cardSelected: String(response.data.acf.paymentmethod)}
    }).catch(e => error())
  },

  computed: {
    ...mapState(['cards'])
  },

  methods: {
    async save() {
      let data = {
        status: 'publish',
        acf: this.userData,
        token: this.$cookiz.get('jwt-token')
      }
      const headers = { 'Authorization': 'Bearer' + this.$cookiz.get('jwt-token'), 'Content-Type': 'application/json' }

      await this.$axios.put(`/wp-json/wp/v2/users/me`, data, {headers})
          .then(response => window.location.reload())
    },

    Add() {
      this.show = true
    },

    SelectCard(payment) {
      this.cardSelected = payment
      this.userData.paymentmethod = String(payment)
      this.save()
    }, 

  },

mounted() {
      if (localStorage.getItem('reloaded')) {
          //remove local storage
          localStorage.removeItem('reloaded');
        
          // Set a flag so that we know not to reload the page twice.
          location.reload();
      } 

 }
}

</script>

<style scoped>
.border-b {
  border-bottom: 1px solid #dee2e6;
}
.border-r {
  border-right: none;
}
@media (min-width: 992px) {
  .border-r {
    border-right: 1px solid #dee2e6;
  }
  .border-b {
    border-bottom: none;
  }
}
.form-label {
  font-size: 14px;
  color: #838383;
}
.circle {
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  padding: 10px;
  border: 2px solid #055452;
  color: #055452;
  font-size: 24px;
}
</style>