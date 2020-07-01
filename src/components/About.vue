<template>
    <div class="main" >
<div class="about-me">
  <div class="about-text">
 <h1>WHO AM LIV ?</h1>
 <p>Hi! I am Liv a Yoobee Web and UX graduate who loves to create whether it be graphic deisgn, web design/development and everything inbetween. You'll always find me looking for a new challange whether that be in my profession or in hobbies.</p>

 <div class="Cv-info">

 </div>

  </div>

   <div class="icons">
     <div class="icon-1">
 <a href="https://www.behance.net/olivialonsdale"><img src="@/assets/behance-logo.png" alt="behance"></a>
     </div>
    <div class="icon-2">
   <a href="https://codepen.io/olivia-lonsdale"><img src="@/assets/codepen.svg" alt="codepen"></a> 
    </div>
 
   </div>
</div>

<div class="about-img">
  
<img src="@/assets/me.jpg" alt="me">
</div>
    </div>
</template>

<script>
export default {
        name: 'About',
}
</script>

<style scoped>

.about-text {
  padding-left: 50px;
}

.icons {
  display: flex;
  justify-content: center;
  padding-top: 630px;
}

.icon-2 {
  padding-left: 50px;
}

.icon-1 {
  padding-right: 50px;
}


.icons img {
  width: 50px;
}


.about-img img {
  width: 710px;
}

.main {
  display: flex;
  margin-left: 400px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
margin-top: 0px;
}

.about-me h1 {
  font-family: 'Bebas Neue', cursive;
  color: #EB3F24;
}

.about-me p {
  font-family: 'Raleway', sans-serif;
}

</style>