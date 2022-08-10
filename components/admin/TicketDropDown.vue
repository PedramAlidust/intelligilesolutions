<template>
  <div class="cont">
    <div class="box">
      <div class="title">
        <span>Tickets</span>
      </div>
      <hr class="divider">
      <ul>
        <li class="d-flex gap-3">
          <div><img src="../../assets/pictures/AdminImg.png"></div>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div>
              <span>David Lee</span>
              <span>Sent you Ticket.</span>
            </div>
            <div>
              <span>4 min ago</span>
            </div>
          </div>
        </li>
        <hr class="divider">
        <li class="d-flex gap-3">
          <div><img src="../../assets/pictures/AdminImg.png"></div>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div>
              <span>David Lee</span>
              <span>Sent you Ticket.</span>
            </div>
            <div>
              <span>4 min ago</span>
            </div>
          </div>
        </li>
        <hr class="divider">
        <li class="d-flex gap-3">
          <div><img src="../../assets/pictures/AdminImg.png"></div>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div>
              <span>David Lee</span>
              <span>Sent you Ticket.</span>
            </div>
            <div>
              <span>4 min ago</span>
            </div>
          </div>
        </li>
        <hr class="divider">
        <li class="d-flex gap-3">
          <div><img src="../../assets/pictures/AdminImg.png"></div>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div>
              <span>David Lee</span>
              <span>Sent you Ticket.</span>
            </div>
            <div>
              <span>4 min ago</span>
            </div>
          </div>
        </li>
        <hr class="divider">
        <li class="d-flex gap-3">
          <div><img src="../../assets/pictures/AdminImg.png"></div>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div>
              <span>David Lee</span>
              <span>Sent you Ticket.</span>
            </div>
            <div>
              <span>4 min ago</span>
            </div>
          </div>
        </li>
        <hr class="divider">
        <li class="d-flex gap-3">
          <div><img src="../../assets/pictures/AdminImg.png"></div>
          <div class="d-flex flex-column justify-content-center gap-2">
            <div>
              <span>David Lee</span>
              <span>Sent you Ticket.</span>
            </div>
            <div>
              <span>4 min ago</span>
            </div>
          </div>
        </li>
      </ul>
      <hr class="divider">
      <div class="d-flex justify-content-center more">
        <a href="/">View all Tickets</a>
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
    width: 90%;
    margin: 0 auto;
    padding: 10px;
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
  }

  ul {
    padding: 0 20px;
    list-style: none;
  }

  ul hr {
    width: 100% !important;
  }

  ul li > div:first-child {
    width: 50px;
    height: 50px;
  }

  ul li > div:last-child > div:first-child span:first-child {
    font-weight: 600;
  }

  ul li > div:last-child > div:first-child span:last-child {
    opacity: .6;
    font-size: 14px;
  }

  ul li > div:last-child > div:last-child {
    opacity: .6;
  }

  .more a {
    text-decoration: none;
    color: #055452;
    font-size: 17px;
    font-weight: 600;
  }
</style>
