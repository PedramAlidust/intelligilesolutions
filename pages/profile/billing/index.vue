<template>
  <div class="position-relative">
    <TheHeader />
    <!-- page broadcrumbs -->
    <section class="PageBkg">
      <div class="container px-4 px-md-4 px-lg-4 pt-4">
        <div class="d-flex flex-row">
          <p class="BroadHome">Home</p>
          <p class="px-2">/</p>
          <p class="BroadSub">About</p>
        </div>
      </div>

      <div class="d-flex flex-column container mt-4 px-4">
        <h3 style="font-weight: 600; color: #231942">Billing Details</h3>
        <div style="border: 1px solid #231942; width: 100px"></div>
      </div>

      <div
        class="w-100 d-none d-md-flex d-lg-flex flex-column flex-md-row flex-lg-row container"
      >
        <div class="container py-5 w-50" style="margin-left: -15px">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Personal Information
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="d-flex">
                    <div class="w-100">
                      <div>
                        <label>First Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="text"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 95%"
                      />
                    </div>
                    <div class="w-100">
                      <div>
                        <label>Last Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="text"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 100%"
                      />
                    </div>
                  </div>
                  <div class="w-100 mt-4">
                    <label class="d-block">Company name (optional)</label>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--Accordion Item -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <div class="d-flex justify-content-between px-3 py-3">
                  <button
                    class="collapsed border-0 bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style="font-size: 12pt; font-weight: 600"
                  >
                    Peyment Method
                  </button>
                  <button
                    class="border-0 bg-transparent"
                    style="font-size: 13px; color: #e99d7b"
                  >
                    Add
                  </button>
                </div>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="d-flex">
                    <div class="w-100">
                      <div>
                        <label>First Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="text"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 95%"
                      />
                    </div>
                    <div class="w-100">
                      <div>
                        <label>Last Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="text"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 100%"
                      />
                    </div>
                  </div>
                  <div class="w-100 mt-4">
                    <label class="d-block">Card Number</label>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                    />
                  </div>
                  <div class="d-flex mt-4">
                    <div class="w-100">
                      <div>
                        <label>First Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="date"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 95%"
                      />
                    </div>
                    <div class="w-100">
                      <div>
                        <label>Last Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="date"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 100%"
                      />
                    </div>
                  </div>
                  <div class="w-100 mt-4">
                    <div>
                      <label>Cvv</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                    />
                  </div>

                  <div class="d-flex mt-4">
                    <button
                      class="border-0 px-4 py-2 rounded-1"
                      style="background-color: #e99d7b; color: #055452"
                    >
                      Add
                    </button>
                    <button
                      @click="cardListStatus = true"
                      class="border-0 px-4 py-2 rounded-1 ms-3"
                      style="color: #055452"
                    >
                      Show Card List
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!--Accordion Item -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <div class="d-flex justify-content-between px-3 py-3">
                  <button
                    class="collapsed border-0 bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style="font-size: 12pt; font-weight: 600"
                  >
                    Address Information
                  </button>
                  <button
                    class="border-0 bg-transparent"
                    style="font-size: 13px; color: #e99d7b"
                  >
                    Use existing address
                  </button>
                </div>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="w-100 mt-4">
                    <div>
                      <label>Country</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="England"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <div>
                      <label>Street address</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="House number abd street name"
                    />
                  </div>
                  <div class="w-100 mt-1">
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Apartment, suite , unit etc. (optional)"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <div>
                      <label>Town / City</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <div>
                      <label>District</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Afghanistan"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <label>Postcode / ZIP (optional)</label>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Afghanistan"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <label>Phone (optional)</label>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Afghanistan"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <div>
                      <label>Email address</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Afghanistan"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <input
                      type="checkbox"
                      class="border rounded-1 px-3 py-2 mt-1 ms-2"
                      placeholder="Afghanistan"
                    />
                    <lable>Ship to a different address?</lable>
                  </div>
                  <div class="w-100 mt-4">
                    <label>Order notes (optional)</label>
                    <textarea
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: #e5e5e5" class="w-50 px-5 py-5 rounded-1">
          <div class="d-flex flex-column container">
            <h4 style="font-weight: 600; color: #231942">Your Order</h4>
            <div style="border: 1px solid #231942; width: 100px"></div>
          </div>
          <div class="d-flex justify-content-between container mt-5 w-100">
            <h5 style="font-weight: 400; color: #231942">Product</h5>
            <h6 style="font-weight: 400; color: #231942">Total</h6>
          </div>

          <div class="mt-2" style="border-bottom: 1px solid #c9c6d1"></div>

          <div class="d-flex justify-content-between container my-3 w-100">
            <h5 style="font-weight: 400; color: #231942">Satin gown × 1</h5>
            <h6 style="font-weight: 400; color: #231942">$ 500</h6>
          </div>
          <div class="d-flex justify-content-between container my-3 w-100">
            <h5 style="font-weight: 400; color: #231942">
              Printed cotton t-shirt × 1
            </h5>
            <h6 style="font-weight: 400; color: #231942">$ 600</h6>
          </div>

          <div class="mt-2" style="border-bottom: 1px solid #c9c6d1"></div>

          <div class="d-flex justify-content-between container my-3 w-100">
            <h5 style="font-weight: 400; color: #231942">Subtotal</h5>
            <h6 style="font-weight: 400; color: #231942">$ 60</h6>
          </div>

          <div class="mt-2" style="border-bottom: 1px solid #c9c6d1"></div>

          <div class="d-flex justify-content-between container mt-3 w-100">
            <h5 style="font-weight: 400; color: #231942">Shipping</h5>
            <h6 style="font-weight: 400; color: #231942">Flat rate: $50</h6>
          </div>
          <div class="mt-2" style="border-bottom: 1px solid #c9c6d1"></div>

          <div class="d-flex justify-content-between container mt-3 w-100">
            <h5 style="font-weight: 400; color: #231942">Total</h5>
            <h6 style="font-weight: 400; color: #231942">$ 1500</h6>
          </div>

          <div class="mt-5 d-flex align-items-center">
            <input type="radio" class="border" />
            <h5 class="ms-2" style="font-weight: 600; color: #231942">
              DIRECT BANK TRANSFER
            </h5>
          </div>

          <div class="mt-2">
            <p class="Desk" style="color: #838383">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>

          <div class="mt-3 d-flex align-items-center">
            <input type="radio" class="border" />
            <h5 class="ms-2" style="font-weight: 600; color: #231942">
              CHECK PAYMENTS
            </h5>
          </div>

          <div class="mt-3 d-flex align-items-center">
            <input type="radio" class="border" />
            <h5 class="ms-2" style="font-weight: 600; color: #231942">
              PAYPAL EXPRESS CHECKOUT
            </h5>
          </div>

          <div class="mt-2">
            <p class="Desk" style="color: #838383">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our
              <strong style="color: #e99d7b">privacy policy</strong>.
            </p>
          </div>

          <div class="mt-4 d-flex align-items-center">
            <input type="checkbox" class="border" />
            <h6 class="ms-2" style="color: #231942">
              I have read and agree to the website terms and conditions
            </h6>
          </div>

          <div class="mt-4">
            <button
              class="w-100 border-0 py-3 rounded-1"
              style="
                background-color: #e99d7b;
                color: #055452;
                font-weight: 600;
              "
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <!--Phone Responsiv-->
      <div
        class="w-100 d-flex d-md-none d-lg-none flex-column flex-md-row flex-lg-row container"
      >
        <div class="container py-5 w-100">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Personal Information
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="d-flex">
                    <div class="w-100">
                      <div>
                        <label>First Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="text"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 95%"
                      />
                    </div>
                    <div class="w-100">
                      <div>
                        <label>Last Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="text"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 100%"
                      />
                    </div>
                  </div>
                  <div class="w-100 mt-4">
                    <label class="d-block">Company name (optional)</label>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!--Accordion Item -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <div class="d-flex justify-content-between px-3 py-3">
                  <button
                    class="collapsed border-0 bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style="font-size: 12pt; font-weight: 600"
                  >
                    Peyment Method
                  </button>
                  <button
                    class="border-0 bg-transparent"
                    style="font-size: 13px; color: #e99d7b"
                  >
                    Add
                  </button>
                </div>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="d-flex">
                    <div class="w-100">
                      <div>
                        <label>First Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="text"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 95%"
                      />
                    </div>
                    <div class="w-100">
                      <div>
                        <label>Last Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="text"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 100%"
                      />
                    </div>
                  </div>
                  <div class="w-100 mt-4">
                    <label class="d-block">Card Number</label>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                    />
                  </div>
                  <div class="d-flex mt-4">
                    <div class="w-100">
                      <div>
                        <label>First Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="date"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 95%"
                      />
                    </div>
                    <div class="w-100">
                      <div>
                        <label>Last Name</label>
                        <label style="color: #ff0000">*</label>
                      </div>
                      <input
                        type="date"
                        class="border rounded-1 px-3 py-2 mt-1"
                        style="width: 100%"
                      />
                    </div>
                  </div>
                  <div class="w-100 mt-4">
                    <div>
                      <label>Cvv</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                    />
                  </div>

                  <div class="d-flex mt-4">
                    <button
                      class="border-0 px-4 py-2 rounded-1"
                      style="background-color: #e99d7b; color: #055452"
                    >
                      Add
                    </button>
                    <button
                      @click="cardListStatus = true"
                      class="border-0 px-4 py-2 rounded-1 ms-3"
                      style="color: #055452"
                    >
                      Show Card List
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!--Accordion Item -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <div class="d-flex justify-content-between px-3 py-3">
                  <button
                    class="collapsed border-0 bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style="font-size: 12pt; font-weight: 600"
                  >
                    Address Information
                  </button>
                  <button
                    class="border-0 bg-transparent"
                    style="font-size: 13px; color: #e99d7b"
                  >
                    Use existing address
                  </button>
                </div>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="w-100 mt-4">
                    <div>
                      <label>Country</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="England"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <div>
                      <label>Street address</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="House number abd street name"
                    />
                  </div>
                  <div class="w-100 mt-1">
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Apartment, suite , unit etc. (optional)"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <div>
                      <label>Town / City</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <div>
                      <label>District</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Afghanistan"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <label>Postcode / ZIP (optional)</label>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Afghanistan"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <label>Phone (optional)</label>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Afghanistan"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <div>
                      <label>Email address</label>
                      <label style="color: #ff0000">*</label>
                    </div>
                    <input
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Afghanistan"
                    />
                  </div>
                  <div class="w-100 mt-4">
                    <input
                      type="checkbox"
                      class="border rounded-1 px-3 py-2 mt-1 ms-2"
                      placeholder="Afghanistan"
                    />
                    <lable>Ship to a different address?</lable>
                  </div>
                  <div class="w-100 mt-4">
                    <label>Order notes (optional)</label>
                    <textarea
                      type="text"
                      class="border rounded-1 px-3 py-2 mt-1"
                      style="width: 100%"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style="background-color: #e5e5e5"
          class="w-100 px-3 py-5 rounded-1"
        >
          <div class="d-flex flex-column container">
            <h4 style="font-weight: 600; color: #231942">Your Order</h4>
            <div style="border: 1px solid #231942; width: 100px"></div>
          </div>
          <div class="d-flex justify-content-between container mt-5 w-100">
            <h5 style="font-weight: 400; color: #231942">Product</h5>
            <h6 style="font-weight: 400; color: #231942">Total</h6>
          </div>

          <div class="mt-2" style="border-bottom: 1px solid #c9c6d1"></div>

          <div class="d-flex justify-content-between container my-3 w-100">
            <h5 style="font-weight: 400; color: #231942">Satin gown × 1</h5>
            <h6 style="font-weight: 400; color: #231942">$ 500</h6>
          </div>
          <div class="d-flex justify-content-between container my-3 w-100">
            <h5 style="font-weight: 400; color: #231942">
              Printed cotton t-shirt × 1
            </h5>
            <h6 style="font-weight: 400; color: #231942">$ 600</h6>
          </div>

          <div class="mt-2" style="border-bottom: 1px solid #c9c6d1"></div>

          <div class="d-flex justify-content-between container my-3 w-100">
            <h5 style="font-weight: 400; color: #231942">Subtotal</h5>
            <h6 style="font-weight: 400; color: #231942">$ 60</h6>
          </div>

          <div class="mt-2" style="border-bottom: 1px solid #c9c6d1"></div>

          <div class="d-flex justify-content-between container mt-3 w-100">
            <h5 style="font-weight: 400; color: #231942">Shipping</h5>
            <h6 style="font-weight: 400; color: #231942">Flat rate: $50</h6>
          </div>
          <div class="mt-2" style="border-bottom: 1px solid #c9c6d1"></div>

          <div class="d-flex justify-content-between container mt-3 w-100">
            <h5 style="font-weight: 400; color: #231942">Total</h5>
            <h6 style="font-weight: 400; color: #231942">$ 1500</h6>
          </div>

          <div class="mt-5 d-flex align-items-center">
            <input type="radio" class="border" />
            <h5 class="ms-2" style="font-weight: 600; color: #231942">
              DIRECT BANK TRANSFER
            </h5>
          </div>

          <div class="mt-2">
            <p class="Desk" style="color: #838383">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>

          <div class="mt-3 d-flex align-items-center">
            <input type="radio" class="border" />
            <h5 class="ms-2" style="font-weight: 600; color: #231942">
              CHECK PAYMENTS
            </h5>
          </div>

          <div class="mt-3 d-flex align-items-center">
            <input type="radio" class="border" />
            <h5 class="ms-2" style="font-weight: 600; color: #231942">
              PAYPAL EXPRESS CHECKOUT
            </h5>
          </div>

          <div class="mt-2">
            <p class="Desk" style="color: #838383">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our
              <strong style="color: #e99d7b">privacy policy</strong>.
            </p>
          </div>

          <div class="mt-4 d-flex align-items-center">
            <input type="checkbox" class="border" />
            <h6 class="ms-2" style="color: #231942">
              I have read and agree to the website terms and conditions
            </h6>
          </div>

          <div class="mt-4">
            <button
              class="w-100 border-0 py-3 rounded-1"
              style="
                background-color: #e99d7b;
                color: #055452;
                font-weight: 600;
              "
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </section>
    <TheFooter />
    <div
      v-if="cardListStatus"
      class="w-100 vh-100 position-fixed top-0 d-flex align-items-center justify-content-center"
      style="backdrop-filter: blur(5px); overflow: hidden; z-index: 999"
    >
      <div class="py-4 px-4 rounded-1 bg-white border">
        <div class="w-100 d-flex justify-content-between">
          <h5>Card Lists</h5>
          <button
            @click="cardListStatus = false"
            class="border-0 bg-transparent"
          >
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheSubpageHeader";
import TheFooter from "@/components/TheFooter";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      cardListStatus: false,
    };
  },
};
</script>

<style scoped>
.KandakaMail {
  color: #055452;
}
.accordion-button {
  color: #000;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 12pt;
  text-align: left;
}
.accordion-body {
  font-family: "Open Sans";
  font-size: 10pt;
  color: #000;
}
.accordion-body:first-letter {
  text-transform: uppercase;
}
.accordion-button:not(.collapsed) {
  background-color: #e99d7b;
  color: #055452;
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
.BroadHome {
  color: #055452;
  font-family: "Open Sans";
  font-weight: 600;
  line-height: 1.25;
  font-size: 12pt;
}
.BroadHome:first-letter {
  text-transform: capitalize;
}
.BroadSub {
  color: #055452;
  font-family: "Open Sans";
  font-weight: 600;
  line-height: 1.25;
  font-size: 12pt;
}
.BroadSub:first-letter {
  text-transform: capitalize;
}
</style>