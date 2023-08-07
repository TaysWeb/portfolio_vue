<template>
          <div class="col-lg-8">
            <div  v-for="exp in experience" :key="exp.id"  class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header " id="panelsStayOpen-headingOne">
          <button class="accordion-button text-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
           {{ exp.title }}
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body fs-5">
              {{ exp.desc }}
          </div>
        </div>
      </div>
           </div>

     </div>
      </template>
<script>
export default  {
        props :['experience']
      }
</script>
<style scoped>
     
.accordion-button {
 background-color: #e61fc2;
}
 </style>