<template>
  <div id="single-blog">
     <h1>{{blog.title}}</h1>
    <article>
      {{blog.content}}
    </article>
    <p>作者：{{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories">{{category}}</li>
    </ul>
    <button @click="deleteSingleBlog()">删除</button>
    <router-link :to="'/edit/'+id">编辑</router-link>
  </div>
</template>

<script>
  export default{
    name: 'single-blog',
    data: function(){
        return {
          id: this.$route.params.id,
          blog:{}
        }
    },
    created(){
//        this.$http.get('https://wd4016340257unixuz.wilddogio.com/posts/'+this.id)
//          .then(function(data){
//              console.log(data);
//              this.blog = data.body;
//          })
      //从firebase或者wilddog建的服务器上请求数据
      this.$http.get('https://wd4016340257unixuz.wilddogio.com/posts/'+this.id+".json")
        .then(function(data){
          console.log(data.json());
          return data.json(); //转换一下数组 返回
        })
        .then(function(data){
            //接收返回的 数组数据 赋值给blog
            console.log(data);
            this.blog = data;
        })

    },
    methods:{
      deleteSingleBlog(){
        this.$router.push({path: '/'})
        this.$http.delete('https://wd4016340257unixuz.wilddogio.com/posts/'+this.id+".json")
         .then(response=>{
         //删除成功后 跳转到根页面
         this.$router.push({path: '/'})

         })

      }
    }
  }
</script>

<style scoped>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
  }
</style>
