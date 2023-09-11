<template >
   <NavbarComp/>
  <div class="container py-3">
    
    <div class="row justify-content-center py-2 mt-2" >
      <div class="col-lg-8">
          <div class="section-title text-center">
            <h3 class="fw-bold mb-5 fs-1 text-decoration-underline"> My Projects<span>🧠</span> </h3>
          </div>
      </div> 
    </div> 

    <div class="row justify-content-md-center py-3 g-3">
      
        <div v-if="projects">
      <projComp :projects= "projects"/>
    </div>
    <div v-else>Just a moment ...</div>

   
</div>

  </div>
    <footerComp/>

</template>
<script>
import NavbarComp from '@/components/Navbar-comp.vue';
import projComp from '../components/proj-comp.vue';
import footerComp from '@/components/footer-comp.vue';
export default {
    components:{NavbarComp,projComp, footerComp},
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