<template>
<div>
<TheHeader />  

<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <img src="~/assets/pictures/404error.svg" class="w-100" alt="">
    </div>
  </div>
</div>
    
<TheFooter />
</div> 
</template>


<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";


export default {
    components: {
    TheHeader,
    TheFooter
  },
}
</script>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
