 <template>
     <NavbarComp/>
   <div class="container-fluid">

        <div class="row justify-content-center py-2 mt-2" >
      <div class="col-lg-8">
          <div class="section-title text-center">
            <h3 class="fw-bold mb-5 fs-1 text-decoration-underline">Resume <span>📌</span> </h3>
          </div>
      </div>
      <div class="divider"></div>      
    </div>

    <div class="row justify-content-center py-2" >
      <div class="col-lg-8">
    <p class="text-muted fs-5">
  Hi, there little human Welcome to my Resume hope you see something that catches your eye🙃🥺
</p>
</div>
</div>

    <div class="row  m-5">
    <div class="col-md-6" >
      <div v-if="education">
      <eduComp :education= "education"/>
    </div>
    <div v-else>Just a moment ...</div>
  </div>

    <div class="col-md-6" >
    <div v-if="experience">
      <expComp :experience= "experience"/>
    </div>
    <div class="row">
      <eduComp :Education="Education"/>
</div>
</div>


<div class="row justify-content-center py-2" >
      <div class="col-md-6 mb-3">
    <button to="/src/views/projectView.vue">Check Out My Work !</button>
</div>
</div>
</div>
</div>  <!--end of container-->

<EndComp/>


</template>
<script>
import NavbarComp from '@/components/Navbar-comp.vue'
import eduComp from '../components/Edu-comp.vue'
import expComp from '../components/exp-Comp.vue'
import EndComp from '../components/footer-comp.vue'
export default {

    components: {
      NavbarComp, eduComp,EndComp,expComp,
    },
    
    computed: {
      education() {
            return this.$store.state.education
        },
      experience() {
            return this.$store.state.experience
        }
    },
    mounted() {
      {
        return this.$store.dispatch('fetchEducation'),
              this.$store.dispatch('fetchExperience');
      }
    },
  



}
</script>
<style scoped>
  button {
  --bg: #e74c3c;
  --text-color: #fff;
  position: relative;
  width: 300px;
  border: none;
  background: var(--bg);
  color: var(--text-color);
  padding: 1em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.2s;
  border-radius: 5px;
  opacity: 0.8;
  letter-spacing: 1px;
  box-shadow: #d55d50 0px 7px 2px, #000 0px 8px 5px;
}

button:hover {
  opacity: 1;
}

button:active {
  top: 4px;
  box-shadow: #e7a7a0 0px 3px 2px,#000 0px 3px 5px;
}
</style> 