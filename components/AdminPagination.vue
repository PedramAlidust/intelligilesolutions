<template>
  <div class="mt-2">
    <nav aria-label="...">
      <ul class="pagination">
        <a class="page-link" href="#">Previous</a>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-link {
    color: #4d4f5c;
    padding: 8px 15px;
}

.page-link:focus {
   background-color:  #055452;
   color: #fff;
   box-shadow: none;
}
</style>