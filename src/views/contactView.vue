<template> 
  <div class="container py-3">
    
    <div class="row justify-content-center py-2 mt-2" >
      <div class="col-lg-8">
          <div class="section-title text-center">
            <h3 class="fw-bold mb-5 fs-1 text-decoration-underline">Contact Me<span>🏷️</span> </h3>
          </div>
      </div>
    </div> 
    <div class="container">
        <div class="card">
  <div class="tools">
    <div class="circle">
      <span class="red box"></span>
    </div>
    <div class="circle">
      <span class="yellow box"></span>
    </div>
    <div class="circle">
      <span class="green box"></span>
    </div>
  </div>
  <div class="card-content">
       
    <form
  action="https://formspree.io/f/xgebrryz"
  method="POST" >

    <div class="form-floating mb-3 col-md-6 m-auto">
  <input type="Name" class="form-control" id="floatingInput validationCustomName" placeholder="eg.Jane Doe" name="name"  required>
  <label for="floatingInput validationCustomName">Name</label>

</div>
<div class="form-floating col-md-6  m-auto">
  <input type="Email" class="form-control" id="floatingEmail validationEmail" placeholder="name@example.com" name="Email"  required>
  <label for="floatingEmail validationEmail">Email</label>
</div>
<div class="form-floating col-md-6 py-3  m-auto">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name="Comment" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
<div class="col-auto">
    <button type="submit" class="btn btn-outline-dark">Submit</button>
  </div>
  </form>
</div>
</div>
</div>
</div>

 
     <EndComp/>
</template>

<script>
import EndComp from '../components/footer-comp'
export default {
    name: 'Contact',
    components :{EndComp}
}
</script>
<style>
.card {
 width: 600px;
 height: 550px;
 margin: 0 auto;
 background-color: #F8FBFE;
 border-radius: 8px;
 z-index: 1;
}

.tools {
 display: flex;
 align-items: center;
 padding: 9px;
}

.circle {
 padding: 0 4px;
}

.box {
 display: inline-block;
 align-items: center;
 width: 10px;
 height: 10px;
 padding: 1px;
 border-radius: 50%;
}

.red {
 background-color: #ff605c;
}

.yellow {
 background-color: #ffbd44;
}

.green {
 background-color: #00ca4e;
}

</style>