<template>
  <div id="app">
    <div class="headerTop">
      <user-infor></user-infor>
      <blog-header></blog-header>
    </div>
    <router-view></router-view>
    <!--<add-blog></add-blog>-->
    <!--<show-blog></show-blog>-->
    <!-- <photo-blog></photo-blog> -->
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import BlogHeader from './components/BlogHeader'
import UserInfor from './components/UserInfor'
import PhotoBlog from './components/PhotoBlog'
export default {
  name: 'app',
  components: {
    AddBlog,ShowBlog,BlogHeader,UserInfor,PhotoBlog
  },
  computed:{
    
  }
}
</script>
<style scoped>
.headerTop{
  margin-bottom: 20px;
}
</style>