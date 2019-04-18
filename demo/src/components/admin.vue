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
      <el-col :span="2"><div><el-button type="primary" icon="el-icon-search" @click="get">搜索</el-button></div></el-col>
    </el-row>

    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="500"
      stripe>
      <el-table-column
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column
        fixed
        prop="id"
        label="ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="150">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="联系方式"
        width="120">
      </el-table-column>
      <el-table-column
        prop="creatTime"
        label="创建时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="更新时间"
        width="120">
      </el-table-column>
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
    </el-table>
</div>
</template>
<script>
  import axios from 'axios'
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
       get(){
         axios.get('b.txt')
           .then(function (res) {
             alert("successMessage");
         }).catch(function (err) {
           alert("error");
         })
       }
      },
    data() {
      return {
        input: '',
        tableData: [{
          id: '1',
          name: '王小虎',
          email: '123456@163.com',
          tel: '14563289422',
          creatTime: '2019-03-18',
          updateTime: '2019-04-18'},
          {
            id: '2',
            name: '王小虎',
            email: '123456@163.com',
            tel: '14563289422',
            creatTime: '2019-03-18',
            updateTime: '2019-04-18'}
            ,{
            id: '3',
            name: '王小虎',
            email: '123456@163.com',
            tel: '14563289422',
            creatTime: '2019-03-18',
            updateTime: '2019-04-18'}
        ]
      }
    }
  }
</script>
