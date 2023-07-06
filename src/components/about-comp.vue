<template>
 <div class="container-lg py-4">
   <div class="row justify-content-center">
      <div class="col-lg-8">
          <div class="section-title text-center">
            <h3 class="fw-bold mb-5 fs-1 text-decoration-underline">About Me <span>🙂</span> </h3>
          </div>
      </div>
    </div>
     
     <div class="row">
      <div class="col-md-4">
        <div class="h-100">
            <div class="card rounded-3" style="width: 22rem;">
                <img src="https://i.postimg.cc/MKZh3br1/C12-Tara-Snell-2.jpg" width="150" class="card-img-top" alt="Tara-snell">
              </div>
            </div>
       </div>
       <div class="col-md-6 mt-3 align-self-center">
             <p class="text-center fs-4">
                 🦋 I'm a 19 year old UI/UX Designer. Resides in Cape Town born and raised.
                  I recently moved to delft in january 2023 from a small suburb <br>called
                   M/plain which i stayed all my life.Im more of a back end developer.🎵💫

                  <br>
                  <br>
                   🙃 I'm super determined to finish any challenge any decisions that may come my way <br>
                      and I do not give up easily at all.
                 </p>
        </div>
     </div>

 </div>
</template>
<script>
 export default {
    
 }
</script>
<style scoped>


.card::after {
  content: " More Info";
  padding-top: 1.25em;
  padding-left: 1.25em;
  position: absolute;
  left: 0;
  bottom: -60px;
  background: #00AC7C;
  color: #fff;
  height: 2.5em;
  width: 90%;
  transition: all 80ms;
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0;
}
.card:hover::after {
  bottom: 0;
  opacity: 1;
}

.card:active {
  transform: scale(0.98);
}

.card:active::after {
  content: " ";
  height: 50rem;
}
</style>