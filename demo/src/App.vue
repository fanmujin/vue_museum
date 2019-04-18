<template>

  <div id="app">
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px;color: #e9e9eb"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>登录</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>Admin</span>
      </el-header>
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu
            default-active="/Admin"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router="">
            <el-menu-item index="/Admin">
              <template slot="title">
                <i class="el-icon-service"></i>
                <span>管理员</span></template>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>名俗管理</span>
              </template>
              <el-menu-item index="/cultureType">名俗类别</el-menu-item>
              <el-menu-item index="/culture">名俗详情</el-menu-item>
              <el-menu-item index="/addres">名俗地理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>通知管理</span>
              </template>
              <el-menu-item index="/new">最新消息</el-menu-item>
              <el-menu-item index="/display">展览动态</el-menu-item>
              <el-menu-item index="/digital">网上展厅</el-menu-item>
            </el-submenu>
            <el-menu-item index="/music">
              <template slot="title">
                <i class="el-icon-picture"></i>
                <span>音像管理</span></template>
            </el-menu-item>

            <el-menu-item index="/report">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>学术报告</span></template>
            </el-menu-item>

            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>系统配置</span>
              </template>
              <el-menu-item index="1-1">相关网站</el-menu-item>
              <el-menu-item index="1-2">联系信息</el-menu-item>
              <el-menu-item index="1-3">版本管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="7">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>学术报告</span></template>
            </el-menu-item>

            <el-menu-item index="8">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>学术报告</span></template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      }
    },
    methods:{
      adminon: function () {
        alert("success")
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
<style>
  .el-header {
    background-color: #606266;
    color:  #e9e9eb;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .router-link-active {
    text-decoration: none;
    color:#ffd04b;
  }
</style>
