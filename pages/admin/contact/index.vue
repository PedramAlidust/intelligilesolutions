<template>
  <main>
    <!-- title section -->
    <div class="py-4 d-none d-lg-block">
      <p class="PageTitle">Contact</p>
    </div>
    <!-- contact section -->
    <div
        class="w-100 d-flex d-md-none d-lg-none justify-content-between align-items-center py-3 px-3 bg-white border"
    >
      <button
          @click="sortStatus = !sortStatus"
          class="d-flex bg-transparent border-0"
      >
        <p class="mb-0">Contact Menu</p>
        <i
            class="bi bi-caret-down-fill ms-2"
            :style="sortStatus ? 'transform: rotate(180deg)' : ''"
        ></i>
      </button>
      <div class="d-flex align-items-center position-relative">
        <img
            class="SearchIcon position-absolute"
            style="right: 7px"
            src="~/assets/pictures/icon_search.svg"
            alt="SearchIcon"
        />
        <input
            type="text"
            class="py-1 px-2 border rounded-1 search"
            placeholder="Search a User"
        />
      </div>
    </div>
    <div class="ChatSectionBkg">
      <div class="row gx-0 bg-white box">
        <div
            class="col-lg-2 col-md-2 pt-4 py-4 px-0"
            :class="sortStatus ? 'w-75 border' : 'd-none d-lg-block'"
        >
          <div
              class="ps-5 d-none d-lg-flex align-items-center justify-content-between"
          >
            <p class="Profiles">Inbox</p>
            <p class="Profiles d-none d-lg-block">5</p>
            <i class="bi bi-caret-right-fill" v-if="sortStatus"></i>
          </div>
          <div
              class="ps-5 d-flex align-items-center justify-content-between mt-lg-4"
          >
            <p class="Profiles mb-0">Sent</p>
            <p class="Profiles d-none d-lg-block"></p>
            <i class="bi bi-caret-right-fill" v-if="sortStatus"></i>
          </div>
          <div
              class="ps-5 d-flex align-items-center justify-content-between mt-4"
          >
            <p class="Profiles mb-0">Drafts</p>
            <p class="Profiles d-none d-lg-block"></p>
            <i class="bi bi-caret-right-fill" v-if="sortStatus"></i>
          </div>
          <div
              class="ps-5 d-flex align-items-center justify-content-between mt-4"
          >
            <p class="Profiles mb-0">Trash</p>
            <p class="Profiles d-none d-lg-block">2</p>
            <i class="bi bi-caret-right-fill" v-if="sortStatus"></i>
          </div>
          <div
              class="ps-5 d-flex align-items-center justify-content-between mt-4"
          >
            <p class="Profiles mb-0">Important</p>
            <p class="Profiles d-none d-lg-block"></p>
            <i class="bi bi-caret-right-fill" v-if="sortStatus"></i>
          </div>
          <!-- Devider Section -->
          <div class="Devider mt-4 mb-3"></div>
          <!-- Subject Section -->
          <p class="py-2 ps-5 SubjectTitle">Subject</p>
          <!-- Subject badges -->
          <div class="ps-5 d-flex align-items-center justify-content-start">
            <img src="~/assets/svg/PurpleBadge.svg" alt="Badge" />
            <p class="RemPMargin ps-3 Profiles">Sales</p>
          </div>
          <div
              class="py-2 px-5 d-flex align-items-center justify-content-start"
          >
            <img src="~/assets/svg/BlueBadge.svg" alt="Badge" />
            <p class="RemPMargin ps-3 Profiles">Login</p>
          </div>
          <div class="ps-5 d-flex align-items-center justify-content-start">
            <img src="~/assets/svg/RedBadge.svg" alt="Badge" />
            <p class="RemPMargin ps-3 Profiles">Products</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 ColumnBorder p-0">
          <!-- bootstrap form -->
          <form class="form-inline ps-3 pt-2 d-none d-lg-block">
            <div class="d-flex">
              <img
                  class="SearchIcon"
                  src="~/assets/pictures/icon_search.svg"
                  alt="SearchIcon"
              />
              <input
                  class="Inputstyle form-control mr-sm-2"
                  type="search"
                  placeholder="Search your favourite"
              />
            </div>
          </form>
          <!-- Contacts -->
          <!-- Contact one -->
          <a href="admin/contact/22" class="container-full d-block ContactBkg py-2 mt-3">
            <div class="ps-3 d-flex align-items-center justify-content-start">
              <!-- profile image -->
              <div>
                <img
                    class="ProfileImg"
                    src="~/assets/pictures/AdminImg.png"
                    alt="ContactIcon"
                />
              </div>
              <!-- profile texts -->
              <div>
                <p class="ps-2 ProfileName">David James</p>
                <p class="ps-2 ProfileDesc">How can i see you ...</p>
              </div>
            </div>
          </a>
          <!-- Contact Two -->
          <a href="admin/contact/22" class="container-full d-block ContactBkg py-2 mt-3">
            <div class="ps-3 d-flex align-items-center justify-content-start">
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
                <p class="ps-2 ProfileName">David James</p>
                <p class="ps-2 ProfileDesc">How can i see you ...</p>
              </div>
            </div>
          </a>
        </div>
        <!-- chat section -->
        <div class="col-lg-7 col-md-7 p-0 bg-white">
          <NuxtChild />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "admin",
  layout: "admin",
  data() {
    return {
      sortStatus: false,
      searchBar: false,
    };
  },
};
</script>

<style scoped>
/*chat section */
.box {
  height: 80vh;
}
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
  margin-left: 65px;
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
  text-decoration: none;
  color: #000;
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