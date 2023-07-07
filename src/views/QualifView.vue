<template>
    <div class="container-fluid py-3">

        <div class="row align-self-end" style="border:2px solid black">
      <div class="col-lg-8">
          <div class="section-title text-center">
            <h3 class="fw-bold mb-5 fs-1 text-decoration-underline">Resume <span>📌</span> </h3>
          </div>
      </div>
      <div class="divider"></div>
      <div class="row justify-content-center">
      <div class="col-lg-4">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt in neque animi,aut esse expedita  aliquid incidunt voluptate iste error quia etaspernatur ab deleniti quae ut ipsam quidem a.</p>
      </div>
    </div>
    </div>
    .
    <!-- Quick bio  -->
    <div class="row" style="border:2px solid black">
    <div class="col-lg-8">
      <h3>A little Summary</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur mollitia quod quidem totam consectetur a!</p>
    </div>
    </div>


</div>

   <resumeComp/>
<footerComp/>
</template>
<script>
import resumeComp from '../components/resume-comp.vue'
import footerComp from '../components/footer-comp.vue'
export default {
 
    components : { resumeComp, footerComp }
}
</script>
<style >
    
</style>