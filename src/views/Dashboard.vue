<template>
 <div>
  <ul>
     <li v-for="item in itemlis">{{ item.title }}</li>
   </ul>
 </div>
</template>
 
<script>
import css from '../assets/css/base.css'
import Vue from'vue'
import VueResource from 'vue-resource'
 
Vue.use(VueResource)
export default {
 name: 'HelloWorld',
 
  created:function(){
   this.$http.get('api/seller').then((res)=>{
     var arrJson=JSON.parse(res.bodyText)
     this.itemlis=arrJson.data.list //注意使用箭頭函式才可用this不然需要在函式外先定義變數把this賦值給變數
     console.log(this.itemlis)
   },function(err){
     console.log(err)
   })
  },
  //元件裡面必須用函式，return方式獲取data
 data () {
  return {
   msg: 'Welcome to Your Vue.js App',
   itemlis:[],
  }
 }
}
</script>