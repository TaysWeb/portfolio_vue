 <template>
      <div v-if="Education">
    <div class="container-fluid py-3">

        <div class="row justify-content-center" style="border:2px solid black">
      <div class="col-lg-8">
          <div class="section-title text-center">
            <h3 class="fw-bold mb-5 fs-1 text-decoration-underline">Resume <span>📌</span> </h3>
          </div>
      </div>
      <div class="divider"></div>    
    </div>
    <div class="row">
      <eduComp :Education="Education"/>
</div>
</div> 

  
<EndComp/>
</div>
<div v-else>Just a moment ...</div>
</template>
<script>
import eduComp from '../components/Edu-comp.vue'
import EndComp from '../components/footer-comp.vue'
export default {
 

    components: {
      eduComp,EndComp,
    }

}
</script>
<style >
    
</style> 