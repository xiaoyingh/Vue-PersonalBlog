/**
 * Created by Administrator on 2018/3/11 0011.
 */
import ShowBlog from './components/ShowBlog.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import EditBlog from './components/EditBlog.vue'

//设置路由跳转的路径
export default[
  {path:"/",component: ShowBlog},
  {path:"/add",component: AddBlog},
  {path:"/blog/:id",component: SingleBlog},
  {path:"/edit/:id",component: EditBlog}
]
