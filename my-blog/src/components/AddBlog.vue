<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submmited">

      <label for="">博客标题</label>
      <input type="text" v-model="blog.title" required />
      <br>
      <label for="">博客内容</label>
      <textarea v-model="blog.content" name=""></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular4</label>
        <input type="checkbox" value="Angular4" v-model="blog.categories">
      </div>
      <label>作者：</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>

    </form>
    <div v-if="submmited">
      <h3>您的博客发布成功</h3>
    </div>
    <div class="bar"></div>

    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'add-blog',
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
      post:function(){
          //提交博客的标题 内容
          this.$http.post("https://wd4016340257unixuz.wilddogio.com/posts.json",{
            title: this.blog.title,
            content: this.blog.content,
            categories: this.blog.categories,
            author: this.blog.author
          }).then(function(data){
             console.log(data);
             this.submmited = true
          });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #add-blog{
    margin: 20px auto;
    max-width:600px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.15);
  }
  #add-blog *{
    box-sizing: border-box;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  textarea{
    height:200px;
  }
  #checkboxes label{
    display: inline-block;
    margin-top: 0;
  }
  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
  button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: white;
    border: 0;
    padding: 14px;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
  }
  #preview{
    padding: 10px 20px;
    border: 1px solid #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
  .bar{
    margin-top: 20px;
    border-bottom:2px solid #333;
  }
</style>
