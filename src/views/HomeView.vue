<template>
  <header class="color-change-5x">
<div class="container my-5 gap-3" style="position:relative;">
      <div class="row row-3 gap-5">
     		<div  class="col-auto d-flex flex-column align-items-center gap-5 p-4" >
               <div class="row ">
      <div class="col-auto justify-content-start">
       <font-awesome-icon :icon="['fab', 'github']" size="lg"  class="fs-1  animate__animated animate__slideInUp  " style="color:#001;"/>    
      </div>
      </div>

      <div class="row  ">
      <div class="col-auto justify-content-start gap-2">
   
       <font-awesome-icon :icon="['fab', 'twitter']" size="lg" class="fs-1 animate__animated animate__slideInUp" style="color:#001;"/>     
      </div>
      </div>

      <div class="row ">
      <div class="col-auto justify-content-start">
         <font-awesome-icon :icon="['fab', 'linkedin']"  size="lg" class="fs-1  animate__animated animate__slideInUp" style="color:#001;"/>   
      </div>
      </div>
        </div>


    <div class="col-md-7 col-lg-6 d-flex flex-column gap-3 p-4 animate__animated animate__fadeInUpBig" >
     <div class="row pt-3">
     
         <h2 class="m fs-1">Hi,</h2>
         <h2 class="pb-2 fs-1">My name is <span style="color: #bb645b;">Tara</span></h2>
         
         <h2 class="fs-1">I'm a <span style="color: #c1baca;">WeB dEvElOpEr</span></h2>
         <div class=" row justify-content-evenly gap-3 g-1 mx-3">
         <div class="col-auto">
        <a href="" class="pb-1 gap-4" target="_blank" download="CV Tara Robin Snell.pdf" ><button> Download CV
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
        </button></a>
        </div>
           
        <div class="col-auto">
        <router-link to="/"><button class="gap-3">Hire Me</button></router-link>
        </div>
        </div>
      </div>
     </div>

    <div class="col d-flex flex-column align-items-center gap-3 p-4 animate__animated animate__fadeInUpBig">
    <img src="https://i.postimg.cc/DfdywVNT/vivid-designer-illustrator-girl-working-at-her-desk-on-a-tablet.png" class="img-fluid" width="350">
   	</div>


     </div>
</div>
  </header>
  <about-me/>
</template>

<script>
import aboutMe from '../components/about-comp.vue'


export default {
  name: 'HomeView',
  components: {
      aboutMe, 
  }
}
</script>
<style>
header {
    overflow: hidden;
    height:100vh;
}  
header font-awesome-icon {
  position: relative;
}

 header font-awesome-icon::after{
    content: '';
    opacity: 0;
    transition: all 0.2s;
    height: 2px;
    width: 100%;
    background-color:#c84747;
    position: absolute;
    bottom: 0;
    left:0;
}
 header font-awesome-icon:hover::after {
    opacity: 1;
}

header {
    background-color: #8899bc;
}
 header button {
 background-color: #eeeeee;
 border: none;
 padding: 1rem;
 font-size: 1.2rem;
 width: 10em;
 border-radius: 1rem;
 color: lightcoral;
 box-shadow: 0 0.4rem #dfd9d9;
 cursor: pointer;
}

 header button:active {
 color: white;
 box-shadow: 0 0.2rem #dfd9d9;
 transform: translateY(0.2rem);
}

header button:hover:not(:disabled) {
 background: lightcoral;
 color: white;
 text-shadow: 0 0.1rem #bcb4b4;
}

 header button:disabled {
 cursor: auto;
 color: grey;
}
button {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
}



</style>