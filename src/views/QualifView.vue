<template>
    <div class="container-fluid py-3">

        <div class="row justify-content-center" style="border:2px solid black">
      <div class="col-lg-8">
          <div class="section-title text-center">
            <h3 class="fw-bold mb-5 fs-1 text-decoration-underline">Resume <span>📌</span> </h3>
          </div>
      </div>
      <div class="divider"></div>

      <button @click="getpost">Show</button>
      <hr>
      <div v-for="p in post" :key="p.id" >
          <h2>{{p.id}} - {{p.title}}</h2>
      </div>
    </div>
</div>  <!--end of container-->

   <resumeComp/>
<EndComp/>
</template>
<script>
import resumeComp from '../components/resume-comp.vue'
import EndComp from '../components/footer-comp.vue'
export default {
 
    components : { resumeComp, EndComp},
    data() {
      return {
        post:{}
      }
    },
    methods: {
      getPost() {
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json =>this.post = data)
      }
    },
}
</script>
<style >
    
</style>