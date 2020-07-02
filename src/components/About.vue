<template>
    <div class="main" >
<div class="about-me">
  <div class="about-text">
 <h1>WHO IS LIV ?</h1>
 <p>Hi! I am Liv a Yoobee Web and UX graduate who loves to create whether it be graphic deisgn, web design/development and everything inbetween. You'll always find me looking for a new challange whether that be in my profession or in hobbies.</p>

  </div>

  <div class="Info">
    <div class="skills-1">
<p>SKILLS</p>
<ul>
  <li>
   Adobe tools 
  </li>
    <li>
   Beginner Javascript
  </li>
    <li>
    SMACCS
  </li>
    <li>
   Advanced HTML & CSS
  </li>
       <li>
 Debugging
  </li>
      <li>
 UX / UI
  </li>
</ul>
    </div>

<hr>
<div class="skills">
<p>INTELLECT</p>
<ul>
  <li>
   Design thinking
  </li>
    <li>
   Design method
  </li>
    <li>
    Devleoper thinking
  </li>
    <li>
   Team work 
  </li>
     <li>
   usability assestment
  </li>
       <li>
   Hardworking
  </li>
  
</ul>
</div>

<hr>
<div class="skills">
<p>EDUCATION</p>
<ul>
  <li>
   Diploma @ Yoobee Web & UX 
  </li>
    <li>
   4.0 GPA 
  </li>
    <li>
  Level 1 / 2 / 3 / 4 / 5  NCEA 
  </li>

</ul>
</div>

<hr>
<div class="skills">
<p>INTERESTS</p>
<ul>
  <li>
   Illustrations
  </li>
    <li>
   Design
  </li>
    <li>
    Skiing
  </li>
    <li>
   Adventure
  </li>

</ul>
</div>

  </div>

  
</div>

<div class="me">
  <div class="me-img">
  <img src="@/assets/portait.png" alt="none">
   </div>

    <div class="me-img">
  <img src="@/assets/me.jpg" alt="none">
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

    </div>
</template>

<script>
export default {
        name: 'About',
}
</script>

<style scoped>

.Info li {
font-family: 'Assistant', sans-serif;
list-style-type: none;
padding: 5px;
}

.Info ul {
  padding-top: 15px;
  padding-left: 100px;
  margin: 0px;
}

.skills {
  display: flex;
}

.skills-1 {
  display: flex;
}

.skills-1 li{
 padding-left: 50px;
}

hr {
  border: solid 1px #F37E85;
}



.about-text {
  padding-left: 50px;
}

.Info {
    padding: 150px 0px 0px 100px;
}

.Info p {
    font-family: 'Bebas Neue', cursive;
    color:#F37E85 ;
    font-size: 40px;
    margin: 0px;
}

.icons {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
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
  width: 50px;
  
}


.me-img img {
  width: 500px;
  padding: 50px 50px 50px 100px;
}

.main {
  display: flex;
  margin-left: 400px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
margin-top: 0px;
padding-left: 50px;
}

.about-me h1 {
  font-family: 'Bebas Neue', cursive;
  color: #96CFF1;
  font-size: 100px;
}

.about-text p {
font-family: 'Assistant', sans-serif;
}

</style>