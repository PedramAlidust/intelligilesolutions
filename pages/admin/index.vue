<template>
            <section>
                   <!-- dashboard states section -->
                    <div class="container-full mt-4 px-4">
                        <div class="row">
                            <div class="col">
                                  <div class="d-flex DashState align-items-center">
                                    <div>
                                        <p class="m-0 StateTitle">Total Products</p>
                                        <p class="pt-1 ps-3 m-0">123,456</p>
                                        <p class="pt-1 ps-3 ProdCount">
                                            <span class="ProdNum">1000</span>
                                              New Products
                                        </p>
                                    </div>
                                    <img class="TotalProd" src="~/assets/pictures/TotalProd.svg" alt="TotalProd">
                                  </div>
                            </div>
                            <div class="col">
                                   <div class="d-flex DashState align-items-center">
                                    <div>
                                        <p class="m-0 StateTitle">Total Users</p>
                                        <p class="pt-1 ps-3 m-0">5800</p>
                                        <p class="pt-1 ps-3 ProdCount">
                                            <span class="UserNum">1000</span>
                                              New Users
                                        </p>
                                    </div>
                                    <img class="TotalProd" src="~/assets/pictures/Users.png" alt="TotalProd">
                                  </div>
                            </div>
                            <div class="col">
                                   <div class="d-flex DashState align-items-center">
                                    <div>
                                        <p class="m-0 StateTitle">Total Tickets</p>
                                        <p class="pt-1 ps-3 m-0">20000</p>
                                        <p class="pt-1 ps-3 ProdCount">
                                            <span class="TicketNum">180</span>
                                              Current tickets
                                        </p>
                                    </div>
                                    <img class="TotalProd" src="~/assets/pictures/Support.png" alt="TotalProd">
                                  </div>
                            </div>
                            <div class="col">
                                   <div class="d-flex DashState align-items-center">
                                    <div>
                                        <p class="m-0 StateTitle">Total Overview</p>
                                        <p class="pt-1 ps-3 m-0">250,000</p>
                                        <p class="pt-1 ps-3 ProdCount">
                                            <span class="OverviewNum">2714</span>
                                              Last day
                                        </p>
                                    </div>
                                    <img class="TotalProd" src="~/assets/pictures/Bell.png" alt="TotalProd">
                                  </div>
                            </div>
                              <div class="col">
                                   <div class="d-flex DashState align-items-center">
                                    <div>
                                        <p class="m-0 StateTitle">Total Orders</p>
                                        <p class="pt-1 ps-3 m-0">1400</p>
                                        <p class="pt-1 ps-3 ProdCount">
                                            <span class="TotalOrders">125</span>
                                              Last new Orders
                                        </p>
                                    </div>
                                    <img class="TotalProd" src="~/assets/pictures/Shop.png" alt="TotalProd">
                                  </div>
                            </div>
                        </div>
                    </div>
                    <!-- dashboard graph section -->
                    <div class="container-full mt-4 px-4">
                       <canvas id="myChart"></canvas>
                    </div>  
          </section>          
</template>

<script>

/* import chart.js */
import Chart from 'chart.js/auto';
import axios from 'axios';
export default {
name: "admin",
layout: 'admin',    
    
/*
        asyncData(context) {
        return  axios.post('https://api.intelligilesolutions.com/wp-json/jwt-auth/v1/token', {
            username: 'user',
            password: 'User@1400'
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                context.error(error);
            });
     },
*/

/* 
asyncData(context) {
            var config = {
            method: 'post',
            url: 'https://api.intelligilesolutions.com/wp-json/wp/v2/users/me',
            headers: { 
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmludGVsbGlnaWxlc29sdXRpb25zLmNvbSIsImlhdCI6MTY1ODU1ODc0OCwibmJmIjoxNjU4NTU4NzQ4LCJleHAiOjE2NTkxNjM1NDgsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.jv942sWnAZZmeA3rO6-TC1ThmsxaLtIuJCH6w-xwSrE'
            }
            };

        return  axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              context.error(error);
            });}
*/

mounted() {
    /* chartjs config section */
    var ctx = document.getElementById('myChart')
    const plugin = {
          id: 'custom_canvas_background_color',         
            beforeDraw: (chart) => {
                const ctx = chart.canvas.getContext('2d');
                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, chart.width, chart.height);
            },
            legend: {
                display: true,
                position: 'right',
                align: 'end',
            },
            title: {
                display: true,
                text: 'Sales',
                fontSize: 20,
                fontColor: '#000',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 'normal',
                padding: 10,
                position: 'top',
                align: 'left',
            },
    }
    new Chart(ctx, {
        type: 'line',
        data: {
            labels:  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                lineTension: 0,    
                label: 'Total Revenue',
                data: [6, 8, 5, 12, 16, 20, 18, 15, 12, 10, 8, 20],
                backgroundColor: '#fff',
                borderColor: '#2cd9c5',
                borderWidth: 2,
                }, 
              {
                lineTension: 0,    
                label: 'Total Cost',
                data: [4, 6, 3, 10, 14, 18, 16, 13, 10, 8, 6, 18],
                backgroundColor: '#fff',
                borderColor: '#8c54ff',
                borderWidth: 2
             },
            
            ]
        },
        options: {                  
            responsive: true,
            layout: {
                padding: {
                    left: 50,
                    top: 50,
                    right: 50,
                    bottom: 50
                },   
            },  
             
        }, 
        plugins: [plugin]
    });
}

 }
 </script>

<style scoped>

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