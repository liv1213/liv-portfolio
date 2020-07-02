<template>
    <div class="main">
      <div>
<div class="contact-img">
  <img src="@/assets/mobile.png" alt="">
  <h1>Lets create something incredible!</h1>

</div>
    


<div class="contact">
<button class="contact-button"><a href="mailto:olivialonsdale1999@gmail.com">CONTACT ME</a></button>


  </div>
  <div class="icon-location">
  <p>Behance / Codepen / Github</p>
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
        name: 'Contact',
}
</script>

<style scoped>
.contact-img  {
  display: flex;
  
}

.contact-img img {
width: 20%;
padding-left: 100px;
padding-top: 50px;
}


.icon-location {
  text-align: center;
  padding-top: 50px;
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
  padding-left: 550px;
  padding-top: 200px;
}

.icons {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 50px;
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



.main {
  margin-left: 400px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
margin-top: 0px;
padding-left: 50px;
}

.main h1 {
  font-family: 'Bebas Neue', cursive;
  color: #96CFF1;
  font-size: 100px;
  text-align: center;
  padding-top: 150px;
  margin: 0px;
}

.main p {
 font-family: 'Assistant', sans-serif;
 font-size: 25px;

}

.main a {
  text-decoration: none;
 color: #1b1b1b;
  font-family: 'Assistant', sans-serif;
font-size: 40px;

}


</style>