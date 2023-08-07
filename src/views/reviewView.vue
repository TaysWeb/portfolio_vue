<template >
    <div class="container py-3">

        <div class="row justify-content-center py-2 mt-2" >
      <div class="col-lg-8">
          <div class="section-title text-center">
            <h3 class="fw-bold mb-5 fs-1 text-decoration-underline">Reviews<span>🫂</span> </h3>
          </div>
      </div>
    </div> 
    
        <div class="row justify-content-center" >
    <div v-if="review">
        <reviewComp  :review="review"/>
    </div>
    <div v-else>loading</div>
   </div>
</div>
<EndComp/>
</template>
<script>
import reviewComp from '../components/Review-comp.vue'
import EndComp from '../components/footer-comp.vue'
export default {
    components :{ reviewComp, EndComp },

    computed: {
        review() {
            return this.$store.state.review
        }
    },
    mounted() {
        return this.$store.dispatch('fetchreview');
    }
}
</script>
<style>
    
</style>