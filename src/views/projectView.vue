<template >

  <div class="container py-3">
    
    <div class="row justify-content-center py-2 mt-2" >
      <div class="col-lg-8">
          <div class="section-title text-center">
            <h3 class="fw-bold mb-5 fs-1 text-decoration-underline"> My Projects<span>🧠</span> </h3>
          </div>
      </div> 
    </div> 

    <div class="row justify-content-md-center py-4">
        <div class="col-md-6 g-5">
        <div v-if="projects">
      <projComp :projects= "projects"/>
    </div>
    <div v-else>Just a moment ...</div>
    </div>
    <!-- <div class="col-md-6">
        <div v-if="projects">
      <projComp :projects= "projects"/>
    </div>
    <div v-else>Just a moment ...</div>
    </div> -->
</div>

  </div>
    

</template>
<script>
import projComp from '../components/proj-comp.vue'
export default {
    components:{projComp},
    computed: {
      projects() {
            return this.$store.state.projects
        },
    },
    mounted() {
      
        return this.$store.dispatch('fetchProjects');

    },
}
</script>
<style >
   
</style>