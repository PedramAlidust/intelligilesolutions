<template>
  <div class="BodyBackground">
    <!--- navigation section -->
    <TheHeader />
    <!-- slider section Desktop -->
  <section class="d-none d-md-block d-lg-block mt-md-5">
        <div class="container">
          <div class="row">
            <div class="col-12">
                <img src="~/assets/pictures/sliderback.jpg" class="w-100" alt="">
            </div>
          </div>
        </div>
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
  </section>
  <!-- slider section mobile -->
    <div class="container g-lg-none d-md-none text-center mt-5 ">
        <img src="~/assets/pictures/menuslider2.svg" class="w-100 MobileSliderGreen" alt="slider">
        <img src="~/assets/pictures/menuslider.png" class="w-100 MobileSliderPic" alt="slider">
        <p class="MobileSliderTxtTitle text-white text-end px-5">HEALTHY CARE</p>
        <p class="MobileSliderTxtDesc text-white text-end px-5">
          Kandaka Company is proud to provide its 
          cosmetic products with the latest technology 
          methods to its consumers.
        </p>
      <button type="button" class="btn btn-warning SliderMobileBtn">shop now</button>
    </div>
    <!-- product categorie section -->
    <!-- Desktop version -->
  <section class="d-none d-lg-block">
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

    <!-- Mobile And Tablet version -->
    <section class="d-lg-none py-5">
    <div class="container px-lg-5 px-5 pt-5">
      <div class="container px-lg-5 pt-3">
        <div class="row">
          <div class="col">
            <img src="~/assets/pictures/categorie1.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Hair Care</p>
          </div>
          <div class="col">
            <img src="~/assets/pictures/categorie2.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Up Care</p>
          </div>
          <div class="col">
            <img src="~/assets/pictures/categorie3.png" alt="" class="w-100">
            <p class="CategorieTxt text-center mt-3">Skin Care</p>
          </div>
        </div>
      </div>
    </div>
    </section>

  <!-- off products section -->
    <section class="offbackground">
    <div class="container">
      <div class="row">
          <div class="col-lg-4">
            <p class="OffTxt">Trending Discounts</p>
            <p class="OffDesc">
              The best discount code for 
              the customers of the cosmetics company.
            </p>
            <!-- slider arrows -->
            <div class="d-flex flex-row align-items-center">
                <img class="OffLeftArrow ArrowsPosition px-4" src="~/assets/pictures/LeftArrow.svg" alt="LeftArrow">
                <img class="OffRightArrow"  src="~/assets/pictures/RightArrow.svg" alt="RightArrow">
            </div>
          <img class="offimg d-none d-lg-block" src="~/assets/pictures/offimg.svg" alt="">
        </div>       
         <div class="col-lg-8 OffCarousel">
              <div class="OffProdSlider">
                   <!-- Off Slider Item -->
                  <div class="container">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner2"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner3"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner4"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>

                    <!-- Off Slider Item -->
                  <div class="container">
                      <!-- discount baner section -->
                        <div class="container-full OffBaner"></div>
                      <!-- off Card look section -->
                      <div class="container-full OffCard">
                        <p class="text-center OffCardTxt">
                          Get $ 50.00 off your next full price purchase!
                        </p>
                        <hr>
                       <!-- card look price and button -->
                       <div class="d-flex flex-row align-items-center justify-content-between">
                         <p class="CardPrice">$ 50.00</p>
                          <button type="button" class="CardButton btn btn-sm">Get Offer</button>
                        </div>       
                      </div>
                   </div>
       
              </div>
        </div>
      </div>
    </div>
    </section>
    <!-- top products section -->
    <section class="py-lg-5 mt-5 mt-lg-0 pt-5 pt-lg-0">
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
              <div class="TopProdSlider">
                <div>
                  <img src="~/assets/pictures/categorie1.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie2.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie3.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie4.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie5.png" class="w-100" alt="">
                </div>
              </div>
        </div>
      </div>
    </section>
   <!-- best products section -->
    <section class="py-lg-5 mt-lg-0 pt-5 pt-lg-0">
      <div class="container py-lg-5">
        <div class="row">
          <div class="col-lg-12 text-center">
            <p class="hr text-dark">
              <span class="BestProducts">
                Best Products
              </span>
            </p>
          </div>
          <!-- Best products text -->
          <p class="text-center py-5 text-muted">
            List of the newest and best-selling cosmetic <br> products of our company
          </p>
              <div class="BestProdSlider">
                <div>
                  <img src="~/assets/pictures/categorie1.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie2.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie3.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie4.png" class="w-100" alt="">
                </div>
                <div>
                  <img src="~/assets/pictures/categorie5.png" class="w-100" alt="">
                </div>
              </div>
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
import TheHeader from "@/components/Navigation/TheHeader";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },

  methods: {}, 


  mounted() {

    $(function () {
      // top products slider
      $('.TopProdSlider').slick({
        arrows: false,
        infinite: false,
        slidesToScroll: 4,
        slidesToShow: 4,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
        ],
      })
      
      // Best products slider
    $('.BestProdSlider').slick({
        dots: true,
        appendDots: '.slider-dots',
        arrows: false,
        infinite: false,
        slidesToScroll: 4,
        slidesToShow: 4,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        nextArrow: $(".BestNext"),
        prevArrow: $(".BestPrev"),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
        ],
      })


      //Off Products slider
         $('.OffProdSlider').slick({
        dots: true,
        appendDots: '.slider-dots',
        arrows: true,
        infinite: false,
        slidesToScroll: 3,
        slidesToShow: 3,
        accessibility: true,
        variableWidth: false,
        focusOnSelect: false,
        centerMode: false,
        nextArrow: $(".OffLeftArrow"),
        prevArrow: $(".OffRightArrow"),
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 2,
              slidesToShow: 2,
            },
          },
        ],
      })

    })
  },

};



</script>


<style scoped>

</style>
