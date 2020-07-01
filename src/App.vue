<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet">
  <NavBarSticky/> 
<router-view>

</router-view>



        
  </div>
</template>

<script>
import NavBarSticky from './components/NavBarSticky.vue'


export default {
  name: 'App',
  components: {
  NavBarSticky,

}

}
</script>


