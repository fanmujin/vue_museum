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
            width="120">
          </el-table-column>
          <el-table-column
            prop="musicName"
            label="音像名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="description"
            label="描述"
            width="180">
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型名称">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="updateTime"
            label="修改时间">
          </el-table-column>
          <el-table-column
            prop="createUser"
            label="创建人">
          </el-table-column>
          <el-table-column
            prop="updateUser"
            label="修改人">
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
          id: '1',
          musicName: '牡丹',
          description: '',
          type:'曲艺',
          createTime: '2019-03-18',
          updateTime: '2019-04-18',
          createUser:'王小虎',
          updateUser:'Admin'
        } ,{
          id: '2',
          musicName: '豫剧',
          description: '',
          type:'曲艺',
          createTime: '2019-03-18',
          updateTime: '2019-04-18',
          createUser:'王小虎',
          updateUser:'Admin'
        },
          {
            id: '3',
            musicName: '评析',
            description: '',
            type:'曲艺',
            createTime: '2019-03-18',
            updateTime: '2019-04-18',
            createUser:'王小虎',
            updateUser:'Admin'
          },{
            id: '4',
            musicName: '小调',
            description: '',
            type:'曲艺',
            createTime: '2019-03-18',
            updateTime: '2019-04-18',
            createUser:'王小虎',
            updateUser:'Admin'
          }
        ]
      }
    }
  }
</script>
<style>
  .el-row {
    margin-bottom: 20px;
  }
</style>
