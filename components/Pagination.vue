<template>
  <div class="d-flex gap-3">
    <a :href="`?page=${parseInt(select) - 1}`" class="pg" v-if="select > 1">
      <i class="bi bi-chevron-left"/>
    </a>
    <a :href="`?page=${item}`" class="pg" v-for="(item, index) in pages" :class="{'select':select==item}" :key="index">{{ item }}</a>
    <a :href="`?page=${parseInt(select) + 1}`" class="pg" v-if="select < pages">
      <i class="bi bi-chevron-right"/>
    </a>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pages', 'select']
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.pg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: black;
  background-color: #f1f1f1;
  border-radius: 8px;
  cursor: pointer;
}

.pg.select {
  color: white !important;
  background-color: #055452 !important;
}
</style>