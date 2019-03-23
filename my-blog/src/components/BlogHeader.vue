<template>
  <nav id="blog-header">
    <ul>
      <li>
        <router-link to="/" exact>主页</router-link>
        <router-link to="/photo" exact>相册</router-link>
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
    padding: 10px 0;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    background: #fff;
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
    color: #333;
    padding: 9px;
    text-decoration: none;
    margin: 0 50px;
  }
  .router-link-active{
    border-bottom: 2px solid #f7691d;
  }
</style>
