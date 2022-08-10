<template>
  <div class="py-md-4 px-4 px-md-5 mb-5 bord">
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
    <h3 class="pb-2">Supports</h3>
    <div class="d-flex gap-3 mb-4 flex-wrap">
      <pagination :pages="Pagination(data, pg_show).pages" :select="Pagination(data, pg_show).page"/>
      <div class="button-add" @click="show=true">Add new Ticket</div>
    </div>
    <TicketBox v-for="item in Pagination(data, pg_show).data" :key="item.id" :data="item" :avatar="user.avatar_urls[96]"/>
    <NewTicketBox :open="show" @close="show=false"/>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import TicketBox from "@/components/TicketBox";
import NewTicketBox from "@/components/NewTicketBox";

import {mapState} from "vuex";

import global from "@/mixins/global";

export default {
  name: "index",
  components: {NewTicketBox, TicketBox, Pagination},
  layout: "profile",
  mixins: [global],

  data() {
    return {
      pg_show: 6,
      show: false,
    }
  },

  computed: {
    ...mapState(['profile', 'user']),

    data() {
      return this.profile.tickets
    }
  },
}
</script>

<style scoped>
.bord {
  border: none;
  border-radius: 16px;
}

@media screen and (min-width: 768px) {
  .bord {
    border: 1px solid #dee2e6;
  }
}

.button-add {
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 14px;
  color: white;
  background-color: #e99d7b;
  border: none;
  border-radius: 6px;
  padding: 4px 20px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.button-add:hover {
  background-color: #e8926a
}
</style>