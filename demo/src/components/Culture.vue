<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6"><div> <el-input
        size="30"
        placeholder="请输入内容"
        v-model="input"
        clearable
      >
      </el-input>
      </div></el-col>
      <el-col :span="2"><div><el-button type="primary" icon="el-icon-search" >搜索</el-button></div></el-col>
    </el-row>
    <el-row >
      <div style="text-align: left">
        <el-button type="primary" icon="el-icon-search">查询</el-button>
        <el-button type="success" icon="el-icon-edit">修改</el-button>
        <el-button type="danger" icon="el-icon-delete">删除</el-button>
      </div>
    </el-row>
    <div>
      <template>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            type="selection"
            width="55"
          ></el-table-column>
          <el-table-column
            fixed
            prop="id"
            label="ID"
            width="80">
          </el-table-column>
          <el-table-column
            prop="cultureName"
            label="名俗名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="type"
            label="名俗类别"
            width="80">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="120">
          </el-table-column>
          <el-table-column
            prop="description"
            label="详情描述"
            width="180">
          </el-table-column>
          <el-table-column
            prop="level"
            label="级别"
            width="80">
          </el-table-column>
          <el-table-column
            prop="picture"
            label="图片信息"
            width="180">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间"
          width="120">
          </el-table-column>
          <el-table-column
            prop="updateTime"
            label="修改时间"
          width="120">
          </el-table-column>
          <el-table-column
            prop="createUser"
            label="创建人"
          width="120">
          </el-table-column>
          <el-table-column
            prop="updateUser"
            label="修改人"
          width="120">
          </el-table-column>
        </el-table>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </template>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        input: '',
        tableData: [{
          id:'1',
          cultureName:'牡丹',
          type:'名植',
          address:'洛阳',
          description:'起源于',
          level:'市级',
          picture:'',
          createTime:'2019-03-18',
          updateTime:'2019-04-18',
          createUser:'王小虎',
          updateUser:'Admin'
        }
        ]
      }
    },
    methods:{
      get: function(){
        this.$http.post('http://localhost:8080/culture/test').then(function (res) {
          console.log(res)//返回很多数据，比如URL ，data，code
          console.log(res.data)//返回json数据
          console.log(res.data.message)//返回json中的对象信息
        }).catch(function (err) {
          console.log(err)
          alert("error")
        })
      }
      }
    }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
  }
</style>
