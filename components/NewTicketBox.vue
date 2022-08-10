<template>
  <Modal title="Add New Ticket" :open="open" @close="$emit('close', true)">
    <div class="px-4 py-4 d-flex flex-column justify-content-between align-items-center">
      <select class="form-select form-select-lg form-input" v-model="selected.department">
        <option selected>Please select your ...</option>
        <option v-for="(item, i) in department" :key="i" :value="item">{{ item }}</option>
      </select>
      <select class="form-select form-select-lg form-input" v-model="selected.priority">
        <option selected>Please select priority...</option>
        <option v-for="(item, i) in priority" :key="i" :value="item">{{ item }}</option>
      </select>
      <input v-model="message" class="form-control form-input mt-2 mb-4" type="text" placeholder="Write your subject...">
      <div class="button-add" @click="Add()">Send Ticket</div>
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
      priority: ['low', 'medium', 'height'],
      department: ['Sale', 'Finance', 'Support'],
      selected: {
        department: 'Sale',
        priority: 'low',
      },
      message: ''
    }
  },

  computed: {
    ...mapState(['user'])
  },

  methods: {
    ...mapActions(['AddTicket']),

    Add() {
      const data = {
        author: this.user.username,
        department: this.selected.department,
        priority: this.selected.priority,
        description: this.message,
        status: 'pending',
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString().split(':').slice(0, 2).join(':'),
      }

      this.AddTicket(data)
      this.$emit('close', true)
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
  margin-top: 24px;
}

.button-add:hover {
  background-color: #e8926a
}

.form-input {
  border: none;
  background-color: #eff0f4;
  border-radius: 10px;
  margin-bottom: 12px;
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

</style>