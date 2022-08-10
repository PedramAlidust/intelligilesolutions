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
    <h3 class="pb-2">Comments</h3>
    <comment-box v-for="item in this.Pagination(this.data, this.show).data" :key="item.id" :data="item"/>
    <pagination :pages="this.Pagination(this.data, this.show).pages" :select="this.Pagination(this.data, this.show).page"/>
  </div>

</template>

<script>
import CommentBox from "~/components/CommentBox";
import Pagination from "~/components/Pagination";

import {mapState} from "vuex";

import global from "~/mixins/global";

export default {
  name: "index",
  components: {CommentBox, Pagination},
  layout: "profile",
  mixins: [global],

  data() {
    return {
      show: 5,
    }
  },

  computed: {
    ...mapState(['profile', 'user']),

    data() {
      return this.profile.comments
    },
  }
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
</style>