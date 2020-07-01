<template>
    <div>
<div class="sidenav">

  <div>
     <router-link v-bind:to="'/'"> <h1 class="rainbow-text">LIV LONSDALE</h1></router-link>

  </div>
  <div class="nav-pages">
 <div class="nav-about">
  <router-link v-bind:to="'/about'"> About</router-link>
 </div>
<div class="nav-contact">
   <router-link v-bind:to="'/contact'"> Contact</router-link>
</div>
  </div>


</div>
    </div>
</template>


<script>
 
export default {
    name: 'NavBarSticky',
}
</script>

<style scoped>

.nav-about {
  padding-bottom: 50px;
}

.nav-contact {
  padding-top: 60px;
}

.nav-pages {
  padding-top: 100px;
}

.sidenav img {
  width: 70%;
  text-align: center;
  padding-left: 50px;
}

.sidenav {
  height: 100%;
  width: 400px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #ff3300;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  text-decoration: none;
font-family: 'Bebas Neue', cursive;
  font-size: 90px;
  color: #EB3F24;
  display: block;
  text-align: center;
}

.sidenav a:hover {
  color: white;
}

h1 {
   font-family: 'Oswald', sans-serif;
   font-size: 90px;
   text-align: center;
margin-top: 100px;
}



.rainbow-text {
  background: #CA4246;
  background-color: #CA4246;
  background: conic-gradient(
    #FF475D 16.666%, 
    #FF475D 16.666%, 
    #ffcfc1 33.333%, 
    #ffee58 33.333%, 
    #c4ff56 50%, 
    #ffffff 66.666%, 
    #6bd5f5 66.666%, 
    #71eff8 83.333%, 
    #fd7fec 83.333%);

  background-size: 57%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  
  animation: rainbow-text-animation-rev 0.5s ease forwards;

 
}


.rainbow-text:hover {
  animation: rainbow-text-animation 0.5s ease forwards;
   cursor: pointer;
}


@keyframes rainbow-text-animation {
  0% {
    background-size: 57%;
    background-position: 0 0;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 300%;
    background-position: -9em 1em;
  }
}


@keyframes rainbow-text-animation-rev {
  0% {
    background-size: 300%;
    background-position: -9em 1em;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 57%;
    background-position: 0 0;
  }
}


</style>


