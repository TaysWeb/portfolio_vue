<template>
   <div class="container">
    <div class="row">
  <div class="col-3">
    <!-- Tab navs -->
    <div
      class="nav flex-column nav-pills text-center rounded-1 gap-3"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        class="nav-link active value border-0"
        id="v-pills-home-tab"
        data-mdb-toggle="pill"
        href="#v-pills-home"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
        >Home</a
      >
      <a
        class="nav-link value border-0"
        id="v-pills-profile-tab"
        data-mdb-toggle="pill"
        href="#v-pills-profile"
        role="tab"
        aria-controls="v-pills-profile"
        aria-selected="false"
        >Profile</a
      >
      <a
        class="nav-link value border-0"
        id="v-pills-messages-tab"
        data-mdb-toggle="pill"
        href="#v-pills-messages"
        role="tab"
        aria-controls="v-pills-messages"
        aria-selected="false"
        >Messages</a
      >
    </div>
    <!-- Tab navs -->
  </div>

  <div class="col-9" style="border:3px solid black">
    <!-- Tab content -->
    <div class="tab-content" id="v-pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-pills-home"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        Home content
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-profile"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
      >
        Profile content
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-messages"
        role="tabpanel"
        aria-labelledby="v-pills-messages-tab"
      >
        Messages content
      </div>
    </div>
    <!-- Tab content -->
  </div>
</div>

 </div> <!--end of main container-->
  </template>
  <script>
  export default  {
    name : 'resumeComp',
        props: {
      msg: String
        }
  
  }
  </script>
<style scoped>
.nav {
  width: 200px;
  background-color: #0D1117;
  justify-content: center;
}
.nav-link {
  padding: 10px;
  color: white;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
}

.nav-link:not(:active):hover,
.nav-link:focus {
  background-color: #b9c4d2;
}
.nav-link:focus,
.nav-link:active {
  background-color: #1A1F24 !important;
  outline: none;
}
.nav-link::before {
  content: "";
  position: absolute;
  top: 5px;
  left: -10px;
  width: 5px;
  height: 80% !important;
  /* background-color: #2F81F7 !important; */
  border-radius: 5px;
  opacity: 0;
}

.nav-link:focus::before,
.nav-link:active::before {
  opacity: 1 important; 
}
.nav-link:hover > :not(.nav-link:hover) {
  transition: 300ms !important;
  filter: blur(1px) !important;
  transform: scale(0.95,0.95) !important;
}
  
  </style>