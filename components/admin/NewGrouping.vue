<template>
  <div class="d-flex flex-column bg-light py-4 px-4 w-25 border rounded-1">
    <div class="d-flex justify-content-between">
      <p class="PageTitle">New Grouping</p>
      <button
        @click="$emit('close')"
        class="btn-close"
        aria-label="Close"
      ></button>
    </div>
    <p class="Desc">
      Please fill in the following forms carefully to add a new admin to the sub
      panel .
    </p>
    <input
      type="text"
      class="w-100 border bg-transparent py-1 rounded-1 fs-6 place px-4"
      placeholder="Grouping Name"
    />
    <button class="w-100 btn mt-4 text-light" style="background-color: #65a79f">
      Add group
    </button>
  </div>
</template>
<style scoped>
.Desc {
  font-family: "Open Sans";
  font-size: 11pt;
  color: #707070;
}

.Desc:first-letter {
  text-transform: capitalize;
}
.PageTitle {
  font-family: "Open Sans";
  font-size: 18pt;
  font-weight: 600;
  color: #231942;
  text-transform: capitalize;
}

.PageTitle:first-letter {
  text-transform: capitalize;
}
.place::placeholder {
  font-size: 13px;
}
</style>
