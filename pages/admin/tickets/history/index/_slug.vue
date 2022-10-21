<template>
  <div class="w-100 h-100 d-flex flex-column justify-content-between">
    <div
      class="py-3 px-4 border-md-bottom border-lg-bottom d-flex justify-content-between"
    >
      <div class="d-flex align-items-center">
        <img
          src="~/assets/pictures/AdminImg.png"
          alt=""
          class="border-circle"
          style="width: 50px"
        />
        <div class="flex flex-column ms-3 ms-md-5 ms-lg-5">
          <p
            class="mb-0"
            style="color: #4d4f5c; font-size: 13px; font-weight: 600"
          >
            {{ $route.params.slug }}
          </p>
          <p class="mb-0 mt-2" style="color: #43425d; font-size: 13px">
            #52d45as
          </p>
        </div>
        <div class="d-none d-md-flex d-lg-flex align-items-center ms-5">
          <div>
            <p
              class="mb-0"
              style="color: #4d4f5c; font-size: 13px; font-weight: 600"
            >
              Subjet:
            </p>
            <p
              class="mb-0"
              style="color: #4d4f5c; font-size: 13px; font-weight: 600"
            >
              Department:
            </p>
            <p
              class="mb-0"
              style="color: #4d4f5c; font-size: 13px; font-weight: 600"
            >
              Priority:
            </p>
          </div>
          <div class="ms-4">
            <p
              class="mb-0"
              style="color: #4d4f5c; font-size: 13px; font-weight: 600"
            >
              Error Chat
            </p>
            <p
              class="mb-0"
              style="color: #4d4f5c; font-size: 13px; font-weight: 600"
            >
              Salse Suport
            </p>
            <p
              class="mb-0"
              style="color: #4d4f5c; font-size: 13px; font-weight: 600"
            >
              High
            </p>
          </div>
        </div>
      </div>
      <div class="d-none d-md-flex d-lg-flex align-items-center">
        <div class="me-md-5 me-lg-5">
          <button
            class="border-0 px-4 py-2 text-white rounded-1"
            style="background-color: #a7afb7"
          >
            close
          </button>
          <button
            class="border-0 px-4 py-2 text-white rounded-1"
            style="background-color: #e99d7b"
          >
            Answer
          </button>
        </div>
        <div class="d-flex">
          <button class="border-0 bg-transparent">
            <i class="bi bi-x-lg fs-4"></i>
          </button>
        </div>
      </div>

      <div class="d-flex flex-column d-md-none d-lg-none">
        <button
          class="border-0 py-2 text-white rounded-1"
          style="background-color: #a7afb7; width: 100px"
        >
          close
        </button>
        <button
          class="border-0 mt-1 py-2 text-white rounded-1"
          style="background-color: #e99d7b; width: 100px"
        >
          Answer
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-center d-md-none d-lg-none mt-3">
      <div class="d-flex px-4 py-3 border rounded-4">
        <div>
          <p
            class="mb-0 mt-1"
            style="color: #4d4f5c; font-size: 13px; font-weight: 600"
          >
            Subjet:
          </p>
          <p
            class="mb-0 mt-1"
            style="color: #4d4f5c; font-size: 13px; font-weight: 600"
          >
            Department:
          </p>
          <p
            class="mb-0 mt-1"
            style="color: #4d4f5c; font-size: 13px; font-weight: 600"
          >
            Priority:
          </p>
        </div>
        <div class="ms-4">
          <p
            class="mb-0 mt-1"
            style="color: #4d4f5c; font-size: 13px; font-weight: 600"
          >
            Error Chat
          </p>
          <p
            class="mb-0 mt-1"
            style="color: #4d4f5c; font-size: 13px; font-weight: 600"
          >
            Salse Suport
          </p>
          <p
            class="mb-0 mt-1"
            style="color: #4d4f5c; font-size: 13px; font-weight: 600"
          >
            High
          </p>
        </div>
      </div>
    </div>
    <div class="py-5 h-100 w-100 px-4">
      <div class="d-flex w-100 flex-column align-items-start">
        <div
          class="py-3 px-3 left"
          style="background-color: #edf0f5; width: fit-content"
        >
          <p class="mb-0">Hi Jack, how can I help you?</p>
        </div>
        <p class="mb-0 mt-2" style="color: #4d4f5c; font-size: 12px">
          10:24 Am
        </p>
      </div>
      <div class="w-100 d-flex flex-column align-items-end mt-4">
        <div
          class="py-3 px-3 right"
          style="background-color: #65a79f; width: fit-content"
        >
          <p class="mb-0 text-white">
            Hey , I have a question regarding my acccount. Do you have time for
            a call?
          </p>
        </div>
        <p class="mb-0 mt-2" style="color: #4d4f5c; font-size: 12px">
          10:24 Am
        </p>
      </div>
    </div>
    <div class="w-100 d-flex align-items-center py-3 px-3">
      <div
        class="w-100 d-flex justify-content-between px-4 py-3 rounded-1"
        style="background-color: #f5f6fa"
      >
        <input
          type="text"
          class="border-0 bg-transparent"
          placeholder="Type your Message here ...."
          style="outline: none; font-size: 12px"
        />
        <div class="d-flex align-items-center">
          <i class="bi bi-link-45deg"></i>
          <i class="bi bi-film mx-2"></i>
          <i class="bi bi-emoji-smile"></i>
        </div>
      </div>
      <button
        class="border-0 rounded-circle mx-2"
        style="background-color: #e99d7b; width: 45px; height: 45px"
      >
        <i class="bi bi-send text-white fs-5"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.left {
  border-bottom-right-radius: 150px;
  border-top-right-radius: 150px;
  border-top-left-radius: 150px;
}
.right {
  border-bottom-left-radius: 150px;
  border-top-right-radius: 150px;
  border-top-left-radius: 150px;
}
</style>
