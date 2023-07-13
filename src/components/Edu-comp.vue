<template>
<!-- <div> -->
  
   
     <!-- =====================   1st accordion ========================== -->

      <div class="col-lg-8" >
        <div  v-for="edu in education" :key="edu.id"  class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       {{ edu.title }}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body fs-5">
          {{ edu.desc }}
      </div>
    </div>
  </div>
       </div>


 </div>





  </template>
  <script>
  export default  {
    props :['education']
  }
  </script>
<style scoped>
 .accordion-button {
 background-color: #5da312;
}
  
  </style>