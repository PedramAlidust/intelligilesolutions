<template>
  <div class="px-4">
    <Billing :open="show" @close="show = false" @Checkout="Checkout" :orders="{sub: sub_total_price, total: final_total_price}"/>
    <Portal to="under-header">
      <div class="container-full d-lg-none py-2 subNavPage px-4">
        <div class="row w-100 justify-content-between g-0">
          <nuxt-link class="col d-flex align-items-center gap-3 text-dark text-decoration-none" to="/profile">
            <img src="~/assets/svg/angle-small-right.svg" alt="" />
            <span>Back</span>
          </nuxt-link>
          <!--  Actions are here  -->
          <div class="col-auto g-0"></div>
        </div>
      </div>
    </Portal>
    <div class="container g-0 mb-10 justify-content-center align-items-center">
      <div class="d-flex justify-content-between align-items-center">
        <h1>{{ title }}</h1>
        <span class="link h4">{{ data.length }} Items</span>
      </div>
      <div class="mt-2 mb-4">
        <ProductItemBox v-for="(item, index) in data" :key="item.id" :index="index" :cart="profile.cart[index]" :data="item" @EditCount="EditCount" @GetCount="GetCount" @UpdateCart="Update" @IncreasePrice="IncreasePrice" @DecreasePrice="DecreasePrice" @UpdatePrice="UpdatePrice"/>
      </div>
      <div class="d-flex justify-content-end mb-4">
        <div class="btn" @click="Update()">
          <span>Update cart</span>
          <img src="~/assets/svg/refresh.svg" alt="" />
        </div>
      </div>
      <div class="free-shipping">
        <div>
          <h2>Free delivery</h2>
          <p>Purchases over $100 will be sent for free</p>
        </div>
        <img src="~/assets/pictures/Free-shipping.png" alt="" />
      </div>
      <div class="d-flex gap-lg-5 my-5 flex-column flex-lg-row">
        <div class="w-100">
          <div class="v-input">
            <label for="address">Your Address</label>
            <input type="text" id="address" v-model="address" placeholder="Please enter your adress here..." />
          </div>
          <div class="v-input">
            <label for="phone">Phone Num</label>
            <input type="text" id="phone" v-model="phonenum" placeholder="Please enter your phone number here..." />
          </div>
          <div class="v-input">
            <label for="coupon">COUPON Code</label>
            <input type="text" id="coupon" v-model="cupon_code" placeholder="Enter your coupon if you have one." />
            <button @click="Apply()">APPLY COUPON</button>
          </div>
        </div>
        <div class="cart-total">
          <h3 class="border-bottom">CART TOTAL</h3>
          <div class="d-flex align-items-center justify-content-between border-bottom py-3">
            <span>SUBTOTAL</span>
            <strong>${{ sub_total_price }}</strong>
          </div>

          <div class="d-flex align-items-center justify-content-between border-bottom py-3">
            <span>SHIPPING</span>
            <form class="selection">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="free" id="free" value="free" :disabled="total_price < 100 ? true : false" :checked="total_price >= 100 ? true : false"/>
                <label class="form-check-label" for="free"> Free shipping </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="local" id="local" value="local" :disabled="total_price > 100 ? true : false" :checked="total_price >= 100 ? false : true"/>
                <label class="form-check-label" for="local"> Local pickup </label>
              </div>
            </form>
          </div>

          <div class="d-flex align-items-center justify-content-between border-bottom py-3">
            <span>TOTAL</span>
            <strong>${{ final_total_price }}</strong>
          </div>
          <div class="d-flex justify-content-end">
            <button @click="SetData()">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductScore from "~/components/ProductScore";
import SavedBox from "~/components/SavedBox";
import ProductItemBox from "~/components/ProductItemBox.vue";
import Billing from "~/components/Billing.vue";

import global from "@/mixins/global";

import {mapState, mapMutations, mapActions} from "vuex";

export default {
  name: "index",
  components: { ProductItemBox, SavedBox, ProductScore, Billing },
  layout: "profile",
  mixins: [global],

  data() {
    return {
      title: "Lips care Products",
      address: "",
      phonenum: "",
      cupon_code: "",
      shipping: "",
      total_price: 0,
      count: [],
      show: false,
      shop_data: {}
    };
  },

  mounted() {
    this.cupon_code = this.$cookiz.get('cupon_code')
    this.UpdateCart(this.total_price)
  },

  computed: {
    ...mapState(['profile', 'products', 'trending_discount', 'sub_total_price', 'user']),

    data() {
      var data = []
      for (let i = 0; i < this.products.length; i++) {
        for (let j = 0; j < this.profile.cart.length; j++) {
          if(this.profile.cart[j].acf.productid == this.products[i].id) data.push(this.products[i])
        }
      }
      return data
    },

    discount() {
      return this.trending_discount
    },

    final_total_price() {
      if (this.sub_total_price >= 100) {
        const wage = this.sub_total_price - (this.sub_total_price * ((100 - 6) / 100))
        return (this.sub_total_price + wage).toFixed(0)
      } else {
        const wage1 = this.sub_total_price - (this.sub_total_price * ((100 - 6) / 100))
        const wage2 = this.sub_total_price - (this.sub_total_price * ((100 - 10) / 100))
        const total_wage = wage1 + wage2
        return (this.sub_total_price + total_wage).toFixed(0)
      }
    }
  },

  methods: {
    ...mapMutations(['UpdateCart', 'ApplyCupon']),
    ...mapActions(['CheckoutCart']),

    UpdatePrice(price) {
      this.total_price += price
    },

    GetCount(price) {
      this.count.push(price)
    },

    EditCount({i, count}) {
      this.count[i] = count
    },

    IncreasePrice(price) {
      this.total_price += price
    },

    DecreasePrice(price) {
      this.total_price -= price
    },

    Update() {
      this.UpdateCart(this.total_price)
    },

    Apply() {
      this.ApplyCupon(this.cupon_code)
      this.UpdateCart(this.OffPrice(this.total_price, this.discount))
    },

    SetData() {
      for (let i = 0; i < this.data.length; i++) {
        const data = {
          status: 'publish',
          acf: {
            product_title: this.data[i].acf.productname,
            product_price: this.data[i].acf.productprice,
            productimage: this.data[i].acf.productimage,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString().split(':').slice(0, 2).join(':'),
            orderstatus: 'pending',
            discount: this.discount,
            offprice: this.OffPrice(this.data[i].acf.productprice * this.count[i], this.discount),
            count: this.count[i],
            address: this.address,
            phonenumber: this.phonenum
          }
        }

        this.shop_data = data

        this.show = true
      }
    },

    Checkout(data) {
      this.shop_data.acf.firstname = data.first_name
      this.shop_data.acf.lastname = data.last_name
      this.shop_data.acf.company = data.company
      this.shop_data.acf.email = data.email
      this.shop_data.acf.notes = data.notes
      this.shop_data.acf.payment = data.payment

      this.CheckoutCart(this.shop_data)
    }
  }
};
</script>

<style scoped>
.PageBkg {
  background-image: url("~assets/pictures/PageBack.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
.free-shipping {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 32px;
  border-radius: 16px;
  box-shadow: 0 0 10px 4px rgba(233, 157, 123, 0.63);
  background: white;
}
.free-shipping h2 {
  color: #055452;
}
.free-shipping img {
  width: 180px;
}
.link {
  appearance: none;
  color: #055452;
  text-decoration: none;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #055452;
  border-radius: 24px;
}
.btn span {
  padding-right: 10px;
  text-transform: capitalize;
}
.v-input {
  width: 100%;
  margin: 28px 0;
  display: flex;
  flex-direction: column;
  color: #231942;
}
.v-input label {
  margin-bottom: 12px;
}
.v-input input {
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #c6c6c6;
}
.v-input button {
  font-size: 14px;
  width: 200px;
  margin: 14px 0;
  border-radius: 8px;
  padding: 10px;
  background: white;
  border: 1px solid #c6c6c6;
}
.cart-total {
  width: 100%;
  margin: 28px 0;
  border-radius: 8px;
  padding: 20px 28px;
  background: white;
  box-shadow: 0 0 5px 2px rgb(221, 221, 221);
}
.cart-total h3 {
  font-size: 24px;
  font-weight: 400;
  color: #231942;
  padding: 10px 0;
}
.cart-total strong {
  color: #231942;
  font-size: 20px;
  font-weight: 600;
}
.cart-total button {
  color: white;
  border: 0;
  padding: 20px 32px;
  margin-top: 20px;
  border-radius: 10px;
  background: #e99d7b;
}
.cart-total .selection .form-check {
  direction: ltr;
  display: flex;
  gap: 30px;
  padding-bottom: 10px;
}
.cart-total .selection .form-check-input:checked {
  border-color: #e99d7b;
}
.cart-total .selection .form-check-input:checked::after {
  background-color: #e99d7b;
  border-color: #eee;
}
</style>