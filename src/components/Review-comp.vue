<template>

<div  v-for="p in review" :key="p.id" class="card mb-3 justify-content-center mx-4 heartbeat" style="max-width: 540px;">
  <div class="row g-1 justify-content-center ">
    <div class="col-md-4 m-4">
      <img :src="p.review_img"  lazy="loading" class="img-fluid rounded-start" :alt="p.alt">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title fs-4 mark">{{ p.name }}</h5>
        <p class="card-text ">{{ p.review }}</p>
      </div>
    </div>
  </div>
</div>
  <!-- <div v-for="p in review" :key="p.id">
    <p>{{ p.name }}</p>
    <p>{{ p.review }}</p>
  </div> -->

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