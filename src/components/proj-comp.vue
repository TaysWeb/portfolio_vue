<template >

 <div class="card-group">
  <div class="card me-4 " v-for="pro in projects" :key="pro.id" >
    <img :src="pro.image_url" class="card-img" :alt="pro.alt" >
    <div class="card-body">
      <h5 class="card-title fs-3 text-decoration-underline">{{ pro.name }}</h5>
      <p class="card-text"> </p>
      <h4>Languages Used : {{ pro.tools_used }}</h4>
      <button type="button" href="https://github.com/TaysWeb" class="btn btn-success">Github Link </button>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">{{ pro.date }}</small>
    </div>
  </div>
</div>

</template>

<script>


export default {
    props :['projects'],

}
</script>
<style scoped>
 .card{
  position: relative;
    height:auto;
  border-radius: 10px; 

 overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
} 

.card img { 
  width: auto;
  height:19rem; 
 fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content button{ 
  transform: rotateX(0deg);
} 


</style>