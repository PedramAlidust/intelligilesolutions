<template>
  <div class="px-4 px-sm-0">
    <Portal to="under-header">
      <div class="container-full d-lg-none py-2 subNavPage px-4">
        <div class="row w-100 justify-content-between g-0">
          <nuxt-link class="col d-flex align-items-center gap-3 text-dark text-decoration-none" to="/profile">
            <img src="~/assets/svg/angle-small-right.svg" alt="">
            <span>Back</span>
          </nuxt-link>
          <!--  Actions are here  -->
          <a href="#" class="col-auto g-0 d-flex align-items-center gap-3 text-dark text-decoration-none">
            <img src="~/assets/svg/sort.svg" alt="">
            <span>Sort</span>
          </a>
        </div>
      </div>
    </Portal>

    <!--  Title selectors  -->
    <div class="d-flex gap-4 mb-2">
      <h3 class="order" :class="{'selected':state==='deliverd'}" @click="state='deliverd'">Delivered</h3>
      <h3 class="order" :class="{'selected':state==='pending'}" @click="state='pending'">Pending</h3>
    </div>

    <div class="container g-0 mb-10">
      <div class="row row-cols-1 gap-3">
        <OrderBox :state="state" v-for="(items, i) in group_data" :data="items"/>
      </div>
    </div>
  </div>
</template>

<script>
import OrderBox from "@/components/OrderBox";

import {mapState} from "vuex";

export default {
  name: "index",
  components: {OrderBox},
  layout: "profile",
  data() {
    return {
      state: 'deliverd',
      status: '',
    }
  },

  computed: {
    ...mapState(['profile']),

    data() {
      return this.profile.orders.filter(order => order.acf.orderstatus == this.state)
    },

    group_data() {
      const groups = this.data.reduce((groups, item) => {
        const date = item.acf.date;
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(item);
        return groups;
      }, {});

      const groupArrays = Object.keys(groups).map(date => {
        return groups[date];
      });
      return groupArrays
    },
  },
}
</script>

<style scoped>
.order {
  cursor: pointer;
  padding-bottom: 8px;
}

.selected {
  color: #e99d7b;
  border-bottom: 3px solid #e99d7b;
}
</style>