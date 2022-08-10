<template>
    <main class="AdminLoginBkg">
        <div class="container pt-5">
            <div class="row">
                <div class="col-lg-4"></div>
                <div class="col-lg-4 text-center">
              <img class="logo" src="~/assets/pictures/logokandaka.png" alt="logo">        
                </div>
                <div class="col-lg-4"></div>
            </div>
        </div>
        <section class=" d-flex align-items-center justify-content-center">
        <form @submit.prevent="sendForm" class="formBkg p-5">
            <p class="text-center text-success welcome">Welcome!</p>
            <p class="text-success text-center pt-1 pb-5">Please login to your account to continue</p>
            <div class="form-group">
                <input v-model="username" type="text" class="p-2 form-control"  placeholder="Username">
                <p v-if="usrErr" class="text-danger">username is required</p>
            </div>
            <div class="form-group pt-4">
                <input v-model="password" type="password" class="p-2 form-control" placeholder="Password">
                <p v-if="passErr" class="text-danger">password is required</p>
            </div>
            <button type="submit" class="mt-4 btn submit SubmitBtn py-2">Sign in</button>
        </form>
    </section>
    </main>    
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            username: "", 
            password: "", 
            usrErr: false,
            passErr: false 
        }
    }, 
    methods: {
        ...mapActions(['LoginAdmin']),
        sendForm() {
            if(!this.username && !this.password) {
                this.usrErr = true;
                this.passErr = true;
            } else {
                /*change error status to false*/
                this.usrErr = false;
                this.passErr = false;
            
                /*send username and password to the server*/
                this.LoginAdmin({
                    username: this.username,
                    password: this.password
                })
            }
        }
    }
}
</script>

<style scoped>

body {
    font-family: 'Open Sans';
}

.form-control {
    border: none !important;
    box-shadow: none;
    background-color: #eff0f4;
}

::placeholder {
   color: #aaaeba;
   font-size: 10pt;
}

.AdminLoginBkg {
    background-color: #055452;
    min-height: 100vh;
}

.logo {
    width: 300px;
    height: 300px;
}

.formBkg {
    background-color: #f7fafc;
    border-radius: 5px;
}

.SubmitBtn {
    background-color: #e99d7b;
    width: 100%;
    color: #fff;
    font-size: 10pt;
    box-shadow: none;
}

.welcome {
    font-size: 16pt;
}

p {
    padding: 0;
    margin: 0;
}
</style>