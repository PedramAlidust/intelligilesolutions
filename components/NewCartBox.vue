<template>
  <Modal title="Add new card" :open="open" @close="$emit('close', true)" :bg="'#fff'" :color="'#000'">
    <div class="px-4 py-4 d-flex flex-column justify-content-between align-items-center">
      <div class="group">
        <input type="text" v-model="first_name" required>
        <label>First Name</label>
      </div>

      <div class="group">
        <input type="text" v-model="last_name" required>
        <label>Last Name</label>
      </div>

      <div class="group">
        <input type="text" v-model="card_number" required>
        <label>Card number</label>
      </div>

      <div class="group">
        <input type="text" v-model="cvv" required>
        <label>Cvv</label>
      </div>

      <div class="group multi-input">
        <div>
          <input type="text" v-model="exp_mounth" required>
          <label>Exp Mounth</label>
        </div>
        <div>
          <input type="text" v-model="exp_year" required>
          <label>Exp Year</label>
        </div>
      </div>

      <div class="button-add" @click="Add()">Add Card</div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import InputField from "@/components/InputField";
import {mapActions, mapState} from "vuex";

export default {
  name: "NewTicketBox",
  components: {InputField, Modal},
  props: ['open'],
  data() {
    return {
      first_name: '',
      last_name: '',
      card_number: '',
      cvv: '',
      exp_mounth: '',
      exp_year: ''
    }
  },

  computed: {
    ...mapState(['user'])
  },

  methods: {
    ...mapActions(['AddNewCart']),

    Add() {
      const data = {
        status: 'publish',
        acf: {
          cardnumber: this.card_number,
          cardname: this.first_name,
          cardlastname: this.last_name,
          cvv: this.cvv,
          cardexpmonth: this.exp_mounth,
          cardexpyear: this.exp_year,
          userid: this.user.id
        }
      }

      this.AddNewCart(data)
    }
  }
}
</script>

<style scoped>
.button-add {
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 20px;
  color: white;
  background-color: #e99d7b;
  border: none;
  border-radius: 8px;
  padding: 6px 48px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.button-add:hover {
  background-color: #e8926a
}

.form-input {
  border: none;
  background-color: #eff0f4;
  border-radius: 10px;
  margin-bottom: 10px;
  height: 48px;
  font-size: 16px;
}

.ck.ck-editor {
  width: 100% !important;
}

.ck-editor__editable {
  border: none;
  background-color: #eff0f4 !important;
}


* { box-sizing:border-box; }
.container 		{
  font-family:'Roboto';
  width:600px;
  margin:30px auto 0;
  display:block;
  background:#FFF;
  padding:10px 50px 50px;
}
h2 		 {
  text-align:center;
  margin-bottom:50px;
}
h2 small {
  font-weight:normal;
  color:#888;
  display:block;
}
.footer 	{ text-align:center; }
.footer a  { color:#53B2C8; }

/* form starting stylings ------------------------------- */
.group 			  {
  position:relative;
  margin-bottom:45px;
}
input 				{
  font-size:18px;
  padding:10px 20px;
  display:block;
  width:450px;
  border:none;
  border:1px solid #757575;
  border-radius: 7px;
  opacity: .6;
}
input:focus 		{ border-color: #e8926a; outline: none; }

/* LABEL ======================================= */
label 				 {
  color:#999;
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:20px;
  top:10px;
  transition:0.2s ease all;
  -moz-transition:0.2s ease all;
  -webkit-transition:0.2s ease all;
  opacity: 1;
}

/* active state */
input:focus ~ label, input:valid ~ label {
  padding: 0 10px;
  top:-10px;
  font-size:14px;
  color:#e8926a;
  background-color: #fff;
}

.bar 	{ position:relative; display:block; width:300px; }


.multi-input {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.multi-input > div {
  width: 215px;
  position: relative;
}

.multi-input > div input {
  width: 100% !important;
}
</style>