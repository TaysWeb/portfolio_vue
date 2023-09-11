<template>
  
  <header class=" fs-5 my-3" >

    <div class="container p-0">
            <nav class="navbar navbar-expand-md  animate__animated animate__fadeInRight">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    <img src="https://i.postimg.cc/dtNL9m6S/tara-port-logo.png" width="200" class="img-fluid">
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                    <i class="fas fa-bars fa-lg " style="color: #fafcff;"></i>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav"> 
                    <div class="mx-auto"></div>
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <router-link to="/" class="nav-link fw-medium">Home</router-link>
                      </li>
                      <li class="nav-item">
                     <router-link to="/about" class="nav-link  fw-medium">About Me</router-link>
                      </li>
                      <li class="nav-item">
                         <router-link to="/resume" class="nav-link  fw-medium">Qualifications</router-link>
                      </li>
                      <li class="nav-item">
                  <router-link to="/projects" class="nav-link  fw-medium">Projects</router-link>
                      </li>
                      <li class="nav-item">
                   <router-link to="/reviews" class="nav-link fw-medium">Reviews</router-link>
                      </li>
                      <li class="nav-item">
                       <router-link to="/contact" class="nav-link fw-medium">Contact Me</router-link>
                      </li>
               
                    </ul>
                  </div>
                </div>
            </nav>
            </div>
<div class="container my-5 gap-3" style="position:relative;">
      <div class="row row-3 gap-5 ">
     		<div  class="col-auto d-flex flex-column align-items-center gap-5 p-4" >
               <div class="row ">
      <div class="col-auto justify-content-start">
       <a  href="https://github.com/TaysWeb"><font-awesome-icon :icon="['fab', 'github']" size="lg" class="fs-1  animate__animated animate__slideInUp " style="color:#001"/></a>
      </div>
      </div>

      <div class="row ">
      <div class="col-auto justify-content-start gap-2">
   
        <a  href="https://twitter.com/Tararobinsnell1"><font-awesome-icon :icon="['fab', 'twitter']" size="lg" class="fs-1 animate__animated animate__slideInUp" style="color:#001;"/></a>   
      </div>
      </div>

      <div class="row ">
      <div class="col-auto justify-content-start">
        <a href="https://www.linkedin.com/in/nigel-baartman-381687217/"><font-awesome-icon :icon="['fab', 'linkedin']"  size="lg" class="fs-1  animate__animated animate__slideInUp" style="color:#001;"/></a> 
      </div>
      </div>
        </div>

     


    <div class="col-md-7 col-lg-6 d-flex flex-column gap-3 p-4 animate__animated animate__fadeInUpBig" >
     <div class="row pt-3 fs-2 my-3" >
     
         <h2 class="m fs-1">Hi,</h2>
         <h2 class="pb-2 fs-1">My name is <span class="cssanimation effect3d sequence" style="color: #e4355b;">Tara</span></h2>
         
         <h2 class="fs-1">I'm a <span class= " cssanimation effect3d sequence" style="color: #e3b210d7;">WeB dEvElOpEr</span></h2>
         <div class=" row justify-content-evenly gap-3 g-1 mx-3 py-3">
         <div class="col-auto">
        <a href="/files/CV_Tara_Robin_Snell_02_26_2023_4_35_36_PM[1].pdf" class="pb-1 gap-4" target="_blank"  ><button> Download CV
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
        </button></a>
        </div>

        <div class="col-auto">
        <router-link to="../views/contactView.vue"><button class="gap-3">Hire Me</button></router-link>
        </div>
        </div>
      </div>
     </div>

    <div class="col d-flex flex-column align-items-center gap-3 p-4 animate__animated animate__fadeInUpBig py-2">
    <img src="https://i.postimg.cc/DfdywVNT/vivid-designer-illustrator-girl-working-at-her-desk-on-a-tablet.png" class="img-fluid" width="350">
   	</div>


     </div>
</div>
  </header>

</template>

<script>



export default {
  name: 'HomeView',

}
</script>
<style>
header {
    overflow: hidden;
    height: 120vh;
    background-image: url('https://i.postimg.cc/YSFMBq2V/low-poly-grid-haikei-2.png') ;

    background-position: center;
  
    background-repeat: no-repeat;
    background-size: cover;
}  
header nav {
    /* padding:2.4em ; */
 } 
 header .nav-link {
    font-size: 1.3em;
    color:whitesmoke;
}
header nav-item:last-child {
    padding-right:2em;
 }
 header .nav-item{
    padding:0.9em;
 }
 header .nav-link {
    position: relative;
   z-index:1;
}
header .nav-link::after{
    content: '';
    z-index:-1;
    opacity: 0;
    transition: all 0.2s;
    padding: 30px 24px 12px ; 
    border-radius: 0.7rem; 
    background-color:#676464;
    position: absolute;
    bottom: 0;
    left:0;
}
header .nav-link:hover::after {
    opacity: 1;
    width:100%; 
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