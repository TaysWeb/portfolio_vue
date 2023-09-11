<template>
    <!-- <div class="row  row-cols-1 row-cols-md-3 g-4">
<div  v-for="p in review" :key="p.id" class="card mb-3 justify-content-center mx-4 heartbeat" style="max-width: 540px;">

    <div class="col-md-4 m-4">
      <img :src="p.review_img"  lazy="loading" class="img-fluid rounded-start"  width= "300" :alt="p.alt">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title fs-4 mark">{{ p.name }}</h5>
        <p class="card-text ">{{ p.review }}</p>
      </div>
    </div>
  </div>
</div> -->
<div class="container">
<div class="row g-4 m-auto justify-content-center mx-4" v-for="p in review" :key="p.id">
  <div class="col ">
    <div class="card h-100">
      <img :src="p.review_img"  lazy="loading" class="img-fluid rounded-start m-auto"  width= "300" :alt="p.alt">
      <div class="card-body">
        <h5 class="card-title fs-4 mark">{{ p.name }}</h5>
        <p class="card-text">{{ p.review }}</p>
      </div>
    </div>
  </div>
</div>
</div>


</template>

<script>
export default {
  props:['review']

}
</script>
<style scoped>
.card {
  margin-left: 30% !important;
}
.mark {
  background: #57fbb1;
}
</style>