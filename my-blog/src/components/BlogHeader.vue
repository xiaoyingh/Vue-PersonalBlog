<template>
  <nav id="blog-header">
    <ul>
      <li>
        <router-link to="/" exact>博客</router-link>
        <router-link to="/add" exact>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'blog-header'

  }
</script>

<style scoped>
  #blog-header{
    background: crimson;
    padding: 30px 0;
    margin-bottom:40px;
  }
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li{
    display: block;
    margin: 0 10px;
  }
  a{
    color: #fff;
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;
  }
  .router-link-active{
    background: rgba(255,255,255,0.5);
    color: #444
  }
</style>
