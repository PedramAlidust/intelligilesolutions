<template>
  <section>
    <div class="container-full mt-4 px-4">
      <!-- Tabs navs -->
    </div>
    <!-- Tabs navs -->
    <div class="container-full mt-4 px-4 TableBkg">
      <div class="d-flex justify-content-between pt-5 px-3">
        <!-- pagination -->
        <AdminPagination />
        <!-- end pagination -->
        <!-- sort section -->
        <div class="d-flex align-items-center">
           <button @click="RegisterModal" type="button" class="BtnStyleProd btn btn-sm">Add New Admin</button>
        </div>
        <!-- end sort section -->
      </div>
      <!-- table section -->
      <div class="container-full px-3">
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>#</th>  
              <th>Name</th>
              <th>Gmail</th>
              <th>Phone Num</th>
              <th>User name</th>
              <th>Password</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>1</p>
              </td>
              <td>
                <p>jack Dorsi</p>
              </td>
              <td>
                <p>Dorsi.jack220@gmail.com</p>
              </td>
              <td>
                <p>+00131521455</p>
              </td>
              <td>
                <p>Dorsi_jack220</p>
              </td>
               <td>
                <p>Dorsi1234</p>
              </td>
               <td>
                <i class="bi bi-eye"></i>
              </td>
               <td>
                <!-- switch button -->
                              <div class="d-flex justify-content-between">
                                <p>inactive</p>
                                <!-- Checked switch -->
                                  <div class="form-check form-switch">
                                    <input class="InputStyle form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                  </div>
                                <!-- end checked switch -->
                                <p>Active</p>
                              </div>
              </td>
               <td>
                <i class="bi bi-three-dots-vertical"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- New Admin Modal -->
    <div v-if="NewAdminModal" class="BackDrop">
      <div class="FormModal bg-white">
          <div class="d-flex justify-content-between">
            <p>New Admin</p>
            <i @click="CloseModal" class="bi bi-x-square"></i>
          </div>
          <p style="font-size: 8pt;" class="mt-4">Please fill in the following forms carefully to add a new admin to the sub panel.</p>
          <!-- form Input -->
                <form class="bg-white px-2 p-5 my-2">
                   <!-- Name input -->
                    <div class="form-outline mb-4">
                      <input v-model="Name" style="border: 1px solid black;" type="text" id="form1Example3" class="form-control" />
                      <label class="form-label" for="form1Example3">Name</label>
                    </div>
                    <!-- UserName input -->
                    <div class="form-outline mb-4">
                      <input v-model="UserName" style="border: 1px solid black;" type="text" id="form1Example4" class="form-control" />
                      <label class="form-label" for="form1Example4">UserName</label>
                    </div>
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input v-model="Email" style="border: 1px solid black;" type="email" id="form1Example1" class="form-control" />
                      <label class="form-label" for="form1Example1">Email address</label>
                    </div>
                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <input v-model="Password" style="border: 1px solid black;" type="password" id="form1Example2" class="border-secondary form-control" />
                      <label class="form-label" for="form1Example2">Password</label>
                    </div>              
                </form>
          <!-- end form Input -->
          <div class="d-flex align-items-center">
            <div @click="CloseModal" class="mt-4 btm btn-sm">Cancel</div>
            <a @click="PostData" class="mt-4 btn btn-sm" role="button">Save</a>
          </div>
      </div>
    </div>

{{ GetSubAdminUser }}
{{ GetSubAdminPass }}
{{ GetSubAdminEmail }}


</section>
</template>

<script>
import AdminPagination from "@/components/AdminPagination";
import { mapGetters, mapActions } from 'vuex';

export default {
name: "admin",
layout: 'admin', 
components: { AdminPagination },
data() {
  return {
    Name: '', 
    Email: '',
    Password: '',
    UserName: '',    
    NewAdminModal: false,
  }
}, 

methods: {
  RegisterModal() {
    this.NewAdminModal = true;
  },
  CloseModal() {
    this.NewAdminModal = false;
  },
  ...mapActions(['SetSubAdmin']),
  PostData() {
    this.SetSubAdmin({
      username: this.Name,
      email: this.Email,
      password: this.Password,
    });
  },
},

computed: {
  ...mapGetters(['GetSubAdminUser', 'GetSubAdminPass', 'GetSubAdminEmail' ]),
}


/*
  asyncData(context) {        
  var data = JSON.stringify({
  "name": "samad",
  "username": "samadbb",
  "email": "samad@gmail.com",
  "password": "123456",
  "roles": [
    "editor"
  ],
  "acf": {
    "FullName": "jak2",
    "email": "jak2@gmail.com",
    "password": "jak1234566",
    "firstname": "jak",
    "lastname": "jaki",
    "streetaddress": "mayamei",
    "aptsuite": "apartment",
    "city": "beverlihilz",
    "state": "masachoset",
    "zipcode": "45869",
    "phonenum": "095686354",
    "deliveryinstruction": "that is awsome",
    "paymentmethod": "visa",
    "cardfirstname": "jak",
    "cardlastname": "jak obst",
    "cardnumber": "566824",
    "cvv": "45",
    "card_exp_month": "11/05/",
    "card_exp_year": "2025"
  }
});

var config = {
  method: 'post',
  url: 'https://api.intelligilesolutions.com/wp-json/wp/v2/userprofile',
  headers: { 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmludGVsbGlnaWxlc29sdXRpb25zLmNvbSIsImlhdCI6MTY1ODk5OTczNywibmJmIjoxNjU4OTk5NzM3LCJleHAiOjE2NTk2MDQ1MzcsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.XfwHuH1jpTiLW64dLeSlKtcOcS09GpXDo24G8QfJlRY', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

},

*/
}



</script>

<style scoped>

/*Form Modal */

.FormModal {
  position: fixed;
  top: 20%;
  left: 40%;
  z-index: 3;
  width: 300px;
  background-color: rgb(223, 220, 220) !important;
  padding: 20px;
}

/* filterd blur backdrop */
.BackDrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  z-index: 2;
  backdrop-filter: blur(5px);
}

.form-switch {
  padding-right: 15;
  padding-left: 0;
}

.InputStyle:focus {
    box-shadow:none !important;
    background-image: none !important;
}

.InputStyle::before {
    box-shadow:none !important;
    background-image: none !important;
}

.form-switch .form-check-input:after {
  background-color: #e99d7b;
}

.form-check-input {
  background-image: none;
  border: none;
}

.form-check-input:checked {
  background-color: #055452;
  box-shadow: none;
  border: none;
}

.form-check-input:checked:focus {
  background-color: #055452;
  transition: none;
   border: none;
}
 
.form-switch .form-check-input:checked[type=checkbox]:after {
  background-color: #e99d7b;
  outline: 0;
  box-shadow: 0;
  border: none;
}

.BtnStyleProd{
  box-shadow: none;
  background-color: #e99d7b;
  color: #fff;
  padding: 8px 12px;
  border-radius: 2px;
}

th {
    background-color: #f5f6fa;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    font-size: 10pt;
    color: #212529;
    padding: 10px 15px;
    border-bottom: 0;
}

td {
    color: black;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
}

p {
    margin-bottom: 0;
}

.DetailBtn {
  background-color: #e99d7b;
  color: #231942;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 10pt;
  padding: 5px 25px;
  text-transform: capitalize;
}

.DetailBtn:focus {
  box-shadow: none;
}

.page-link {
  color: #4d4f5c;
  padding: 8px 15px;
}

.page-link:focus {
  background-color: #055452;
  color: #fff;
  box-shadow: none;
}

.SortStatus {
  color: #828282;
  font-family: "Open Sans";
  font-size: 10pt;
  font-weight: 400;
}

.sort {
  color: #000000;
  font-family: "Open Sans";
  font-size: 14pt !important;
  font-weight: 400;
  font-size: 10pt;
}

.TableBkg {
  background-color: #fff;
  min-height: 80vh;
}

.nav-link {
  font-family: "Source Sans Pro", sans-serif;
  color: #9296ad;
  background-color: #fff;
  font-size: 10pt;
}

.nav-link.active {
  background-color: #055452;
  color: #fff !important;
  border-radius: 8px;
  font-weight: 600;
}

.nav-tabs {
  border-bottom: 0;
}
</style>