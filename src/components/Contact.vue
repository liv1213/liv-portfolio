<template>
    <div class="main" >
<h1>Lets create something incredible!</h1>
<p>If you are interested in my work and want to know more, or want to work with me contact me .....</p>
<a href="mailto:olivialonsdale1999@gmail.com">olivialonsdale1999@gmail.com</a>
<p>To view my CV and more detailed case studies check me out on behnace</p>
<div class="icons">
   <a href="https://www.behance.net/olivialonsdale"><img src="@/assets/behance-logo.png" alt="behance"></a>
    <a href="https://github.com/liv1213"><img src="@/assets/github-logo.png" alt="github"></a>
</div>

    </div>
</template>

<script>
export default {
        name: 'Contact',
}
</script>

<style scoped>

.icons img {
  width: 50px;
}

.main {
  margin-left: 400px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
margin-top: 0px;
padding-left: 50px;
}

.main h1 {
   font-family: 'Bebas Neue', cursive;
  color: #EB3F24;
}

.main p {
 font-family: 'Raleway', sans-serif;
}

.main a {
  text-decoration: none;
 color: #EB3F24;
  font-family: 'Raleway', sans-serif;

}


</style>