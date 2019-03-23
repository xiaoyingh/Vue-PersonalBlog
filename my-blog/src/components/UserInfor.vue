<template>
  <div id="user-blog">
   <div class="pf_photo">
      <div class="photo_wrap">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553265708806&di=feac136c4a87f3a5fecf9ebdef1a6a68&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2F7cceab26c8f20f0a.jpg" alt="">
      </div>
   </div>
   <div class="pf_username">
     <h1 class="username">小黄鸭</h1>
   </div>
   <div class="pf_intro">
     <p>世界那么大，想去看看！</p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'user-blog',
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Hemiah","miss wu","miss zhang","Bucky"],
      submmited: false
    }
  },
  methods:{
      // post:function(){
      //     //提交博客的标题 内容
      //     this.$http.post("https://wd4016340257unixuz.wilddogio.com/posts.json",{
      //       title: this.blog.title,
      //       content: this.blog.content,
      //       categories: this.blog.categories,
      //       author: this.blog.author
      //     }).then(function(data){
      //        console.log(data);
      //        this.submmited = true
      //     });
      // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #user-blog{
    margin: 20px auto;
    width: 100%;
    height: 300px;
    overflow: hidden;
    position: relative;
    /* background: url('https://img.t.sinajs.cn/t5/skin/public/profile_cover/001.jpg') no-repeat center; 
    background-size: cover;*/
    background: url('http://k.zol-img.com.cn/dcbbs/14725/a14724463_01000.jpg') no-repeat center;
    background-size: 100% 187%;
    margin-bottom: 0;
  }
  #user-blog *{
    box-sizing: border-box;
  }
  .pf_photo{
    position: relative;
    width: 100px;
    height: 100px;
    margin: 48px auto 0;
    padding: 4px;
    background: #fff;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
  }
  .photo_wrap{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .photo_wrap img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .pf_username{
    margin-top: 6px;
    color: #fff;
    text-align: center;
    text-shadow: 0 0 4px rgba(0,0,0,0.5);
    vertical-align: text-bottom;
  }
  .username{
    font-size: 22px;
    display: inline;
  }
  .pf_intro{
    margin-top: 4px;
    text-align: center;
    color: #fff;
    line-height: 18px;
    text-shadow: 0 0 4px rgba(0,0,0,0.5);
  }

</style>
