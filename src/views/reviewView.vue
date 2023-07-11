<template >
    <div v-if="review">
         
        <reviewComp  :review="review"/>
    </div>
    <div v-else>loading</div>
</template>
<script>
import reviewComp from '../components/Review-comp.vue'
export default {
    components :{reviewComp},

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