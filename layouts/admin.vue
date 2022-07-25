<template>
<section class="AdminBkg">
    <div class="container-full d-none d-md-block d-lg-block">
        <div class="row gx-0">
            <div class="col-md-2 col-lg-2 SideBkg text-center">
                <img src="~/assets/pictures/logokandaka.svg" class="DashLogo" alt="KandakaLogo">
                <div class="d-flex align-items-center justify-content-start px-4 pt-4">
                    <img src="~/assets/svg/DashBoardIcon.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <nuxt-link to="/admin">
                    <p class="m-0 ItemsColor px-3">Dashboards</p>
                    </nuxt-link>
                </div>
                <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/Orders.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <nuxt-link to="/admin/orders">
                    <p class="m-0 ItemsColor px-3">Orders</p>
                    </nuxt-link>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/Tickets.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <nuxt-link to="/admin/tickets">
                    <p class="m-0 ItemsColor px-3">Tickets</p>
                    </nuxt-link>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/shop.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <nuxt-link to="/admin/products">
                    <p class="m-0 ItemsColor px-3">Products</p>
                    </nuxt-link>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/subadmin.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <nuxt-link to="/admin/subadmin">
                    <p class="m-0 ItemsColor px-3">Sub Admin</p>
                    </nuxt-link>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/contact.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Contact</p>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/discounts.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Discounts</p>
                </div>
                  <!-- Dashborad Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/comments.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Comments</p>
                </div>
                <!-- Exit Items -->
                <div class="d-flex align-items-center justify-content-start px-4 IconDist">
                    <img src="~/assets/svg/exit.svg" class="DashBoardIcon" alt="DashBoardIcon">
                    <p class="m-0 ItemsColor px-3">Exit</p>
                </div>
            </div>
            <!-- search section -->
            <div class="col-md-10 col-lg-10 px-4">
                <div class="container-full NavBar mt-4 px-4">
                    <div class="d-flex align-items-center justify-content-between">
                        <!-- bootstrap form -->
                        <form class="form-inline">
                            <div class="d-flex">
                            <img class="SearchIcon" src="~/assets/pictures/icon_search.svg" alt="SearchIcon">   
                            <input class="Inputstyle form-control mr-sm-2" type="search" placeholder="Search your favourite">
                            </div>
                        </form>
                        <!-- searchbar right  items -->
                        <div class="d-flex align-items-center">
                            <img class="CommentIcon" src="~/assets/pictures/comment.svg" alt="comment">
                            <img class="RingIcon px-3" src="~/assets/pictures/ring.svg" alt="ring">
                            <img class="BarIcon" src="~/assets/pictures/bar.png" alt="comment">
                            <p class="AdminUser p-0 m-0 px-3">Main Admin User</p>
                            <img class="AdminImg" src="~/assets/pictures/AdminImg.png" alt="">
                        </div>
                    </div>
                </div>
                     <!-- other sections goes here -->
                     <nuxt />                    
            </div>
        </div>
    </div>    
</section>
</template>

<script>
export default {}
</script>

<style scoped>

a {
    text-decoration: none;
}

canvas {
width: 100%;
height: 100%;
}

.TotalOrders {
 color: #e1da18;
}

.OverviewNum {
    color: #f20000;
}

.TicketNum {
    color: #4d77f9;
}

.UserNum {
    color: #ed3b65;
}

.ProdNum {
 color: #159282;
}

.ProdCount {
    font-size: 8pt;
    color: #8898aa;
}

.TotalProd {
    width: 40px;
}

.StateTitle {
    font-family: 'Open Sans', sans-serif;
    font-size: 10pt;
    color: #8898aa;
    padding: 15px;
    padding-bottom: 0;
}

.DashState {
    background-color: #fff;
    border-radius: 5px;
    min-height: 10vh;
}

.AdminUser {
  font-family: 'Source Sans Pro', sans-serif; 
  color: #4d4f5c;
  font-size: 10pt;
}

.AdminImg {
    width: 30px;
    height: 30px;
}

.RingIcon {
    width: 55px;
}

.CommentIcon {
    width: 19px;
}

.BarIcon {
    width: 2px;
}

.DashBoardIcon {
    width: 12%;
}

.SearchIcon {
    width: 15px;
 }

::placeholder {
    color: #e0e0e5;
    font-size: 10pt;
}

.DashLogo {
    width: 80%;
}

.Inputstyle:focus {
    border-color: none;
    box-shadow: none;
}

.form-control {
    border: none;
}

.form-inline {
    width: 20%;
}

.AdminBkg {
    background-color: #f0f0f7;
}

.NavBar {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.05);
    padding: 7px;
}

.IconDist {
    margin-top: 35px;
}

.ItemsColor {
    color: #fff;
    font-family: 'Open Sans';
    font-size: 11pt;
}

.SideBkg {
background-image: url("~/assets/pictures/AdminSidebar.png");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
min-height: 100vh;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
}

</style>