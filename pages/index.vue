<template>
  <div class="BodyBackground">
    <!--- navigation section -->
    <TheHeader />
    <!-- slider section -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
              <img src="~/assets/pictures/sliderback.jpg" class="w-100" alt="">
          </div>
        </div>
      </div>
    </section>

    <!-- slider text section -->
    <div class="container">
      <div class="row">
        <div class="col-lg-4 text-white">
          <p class="SliderTxt">HEALTHY CARE</p>
          <p class="SliderDesc">
            Kandaka Company is proud to provide its cosmetic products with the latest technology methods to its consumers.
          </p>
          <button type="button" class="btn btn-warning SliderBtn">shop now</button>
        </div>
        <div class="col-lg-8 text-center">
        </div>
      </div>
    </div>

    <!-- product categorie section -->
    <section>
    <div class="container px-lg-5 pb-5 px-5 pt-5">
      <div class="container px-lg-5 pt-3">
        <div class="row">
          <div class="col-lg">
            <img src="~/assets/pictures/categorie1.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Hair Care</p>
          </div>
          <div class="col-lg">
            <img src="~/assets/pictures/categorie2.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Up Care</p>
          </div>
          <div class="col-lg">
            <img src="~/assets/pictures/categorie3.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Skin Care</p>
          </div>
          <div class="col-lg">
            <img src="~/assets/pictures/categorie4.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Accessories</p>
          </div>
          <div class="col-lg">
            <img src="~/assets/pictures/categorie5.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Perfume</p>
          </div>
        </div>
      </div>
    </div>
    </section>

    <!-- off products section -->
    <section class="offbackground">
    <div class="container">
      <div class="row">
          <div class="col-lg-4 text-start">
          <img class="offimg" src="~/assets/pictures/offimg.svg" alt="">
        </div>       
         <div class="col-lg-8 OffCarousel">
                <split-carousel display-amount="3" :item-width="240" :height="320">
                  <split-carousel-item>
                    <img src="~/assets/pictures/categorie1.png" class="w-100" alt="">
                  </split-carousel-item>
                     <split-carousel-item>
                    <img src="~/assets/pictures/categorie2.png" class="w-100" alt="">
                  </split-carousel-item> 
                    <split-carousel-item>
                    <img src="~/assets/pictures/categorie3.png" class="w-100" alt="">
                  </split-carousel-item>   
                  <split-carousel-item>
                    <img src="~/assets/pictures/categorie4.png" class="w-100" alt="">
                  </split-carousel-item>  
                   <split-carousel-item>
                    <img src="~/assets/pictures/categorie5.png" class="w-100" alt="">
                  </split-carousel-item> 
                </split-carousel>
        </div>
      </div>
    </div>
    </section>
    <!-- top products section -->
    <section class="py-lg-5">
      <div class="container py-lg-5">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p class="hr TopProducts text-dark">
              <span class="toptextback">
                Top Products
              </span>
            </p>
          </div>
          <!-- top products text -->
          <p class="text-center py-5 text-muted">
            List of the newest and best-selling cosmetic <br> products of our company
          </p>
                <split-carousel display-amount="4" :item-width="285" :height="320">
                  <split-carousel-item>
                    <img src="~/assets/pictures/categorie1.png" class="w-100" alt="">
                  </split-carousel-item>
                     <split-carousel-item>
                    <img src="~/assets/pictures/categorie2.png" class="w-100" alt="">
                  </split-carousel-item> 
                    <split-carousel-item>
                    <img src="~/assets/pictures/categorie3.png" class="w-100" alt="">
                  </split-carousel-item>   
                  <split-carousel-item>
                    <img src="~/assets/pictures/categorie4.png" class="w-100" alt="">
                  </split-carousel-item>  
                   <split-carousel-item>
                    <img src="~/assets/pictures/categorie5.png" class="w-100" alt="">
                  </split-carousel-item> 
                </split-carousel>
        </div>
      </div>
    </section>
    <!-- best products section -->
        <!-- top products section -->
    <section class="py-lg-5">
      <div class="container py-lg-5">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p class="hr text-dark">
              <span class="BestProducts">
                Best Products
              </span>
            </p>
          </div>
          <!-- top products text -->
          <p class="text-center py-5 text-muted">
            List of the newest and best-selling cosmetic <br> products of our company
          </p>
                <split-carousel display-amount="4" :item-width="285" :height="320">
                  <split-carousel-item>
                    <img src="~/assets/pictures/categorie1.png" class="w-100" alt="">
                  </split-carousel-item>
                     <split-carousel-item>
                    <img src="~/assets/pictures/categorie2.png" class="w-100" alt="">
                  </split-carousel-item> 
                    <split-carousel-item>
                    <img src="~/assets/pictures/categorie3.png" class="w-100" alt="">
                  </split-carousel-item>   
                  <split-carousel-item>
                    <img src="~/assets/pictures/categorie4.png" class="w-100" alt="">
                  </split-carousel-item>  
                   <split-carousel-item>
                    <img src="~/assets/pictures/categorie5.png" class="w-100" alt="">
                  </split-carousel-item> 
                </split-carousel>
        </div>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script>
/* 
import axios from "axios"; 
*/
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";
export default {
   head: {
    titleTemplate: 'Kandaka Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=1024, initial-scale=1' },
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'description about kandaka' }
    ]
  },
  components: {
    TheHeader,
    TheFooter,
    SplitCarousel,
    SplitCarouselItem
  },
  /*
  computed: {
    FltCat: function () {
      return this.categories.filter(
        (item) =>
          item.name !== "سایر محصولات" && item.name !== "فلکه سیم ایتالیا"
      );
    },
  },
  */
  /*
  asyncData(context) {
    return axios
      .get("https://lavazemesakhteman.com/wp-json/wc/v3/products/categories", {
        params: {
          per_page: 100,
          page: 1,
        },
      })
      .then((res) => {
        return {
          categories: res.data,
        };
      })
      .catch((e) => context.error(e));
  },
  */
};

</script>


<style scoped>

</style>
