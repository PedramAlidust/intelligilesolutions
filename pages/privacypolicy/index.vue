<template>
  <div>
    <TheHeader />
    <section class="PageBkg">
      <div class="container px-5 px-md-4 px-lg-4 pt-4">
        <p class="PageTitle">Privacy Policy</p>
      </div>
      <div class="container px-5 px-md-4 px-lg-4 pt-2">
        <p class="Desc">
          Kandaka Collections values every single customer. We try our best to
          provide excellent products and services.
        </p>
      </div>
      <div class="container px-5 px-md-4 px-lg-4 pt-2">
        <p class="DescTitle">Our Privacy policy outlines:</p>
        <ul class="pl-4">
          <li class="Desc">
            How and why we collect customer’s personal information.
          </li>
          <li class="Desc">
            How customer’s personal information is used and protected.
          </li>
          <li class="Desc">
            How can a customer opt out of their personal information being
            collected.
          </li>
          <li class="Desc">
            How to contact Kandaka Collections if any questions or concerns are
            raised about our privacy policy.
          </li>
        </ul>
      </div>
      <div class="container px-5 px-md-4 px-lg-4 pt-4">
        <p class="Desc">
          The information shared by customers through registering an account at
          the Kandaka Collections website allows us to know what types of
          products our customers need and allows us to fulfill orders, send
          newsletters, and respond to customer’s inquiries and requests.
        </p>
      </div>
      <div class="container px-5 px-md-4 px-lg-4">
        <p class="Desc">
          Personal information is collected when a customer makes an account
          with Kandaka Collections. The information provided by the customer and
          collected by Kandaka Collections website include customer first and
          last name, address, email, phone number, and credit card information.
          Additionally, our website collects information on a customer’s
          purchase history on our website. All this information is saved and
          protected on the Kandaka Collections website and will not be shared
          with external parties or companies not related to Kandaka Collections.
        </p>
      </div>
      <div class="container px-5 px-md-4 px-lg-4">
        <p class="Desc">
          If customers no longer want to be serviced by Kandaka Collections or
          have their personal information shared with us, they are free to
          cancel their account with Kandaka Collections and unsubscribe on our
          email.
        </p>
      </div>
      <div class="container px-5 px-md-4 px-lg-4">
        <p class="Desc">
          If customers have questions or concerns about our privacy policy, they
          can contact us our mail at kandakacollections@gmail.com or send a
          message on the Kandaka Collections website through our contact page.
        </p>
      </div>
    </section>
    <TheFooter />
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
};
</script>
<style scoped>
.PageBkg {
  background-image: url("~assets/pictures/PageBack.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}
.Desc {
  font-family: "Open Sans";
  font-size: 11pt;
  color: #707070;
}

.Desc:first-letter {
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
</style>
