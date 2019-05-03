<template>
  <div>
    <button v-on:click="get">
      连接测试
    </button>
    <button v-on:click="get2">连接8080服务端口</button>
    <button v-on:click="get3">连接后台TXT</button>
  </div>
</template>
<script>
  import Axios from 'axios';
export default {
  methods:{
    get:function () {
      alert("123")
    },
    get2(){
      Axios.get('http://localhost:8080/culture/test').then(function (res) {
          console.log(res)
          alert("Success")
        }).catch(function (err) {
          console.log(err)
          alert("error")
        })
    },
    get3(){
      Axios.get('demo/static/a.txt').then(function (res) {
        console.log(res)
        alert("success")
      }).catch(function (err) {
        console.log(err)
        alert("error")
      })
    }
  }
}
</script>
