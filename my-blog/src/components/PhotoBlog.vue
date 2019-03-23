<template>
  <div v-theme:column="'narrow'" id="photo-blog">
    
  </div>
</template>

<script>
  export default {
    name: 'photo-blog',
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

    }
    

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #photo-blog{
    max-width:1000px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.15);
  }
  
</style>
