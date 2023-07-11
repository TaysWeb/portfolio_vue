 <template>
      <div v-if="Education">
    <div class="container-fluid py-3">

        <div class="row justify-content-center" style="border:2px solid black">
      <div class="col-lg-8">
          <div class="section-title text-center">
            <h3 class="fw-bold mb-5 fs-1 text-decoration-underline">Resume <span>📌</span> </h3>
          </div>
      </div>
<<<<<<< HEAD
      <div class="divider"></div>

      <button @click="getpost">Show</button>
      <hr>
      <div v-for="p in post" :key="p.id" >
          <h2>{{p.id}} - {{p.title}}</h2>
      </div>
=======
      <div class="divider"></div>    
>>>>>>> 472fb45246979c96f11dd32ec5c0c2daa628823e
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
 
<<<<<<< HEAD
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
=======

    components: {
      eduComp,EndComp,
    }

>>>>>>> 472fb45246979c96f11dd32ec5c0c2daa628823e
}
</script>
<style >
    
</style> 