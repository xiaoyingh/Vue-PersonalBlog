<template>
  <div v-theme:column="'narrow'" id="show-blog">
    <div class="blogNav">
      <a href="">全部</a>
      <a href="">热门</a>
      <input type="text" v-model="search" placeholder="search 搜索">
    </div>
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>
        <!--{{blog.content | snippet}}-->
        {{blog.content}}
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'show-blog',
    data() {
      return {
        blogs: [],
        search: ""
      }
    },
    created(){
        this.$http.get("https://wd4016340257unixuz.wilddogio.com/posts.json")
          .then(function(data){
            //console.log(data.json());
            return data.json();
        })
          .then(function(data){
            var blogsArray = [];
             for(let key in data){
                //console.log(key);
               //console.log(data[key]);
               data[key].id = key;
               //console.log(data[key]);
               blogsArray.push(data[key]);
             }
             //console.log(blogsArray);
            this.blogs = blogsArray;
          })
    },
    computed:{
        filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            })
        }
    },
    //局部当前组件 自定义过滤器
    filters:{
//      "to-uppercase":function(value){
//        return value.toUpperCase();
//      }
      "toUppercase":function(value){
        return value.toUpperCase();
      },
      "snippet":function(value){
        //return value.slice(0,10) + "...";
      }

    },
    //自定义 指令
    directives:{
      "rainbow":{
          bind(el,binding,vnode){
            el.style.color = "#" + Math.random().toString(16).slice(2,8);
          }
      },
      "theme":{
        bind(el,binding,vnode){
          if(binding.value == "wide"){
            el.style.maxWidth = "1260px";
          }else if(binding.value == "narrow"){
            el.style.maxWidth = "560px";
          }

          if(binding.arg == 'column'){
            el.style.background = "#fff";
            el.style.padding = '20px';
          }
        }
      },
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #show-blog{
    width:560px;
    margin: 0 auto;
    background: #fff;
    float: right;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.15);
  }
  .blogNav{
    width: 100%;
    height: 38px;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0,0,0,0.2);
    background-color: #f2f2f5;
  }
  .blogNav a{
    float: left;
    padding: 0 30px;
    line-height: 36px;
  }
  .blogNav a.blogNavActive{
    background: #fff;
    border-bottom: 2px solid #f7691d;
  }
  .blogNav input{
    float: right;
    width: 200px;
    height: 24px;
    padding: 0 46px 0 10px;
    color: #333;
    margin-top: 5px;
    margin-right: 5px;
   }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
  a{
    display: block;
    text-decoration: none;
  }
</style>
