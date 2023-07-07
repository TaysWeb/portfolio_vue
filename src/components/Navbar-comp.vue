<template >
 
<div class="color-change-5x" >

<div class="container p-0">
            <nav class="navbar navbar-expand-md  animate__animated animate__fadeInRight">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">
                    <img src="https://i.postimg.cc/dtNL9m6S/tara-port-logo.png" width="200" class="img-fluid">
                  </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <!--<span class="navbar-toggler-icon"></span>-->
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
</div>

</template>
<script>
export default {
    name : 'navbar',
      props: {
    msg: String
  }
}
</script>
<style scoped>
 nav {
    padding:2.4em ;
 } 
.nav-link {
    font-size: 1.3em;
    color:whitesmoke;
}
 nav-item:last-child {
    padding-right:2em;
 }
 .nav-item{
    padding:0.9em;
 }
.nav-link {
    position: relative;
   z-index:1;
}

.nav-link::after{
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
 .nav-link:hover::after {
    opacity: 1;
    width:100%;
  
}
 
</style>