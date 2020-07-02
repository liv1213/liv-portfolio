
   
 



<template>
    <div>
        <div class="main">
          

<div class="header">
  <div class="head-img">
<img src="@/assets/me.svg" alt="none">
  </div>
 
    <div>
  <p>DEVELOPMENT | DESIGN | CREATIVE</p> 
    </div>

</div>


<div class="image-layout">
<a href="https://www.behance.net/gallery/96834851/Burger-boy"><img id="img-1" src="@/assets/burgerboy.jpg" alt="burger"></a>
<a href="https://www.behance.net/gallery/96841009/Triphub-web-application"><img id="img-1" src="@/assets/work1.jpg" alt="one"></a>
<a href="https://blackestate-assignment.netlify.app/"><img id="img-1" src="@/assets/work2.jpg" alt="burger"></a>
</div>

<div class="image-layout-2">
    <a href="https://www.behance.net/gallery/96839171/Ujoin-app-development"><img id="img-1" src="@/assets/work8.jpg" alt="burger"></a>
<a href="https://www.behance.net/gallery/97480291/BIG-CAT-RESCUE"><img id="img-1" src="@/assets/work5.jpg" alt="burger"></a>
<a href="https://www.behance.net/gallery/96740579/Wasabi-warrior"><img id="img-1" src="@/assets/work7.jpg" alt="burger"></a>
</div>

<div class="image-layout-2">
    <a href="https://www.behance.net/gallery/96834515/Moonrise-kingdom-film-site"><img id="img-1" src="@/assets/work3.jpg" alt="burger"></a>
<a href="https://www.behance.net/gallery/96838915/Black-sabbath-web-design"><img id="img-1" src="@/assets/work6.jpg" alt="burger"></a>
<a href="https://www.behance.net/gallery/96833611/Wanderfy"><img id="img-1" src="@/assets/work4.jpg" alt="burger"></a>

</div>
<div class="image-layout-3">
<a href="https://www.behance.net/gallery/96842545/Theorem-magazine-ideation"><img id="img-1" src="@/assets/work10.jpg" alt="burger"></a>
    <a href="https://www.behance.net/gallery/96834623/Photography-project"><img id="img-1" src="@/assets/work9.jpg" alt="burger"></a>

</div>
        <div class="contact">
<button class="contact-button"><a href="mailto:olivialonsdale1999@gmail.com">CONTACT ME</a></button>
</div>
    </div>
 

   <div class="icons">

     <div class="icon-1">
 <a href="https://www.behance.net/olivialonsdale"><img src="@/assets/behance-logo.png" alt="behance"></a>
     </div>
    <div class="icon-2">
   <a href="https://codepen.io/olivia-lonsdale"><img src="@/assets/codepen.svg" alt="codepen"></a> 
    </div>
      <div class="icon-3">
  <a href="https://github.com/liv1213"><img src="@/assets/github-logo.png" alt="github"></a>
</div>
 
   </div>
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.18/vue.min.js"></script>
    
<script>

export default {
        name: 'Homepage',


}


</script>

<style scoped>
.main a {
  text-decoration: none;
 color: #1b1b1b;
  font-family: 'Assistant', sans-serif;
font-size: 40px;

}

.contact-button {
  background-color: #96CFF1;
  border: none;
    color: black;
    padding: 20px 60px 20px 60px;
    border-radius: 50px;
       box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.contact-button:hover {
  background-color:  #F37E85;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  color: black;
  transform: translateY(-7px);
}



.contact {
  padding-left: 560px;
  padding-top: 100px;
}

.head-img {
  padding-left: 500px;
}

.icons {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
    margin-left: 470px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
margin-top: 0px;
padding-left: 50px;
}

.icon-2 {
  padding-left: 50px;
}

.icon-1 {
  padding-right: 50px;
}

.icon-3 {
  padding-left: 100px;
}


.icons img {
  width: 40px;
}



#img-1{
    padding: 10px;
}

.image-layout {
    display: flex;

}

.image-layout-2 {
    display: flex;
  
}

.image-layout-3 {
    display: flex;
  
}

.main {
  margin-left: 470px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
margin-top: 0px;
padding: 30px 30px 30px 0px;
}

.main img {
 width: 451px;
}

.header {
    margin-bottom: 50px;
   
}

.header p {
  margin-top: 50px;
  margin-bottom: 0px;
text-align: center;
  font-family: 'Assistant', sans-serif;
color: #F37E85;
font-size: 40px;
}




</style>