<template>
  <div class="dashboard"> 
    <el-row>
      <el-col class="menu" :span="4">
        <div class="overlay">
          <div style="padding: 20px; font-size: 18px; font-weight: 600; text-align: left"><i style="margin-right: 20px; font-size: 25px" class="el-icon-menu"></i>DASHBOARD</div>
          <div class="divider"></div>
          <div class=user>Gia Văn</div>
          <div class="divider"></div>
          <div class="sidebar-content" @click ="userManagement"><i class="el-icon-s-custom icon"></i>User Management</div>
          
          
          
          <div @click ="logOut" class="sidebar-content" ><i class="el-icon-switch-button icon"></i>Log Out</div>
        </div>
      </el-col>

      <el-col style="background-color: #eee; overflow: auto" :span="20">

        <router-view/>
      </el-col>
    </el-row>
  </div>
    
</template>

<script>
export default {
    data(){
        return {
           
        }
    },
     methods: {
      async userManagement() {
        this.$router.push("/dashboard/management").catch(error => {
          if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation to current location')) {
            console.log(error)
          }
        })
      },
      logOut() {
        this.$router.push('/')
      },
    },
    computed: {
      // user(){
      //     return this.$store.state.user
      //   },
      // orderList() {
      //     return this.$store.state.orders;
      // },
      // countNewOrder(){
      //   return this.orderList.filter(x => x.status == "New").length
      // },
      
    },

    
    
}
</script>

<style>
    
</style>

<style scoped>
  .user {
    padding: 20px;
    text-align: left;
  }
  .nav {
    text-align: right;
    margin: 0 auto;
    width: 95%;
    padding: 20px 0
  }
  .nav .icon {
    font-size: 20px;
    cursor: pointer;
  }
  .sidebar-content .icon {
    margin-right: 20px;
    font-size: 25px
  }
  .menu {
     height: 100vh;
     background: url(../assets/sidebar.jpeg);
     color: white;
     background-position: bottom;
     background-size: cover;
     font-size: 14px;
  }
  .sidebar-content {
    padding: 20px;
    cursor: pointer;
    text-align: left;
  }
  .sidebar-content:hover {
    background: rgba(0,0,0,0.2);
  }
  .overlay {
    background: rgba(0,0,0, 0.7);
    height: 100vh;
  }
  .divider {
    border: 1px solid hsla(0,0%,70.6%,0.3);
    margin: 0 15px;
  }
</style>