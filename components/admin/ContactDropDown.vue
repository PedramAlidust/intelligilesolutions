<template>
  <div class="cont">
    <div class="box">
      <div class="title">
        <span>Contacts</span>
      </div>
      <ul>
      <hr class="divider">
        <li>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div>
              <span>David Lee</span>
            </div>
            <div>
              <span>Hey, I just read your message. How are you?</span>
            </div>
          </div>
        </li>
        <hr class="divider">
        <li>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div>
              <span>David Lee</span>
            </div>
            <div>
              <span>Hey, I just read your message. How are you?</span>
            </div>
          </div>
        </li>
        <hr class="divider">
        <li>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div>
              <span>David Lee</span>
            </div>
            <div>
              <span>Hey, I just read your message. How are you?</span>
            </div>
          </div>
        </li>
        <hr class="divider">
        <li>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div>
              <span>David Lee</span>
            </div>
            <div>
              <span>Hey, I just read your message. How are you?</span>
            </div>
          </div>
        </li>
        <hr class="divider">
      </ul>
      <div class="d-flex justify-content-center more">
        <a href="/">View all Contacts</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
}

.cont {
  width: 500px;
  max-width: 500px;
  background-color: #fff;
  position: absolute;
  top: 75px;
  right: 100px;
  box-shadow: 1px 1px 6px gray;
}

.box {
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
}

.divider {
  background-color: gray;
  opacity: .2;
  margin: .8rem 0;
}

.title {
  padding: 0 20px;
  font-size: 21px;
  font-weight: 600;
  text-align: center;
}

ul {
  padding: 0;
  margin-top: 10px;
  list-style: none;
}

ul li {
  padding: 10px 50px;
  background-color: #f6f6f6;
}

ul hr {
  width: 100% !important;
  margin: 0 !important;
}

ul li > div > div:first-child span {
  font-weight: 600;
}

ul li > div > div:last-child span {
  opacity: .7;
  font-size: 15px;
}

.more a {
  text-decoration: none;
  color: #055452;
  font-size: 17px;
  font-weight: 600;
}
</style>
