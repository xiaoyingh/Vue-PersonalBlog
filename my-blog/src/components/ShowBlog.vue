<template>
  <div v-theme:column="'narrow'" id="show-blog">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="search 搜索">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>
        {{blog.body | snippet}}
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
        this.$http.get("../../static/posts.json")
          .then(function(data){
            //console.log(data);
              this.blogs = data.body.slice(0,10);
            console.log(this.blogs);
        });
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
        return value.slice(0,100) + "...";
      },

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
            el.style.background = "#6677cc";
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
    max-width:800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }

</style>
