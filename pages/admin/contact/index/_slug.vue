<template>
  <div class="container ChatBkg px-0">
    <h1>{{ $route.params.slug }}</h1>
    <div class="container CurrentChatBkg py-4">
      <div
        class="ps-3 d-flex flex-column align-items-center justify-content-start"
      >
        <!-- profile image -->
        <div>
          <img
            class="ProfileImg"
            src="~/assets/pictures/profile1.jpg"
            alt="ContactIcon"
          />
        </div>
        <!-- profile texts -->
        <div>
          <!-- profile name and date -->
          <div class="d-flex align-items-center justify-content-between">
            <p class="ps-2 ProfileName">David James</p>
          </div>
          <p class="ps-2 ProfileDesc">david@gmail.com</p>
        </div>
      </div>
      <!-- role button -->
      <div class="mt-2 text-center">
        <button class="BtnStyle btn btn-sm">Products & Details</button>
      </div>
    </div>
    <!-- chat box -->
    <p class="ChatText mt-5 ps-5 pe-4">
      Hello, good morning do not be tired, I am one of your users and I have
      many problems when registering and I can not register with the current
      information. I also need a large number of your products at wholesale
      prices for sale in foreign markets and I do not know how to If you become
      a party to the contract, please email me and let me know how to do
      this.Also, please explain the ways to participate in the production and
      purchase of your products. I need these products for France, Norway,
      Switzerland, Saudi Arabia, Russia, etc. Our market is very wide and we are
      happy to cooperate with you.
    </p>
    <!-- send message section -->
    <div class="ps-5 pe-4 pt-5">
      <textarea
        placeholder="Type Your Reply"
        class="ReplyMessage form-control"
        rows="4"
      ></textarea>
      <!-- Send Message button -->
      <div class="SendMsgBtn btn btn-sm mt-3">Reply</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.CurrentChatBkg {
  border-bottom: 1px solid #f1f1f3;
}

.SendMsgBtn {
  background-color: #ff6565;
  padding: 5px 9px;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 8pt;
  font-weight: bold;
  border-radius: 5px;
  margin-left: 0px;
  box-shadow: none;
}

.ReplyMessage {
  box-shadow: none;
  background-color: #f5f6fa;
}

::placeholder {
  opacity: 1 !important;
  color: #979797 !important;
}

.ChatText {
  font-family: "Open Sans", sans-serif;
  font-size: 10pt;
  color: #231942;
}

.BtnStyle {
  background-color: #ff6565;
  padding: 5px 9px;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 8pt;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: none;
}

/* contact section profiles */

.ProfileDate {
  color: #43425d;
  font-family: "Open Sans", sans-serif;
  font-size: 8pt;
  padding: 0;
  margin: 0;
}

.ProfileName {
  font-family: "Open Sans", sans-serif;
  font-size: 10pt;
  font-weight: bold;
  padding: 0;
  margin: 0;
}

.ProfileDesc {
  font-family: "Open Sans", sans-serif;
  font-size: 9pt;
  padding: 0;
  margin: 0;
  color: #43425d;
}

.ProfileImg {
  width: 50px;
  border-radius: 50%;
}

.ContactBkg {
  background-color: #fff;
}

.Contact2Bkg {
  background-color: #fff;
}

.Contact2Bkg:hover {
  background-color: #f0f0f7;
}

.ContactBkg:hover {
  background-color: #f0f0f7;
}

/* contact section form */

.ColumnBorder {
  border-left: 1px solid #f1f1f3;
  border-right: 1px solid #f1f1f3;
}

.form-control {
  border: none;
}

::placeholder {
  font-size: 10pt;
}

.Inputstyle {
  border-color: none;
  box-shadow: none;
}

.Inputstyle:focus {
  border-color: none;
  box-shadow: none;
}

.SearchIcon {
  width: 15px;
}

/* Left Side Section */

.RemPMargin {
  margin: 0;
}

.SubjectTitle {
  color: #231942;
  font-family: "Source Sans Pro";
  font-size: 13pt;
  font-weight: bold;
}

.Devider {
  width: 100%;
  border-bottom: 1px solid #f1f1f3;
}

.Profiles {
  color: #4d4f5c;
  cursor: pointer;
  font-weight: 400;
  font-size: 12pt;
}

.Profiles:hover {
  color: #055452;
  transition: 0.5s;
  font-weight: bold;
}

.PageTitle {
  font-family: "open sans", sans-serif;
  font-size: 16pt;
  color: #43425d;
  font-weight: 600;
}

.ChatSectionBkg {
  background-color: #fff;
  height: 80vh;
}
@media screen and (min-width: 1200px) {
  .ContactBkg {
    background-color: #fff;
    border-left: 3px solid #ff6565;
  }

  .Contact2Bkg {
    background-color: #fff;
    border-left: 3px solid #a3a0fb;
  }
}
</style>
