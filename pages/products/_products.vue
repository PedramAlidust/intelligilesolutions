<template>
  <div class="PageBkg">
    <TheHeader />
    <div class="">
      <div class="container px-4 px-md-4 px-lg-4 pt-4">
        <div class="d-flex flex-row">
          <p class="BroadHome">Home</p>
          <p class="px-2">/</p>
          <p class="BroadSub">Products</p>
          <p class="px-2">/</p>
          <p class="BroadSub">Details</p>
        </div>
        <div>
          <h2 style="font-weight: 600">{{ $route.params.product }}</h2>
        </div>
      </div>

      <div
          class="d-flex flex-column flex-md-row flex-lg-row container"
          style="margin-top: 100px"
      >
        <div class="d-flex flex-column flex-md-row flex-lg-row">
          <div class="d-flex flex-row flex-md-column flex-lg-column">
            <img
                v-for="img in imgs"
                :src="require('~/assets/pictures/' + img)"
                class="mt-2"
                alt=""
                style="width: 80px; height: 80px; border-radius: 999px"
                @click="SelectImage(img)"
            />
          </div>
          <!--Slider-->
          <div class="ms-md-4 ms-lg-5" style="width: max-content">
            <img
                :src="require('~/assets/pictures/' + img_selected)"
                class="mt-2 w-100"
                style="margin-left: -10px"
                alt=""
            />
          </div>
        </div>
        <div class="px-md-4 px-lg-4 mt-4 mt-md-0 mt-lg-0">
          <h4>Beauty Amplifier Eye Shadow Primer</h4>
          <div class="d-flex align-items-center">
            <i class="bi bi-star-fill star"></i>
            <i class="bi bi-star-fill star"></i>
            <i class="bi bi-star-fill star"></i>
            <i class="bi bi-star-fill star"></i>
            <i class="bi bi-star-fill star"></i>
            <p class="mb-0 ms-2" style="color: #686868">
              (150 Customer reviews)
            </p>
          </div>
          <p class="mt-2">
            Get the most out of your makeup with SEPHORA COLLECTION’s line of
            prepping, priming, and setting products. Our Beauty Amplifiers are
            designed to perfect your look by delivering a flawless canvas for
            long-wearing makeup in unique, modern formulas
          </p>
          <div v-if="data.acf.producttype == 'lipcare'">Lip Care</div>
          <div class="d-flex align-items-center mt-5" v-else>
            <p class="mb-0">Weight:</p>
            <button
                class="border bg-transparent rounded-pill px-2 py-1"
                :class="{'selected': weight == 10}"
                style="margin-left: 30px" @click="weight = 10"
            >
              10ml
            </button>
            <button class="border bg-transparent rounded-pill mx-1 px-2 py-1":class="{'selected': weight == 20}" @click="weight = 20">
              20ml
            </button>
            <button class="border bg-transparent rounded-pill mx-1 px-2 py-1":class="{'selected': weight == 30}" @click="weight = 30">
              30ml
            </button>
            <button class="border bg-transparent rounded-pill mx-1 px-2 py-1":class="{'selected': weight == 100}" @click="weight = 100">
              100ml
            </button>
          </div>
          <div class="d-flex align-items-center mt-4">
            <p class="mb-0">Quantity:</p>
            <div
                class="border bg-transparent rounded-pill py-2 px-4 d-flex align-items-center gap-2"
                style="margin-left: 30px"
            >
              <button class="button" style="font-size: 18px;" @click="Decrease()"><i class="bi bi-dash"></i></button>
              <span>{{ count }}</span>
              <button class="button" style="font-size: 18px;" @click="Increase()"><i class="bi bi-plus"></i></button>
            </div>
          </div>
          <div class="d-flex align-items-center mt-3">
            <h1 style="color: #055452; font-weight: 700">$34.54</h1>
            <button
                class="rounded-circle border py-1 px-2"
                style="background-color: white; margin-left: 30px"
                @click="Saved()"
            >
              <i class="bi bi-heart-fill" style="color: #e99d7b"></i>
            </button>
            <button
                class="rounded-pill border-0 py-2 px-3 text-white"
                style="
                background-color: #e99d7b;
                margin-left: 30px;
                color: #055452;
              "
                @click="Add"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <!--Accoding-->
      <!-- Accordion Section -->
      <div class="container py-5 px-3">
        <div class="accordion" id="accordionExample">
          <!--Accordion Item -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
              >
                Description
              </button>
            </h2>
            <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Get the most out of your makeup with SEPHORA COLLECTION’s line
                of prepping, priming, and setting products. Our Beauty
                Amplifiers are designed to perfect your look by delivering a
                flawless canvas for long-wearing makeup in unique, modern
                formulas Get the most out of your makeup with SEPHORA
                COLLECTION’s line of prepping, priming, and setting products.
                Our Beauty Amplifiers are designed to perfect your look by
                delivering a flawless canvas for long-wearing makeup in unique,
                modern formulas Get the most out of your makeup with SEPHORA
                COLLECTION’s line of prepping, priming, and setting products.
                Our Beauty Amplifiers are designed to perfect your look by
                delivering a flawless canvas for long-wearing makeup in unique,
                modern formulas
              </div>
            </div>
          </div>
          <!--Accordion Item -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
              >
                How to Use ?
              </button>
            </h2>
            <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Get the most out of your makeup with SEPHORA COLLECTION’s line
                of prepping, priming, and setting products. Our Beauty
                Amplifiers are designed to perfect your look by delivering a
                flawless canvas for long-wearing makeup in unique, modern
                formulas Get the most out of your makeup with SEPHORA
                COLLECTION’s line of prepping, priming, and setting products.
                Our Beauty Amplifiers are designed to perfect your look by
                delivering a flawless canvas for long-wearing makeup in unique,
                modern formulas Get the most out of your makeup with SEPHORA
                COLLECTION’s line of prepping, priming, and setting products.
                Our Beauty Amplifiers are designed to perfect your look by
                delivering a flawless canvas for long-wearing makeup in unique,
                modern formulas
              </div>
            </div>
          </div>
          <!--Accordion Item -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
              >
                Why it's cult
              </button>
            </h2>
            <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                if your order is returned to us, you will be issued a store
                credit in the full amount of your order. Kandaka Collections is
                not responsible for any shipment issues caused by USPS. NO
                REFUNDS. NO EXCEPTIONS.
              </div>
            </div>
          </div>
          <!--Accordion Item -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
              >
                Product details
              </button>
            </h2>
            <div
                id="collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="d-none d-md-flex d-lg-flex border">
                  <table>
                    <tr
                        class="d-flex flex-column rounded-1 px-4"
                        style="background-color: #e5e5e5"
                    >
                      <th class="py-4 fs-6">Ingrediebts:</th>
                      <th class="py-4 fs-6">Recommended Usage:</th>
                    </tr>
                  </table>
                  <table>
                    <tr class="d-flex flex-column ps-4">
                      <th
                          class="py-4 fs-6"
                          style="border-bottom: 1px solid #e5e5e5"
                      >
                        Organic MCT Oil, CBD Isolate
                      </th>
                      <th
                          class="py-4 fs-6"
                          style="border-bottom: 1px solid #e5e5e5"
                      >
                        Once a day, place a full dropper under your tongue and
                        hold for a minute. Repeat as necessary
                      </th>
                    </tr>
                  </table>
                </div>
                <div class="d-md-none d-lg-none">
                  <table class="w-100">
                    <tr class="d-flex flex-column w-100">
                      <th
                          class="px-3 py-3 rounded-1 mt-2"
                          style="background-color: #e5e5e5"
                      >
                        Ingrediebts:
                      </th>
                      <th
                          class="py-4 px-3"
                          style="border-bottom: 1px solid #e5e5e5"
                      >
                        Organic MCT Oil, CBD Isolate
                      </th>
                      <th
                          class="px-3 py-3 rounded-1 mt-2"
                          style="background-color: #e5e5e5"
                      >
                        Recommended Usage:
                      </th>
                      <th class="py-4 px-3">
                        Once a day, place a full dropper under your tongue and
                        hold for a minute. Repeat as necessary
                      </th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!--Accordion Item -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
              <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
              >
                CUSTOMER REVIEWS (150)
              </button>
            </h2>
            <div
                id="collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div
                    class="d-flex flex-column flex-md-row flex-lg-row container"
                >
                  <div>
                    <div class="d-flex fs-3">
                      <i class="bi bi-star-fill star"></i>
                      <i class="bi bi-star-fill star"></i>
                      <i class="bi bi-star-fill star"></i>
                      <i class="bi bi-star-fill star"></i>
                      <i class="bi bi-star-fill star"></i>
                      <p class="mb-0 ms-2 fs-4">(4.5)</p>
                    </div>
                    <div class="d-flex flex-column mt-5">
                      <div class="d-flex align-items-center fs-5">
                        <p class="mb-0">(5)</p>
                        <i class="bi bi-star-fill star ms-2"></i>
                        <button
                            class="border-0 rounded-1 ms-2"
                            style="
                            background-color: #055452;
                            height: 30px;
                            width: 150px;
                          "
                        ></button>
                      </div>
                      <div class="d-flex align-items-center fs-5 mt-2">
                        <p class="mb-0">(4)</p>
                        <i class="bi bi-star-fill star ms-2"></i>
                        <button
                            class="border-0 rounded-1 ms-2"
                            style="
                            background-color: #055452;
                            height: 30px;
                            width: 50px;
                          "
                        ></button>
                      </div>
                      <div class="d-flex align-items-center fs-5 mt-2">
                        <p class="mb-0">(3)</p>
                        <i class="bi bi-star-fill star ms-2"></i>
                        <button
                            class="border-0 rounded-1 ms-2"
                            style="
                            background-color: #055452;
                            height: 30px;
                            width: 75px;
                          "
                        ></button>
                      </div>
                      <div class="d-flex align-items-center fs-5 mt-2">
                        <p class="mb-0">(2)</p>
                        <i class="bi bi-star-fill star ms-2"></i>
                        <button
                            class="border-0 rounded-1 ms-2"
                            style="
                            background-color: #055452;
                            height: 30px;
                            width: 25px;
                          "
                        ></button>
                      </div>
                      <div class="d-flex align-items-center fs-5 mt-2">
                        <p class="mb-0">(1)</p>
                        <i class="bi bi-star-fill star ms-2"></i>
                        <button
                            class="border-0 rounded-1 ms-2"
                            style="
                            background-color: #055452;
                            height: 30px;
                            width: 80px;
                          "
                        ></button>
                      </div>
                    </div>
                  </div>
                  <div class="px-lg-5 mt-4 mt-md-0 mt-lg-0">
                    <div class="d-flex flex-column px-3 py-2 rounded-1">
                      <div>
                        <p
                            style="
                            color: #055452;
                            font-weight: 700;
                            font-size: 20px;
                          "
                        >
                          TOP CUSTOMER REVIEWS
                        </p>
                      </div>
                      <div
                          class="d-flex flex-column"
                          style="border-bottom: 1px solid #e5e5e5"
                      >
                        <p class="mb-0" style="color: #055452">Dawn Fowler</p>
                        <div
                            class="w-100 d-flex flex-column flex-md-row justify-content-between mt-1"
                        >
                          <div>
                            <i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i>
                          </div>
                          <p style="color: #b2b2b2">
                            September30,2022 at 10:56 am
                          </p>
                        </div>
                        <p class="mb-0">
                          I really had to prep my face to make it super
                          hydrated. I found the coverage better with a brush but
                          it oxidised compared to a blender. Overall, it has
                          good coverage
                        </p>
                        <p
                            class="mt-2"
                            style="
                            border-bottom: 1px solid #b2b2b2;
                            width: fit-content;
                          "
                        >
                          Replay
                        </p>
                      </div>
                      <div class="d-flex flex-column mt-4">
                        <p class="mb-0 fs-4" style="font-weight: 600">
                          Add Review
                        </p>
                        <div
                            class="d-flex flex-column flex-md-row flex-lg-row mt-4"
                        >
                          <div class="d-flex flex-column w-100">
                            <label class="fs-6" style="font-weight: 600"
                            >Add Name</label
                            >
                            <input
                                type="text"
                                class="py-2 px-4 mt-1 rounded-pill border"
                                placeholder="Jack Dorsi"
                            />
                          </div>
                          <div
                              class="d-flex flex-column w-100 mt-3 mt-lg-0 mt-md-0 ms-md-4 ms-lg-4"
                          >
                            <label class="fs-6" style="font-weight: 600"
                            >Email</label
                            >
                            <input
                                type="text"
                                class="py-2 px-4 mt-1 rounded-pill border"
                                placeholder="JackDorsi@gmail.com"
                            />
                          </div>
                        </div>
                        <div class="d-flex flex-column w-100 mt-4">
                          <label class="fs-6" style="font-weight: 600"
                          >Message</label
                          >
                          <textarea
                              type="text"
                              class="py-2 px-4 mt-1 border"
                              style="height: 100px; border-radius: 15px"
                              placeholder="JackDorsi@gmail.com"
                          />
                        </div>
                        <div class="mt-3 fs-6 fw-2">
                          <i class="bi bi-star-fill star"></i>
                          <i class="bi bi-star-fill star"></i>
                          <i class="bi bi-star-fill star"></i>
                          <i class="bi bi-star-fill star"></i>
                          <i class="bi bi-star-fill star"></i>
                        </div>
                        <button
                            class="px-4 py-2 bg-transparent rounded-pill mt-3"
                            style="border: 1px solid #e89c7a; width: fit-content"
                        >
                          Send a Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Accordion Item -->
          <div class="accordion-item" v-if="data.acf.producttype == 'lipcare'">
            <h2 class="accordion-header" id="headingSeven">
              <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
              >
                Flavors
              </button>
            </h2>
            <div
                id="collapseSeven"
                class="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div class="d-none d-md-flex d-lg-flex">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheSubpageHeader";
import TheFooter from "@/components/TheFooter";
import {mapActions, mapState} from "vuex";
export default {
  components: {
    TheHeader,
    TheFooter,
  },

  data() {
    return {
      count: 1,
      weight: 10,
      imgs: [
          'ProductOne.jpg',
          'ProductTwo.jpg',
          'ProductThree.jpg',
          'ProductTwo.jpg',
          'ProductThree.jpg'
      ],
      img_selected: 'ProductThree.jpg'
    }
  },

  computed: {
    ...mapState(['products', 'user']),

    data() {
      return this.products.find(product => {
        return product.id == this.$route.params.products
      })
    }
  },

  methods: {
    ...mapActions(['AddToCart', 'SavedProducts']),

    SelectImage(img) {
      this.img_selected = img
    },

    Add() {
      this.$cookiz.set(`count:${this.data.id}`, this.count)
      this.$cookiz.set(`weight:${this.data.id}`, this.weight)
      this.AddToCart({productid: this.$route.params.products, userid: this.user.id})
    },

    Saved() {
      const data = {
        status: "publish",
        acf: {
          product_title: this.data.acf.productname,
          product_price: this.data.acf.productprice,
          productimage: this.data.acf.productimage,
          productstar: 5
        }
      }

      this.SavedProducts(data)
    },

    Increase() {
      if (this.data.acf.productcount > this.count) this.count++
    },

    Decrease() {
      if (1 < this.count) this.count--
    }
  }
};
</script>

<style scoped>
.selected {
  box-shadow: 1px 1px 4px #000;
}
.button {
  background: transparent;
  border: 0;
}
.star {
  color: #ed8a19;
}
.BroadHome {
  color: #055452;
  font-family: "Open Sans";
  font-weight: 600;
  line-height: 1.25;
  font-size: 12pt;
}
.BroadSub {
  color: #055452;
  font-family: "Open Sans";
  font-weight: 600;
  line-height: 1.25;
  font-size: 12pt;
}
KandakaMail {
  color: #055452;
}
.accordion-button {
  color: #055452;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 12pt;
  text-align: left;
}
.accordion-body {
  font-family: "Open Sans";
  font-size: 10pt;
  color: #055452;
}
.accordion-body:first-letter {
  text-transform: uppercase;
}
.accordion-button:not(.collapsed) {
  background-color: #055452;
  color: white;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 12pt;
}
.accordion-button::after {
  margin-right: 0 !important;
  background-image: url("~/assets/pictures/accordion.svg");
}
.FaqDesc {
  font-family: "Open Sans";
  font-size: 10pt;
  line-height: 1.5;
  color: #000;
}
.FaqDesc:first-letter {
  text-transform: uppercase;
}
.faq {
  font-family: "Open Sans";
  font-size: 22pt;
  font-weight: bold;
  color: #000;
  font-size: 16pt;
}
.faq:first-letter {
  text-transform: capitalize;
}
.DescTitle {
  color: #055452;
  font-family: "Open Sans";
  font-size: 14pt;
  font-weight: 600;
}
.DescTitle:first-letter {
  text-transform: capitalize;
}
.Desc {
  font-family: "Open Sans";
  font-size: 11pt;
  color: #707070;
}
.Desc:first-letter {
  text-transform: capitalize;
}
.PageBkg {
  background-image: url("~assets/pictures/PageBack.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
.PageTitle {
  font-family: "Open Sans";
  font-size: 18pt;
  font-weight: 600;
  color: #231942;
  text-transform: capitalize;
}
.PageTitle:first-letter {
  text-transform: capitalize;
}
.PageBkg {
  background-image: url("~assets/pictures/PageBack.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
</style>