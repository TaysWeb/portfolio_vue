<template>
 <div class="container-lg py-4">
   <div class="row justify-content-center">
      <div class="col-lg-8">
          <div class="section-title text-center">
            <h3 class="fw-bold mb-5 fs-1 text-decoration-underline">About Me <span>🙂</span> </h3>
          </div>
      </div>
    </div>
     
     <div class="row gap-5  g-4">
      <div class="col-md-4">
        <div class="h-100">
          <div class="firstAnimation">
         <div class="secondAnimation">
            <div class="card rounded-3 mx-auto" style="width: 22rem;">
                <img src="https://i.postimg.cc/MKZh3br1/C12-Tara-Snell-2.jpg" width="150" class="card-img-top" alt="Tara-snell">
              </div>
              </div>
            </div>
            </div>
       </div>
       <div class="col-md-6 mt-3 align-self-center gap-4" >
             <p class="text-center fs-4">
                 🦋 I'm a 19 year old UI/UX Designer. Resides in Cape Town born and raised.
                 called M/plain which  <br> i stayed all my life. I'm more of a back end developer.🎵
                  <br>
                  <br>
                   🙃 I'm super determined to finish any challenge any decisions that may come my way <br>
                      and I do not give up easily at all.
                 </p>
     
        
        
            <button class="mt-4 fs-5 mx-2">Checkout Resume
              <span></span>
             </button>
        </div>
          </div>


 </div>
 <footerComp/>
</template>
<script>
import footerComp from '../components/footer-comp.vue'
 export default {
  name: 'about',
  components :{footerComp}
 }
</script>
<style scoped>
.card {
  border: 2px solid rgb(255, 255, 255);
  border-radius: 20px;
}

.card :hover {
  background: rgb(255, 255, 255);
  border: 2px solid rgb(200, 200, 200);
  border-radius: 20px;
  background-color: #dfdfdf;
  transition: all .6s;
}

.secondAnimation {
  --hoverContorno: #985269;
}

.secondAnimation:hover,
.secondAnimation:focus {
  -webkit-animation: cardAnimacion 1.4s;
  animation: cardAnimacion 1.4s;
  box-shadow: 0 0 0 0.8em rgba(255, 255, 255, 0);
  border-radius: 20px;
}

@-webkit-keyframes cardAnimacion {
  0% {
    box-shadow: 0 0 0 0 var(--hoverContorno);
  }
}

@keyframes cardAnimacion {
  0% {
    box-shadow: 0 0 0 0 var(--hoverContorno);
  }
}
button {
  border: none;
  display: block;
  position: relative;
  padding: 0.8em 2.3em;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  margin-right: 20%;
  color: #000;
  z-index: 1;
  font-family: inherit;
  font-weight: 500;
}

button span {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  border: 4px solid coral;
}

button span::before {
  content: "";
  display: block;
  position: absolute;
  width: 8%;
  height: 500%;
  background: var(--lightgray);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-60deg);
  transition: all 0.3s;
}

button:hover span::before {
  transform: translate(-50%, -50%) rotate(-90deg);
  width: 100%;
  background: coral;
}

button:hover {
  color: white;
}

button:active span::before {
  background: #2751cd;
}

</style>