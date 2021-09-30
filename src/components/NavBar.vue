<template>
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a v-if="userRole == 'user'" class="right">User Tab</a>
  <a v-if="userRole == 'admin'" class="right">Admin Tab</a>
</div>
<div>
  <form>
  <div class="box">
  <h1>Dashboard</h1>

  <input type="email" name="email" 
      class="email"
      v-model="email" />
    
  <input type="password" name="email"
    class="email" 
    v-model="password" />
    
  <a @click="login"><div class="btn">Sign In</div></a> <!-- End Btn -->

    
  </div> <!-- End Box -->
    
  <p>user@user.com ile normal user girisi</p>
  <p>admin@admin.com ile admin girisi</p>
  <p>sifre gerekli degil</p>
  </form>
</div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'NavBar',
    data() {
    return {
      email: 'email',
      password: 'password',
      userRole: null
    }
  },
  mounted() {
  },
  created() {
  },
  methods: {
    login() {
      var vm = this
      const data = {email: this.email, password: this.password}
      console.log(data)
      // axios.post('http://localhost:5000/login', data)
      axios.post('https://depaulitest.herokuapp.com/login', data)
        .then(function (response) {
          console.log(response.data);
          const user = response.data
          vm.userRole = user.role
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  }
}
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

.right {
  float: right !important;
  margin-left: 30px;
  margin-right: 30px;
  background: #fc7f03;
}

.form input {
  display: inline-block;
  width: 200px;
}

p{
  font-size:18px;
  text-decoration: none;
  color: #525252;
}

h1{
  font-size:1.5em;
  color:#525252;
}

.box{
  background:white;
  width:300px;
  border-radius:6px;
  margin: 20px auto 0 auto;
  padding:0px 0px 70px 0px;
  border: #2980b9 4px solid; 
}

.email{
  background:#ecf0f1;
  border: #ccc 1px solid;
  border-bottom: #ccc 2px solid;
  padding: 8px;
  width:250px;
  color:#AAAAAA;
  margin-top:10px;
  font-size:1em;
  border-radius:4px;
}

.password{
  border-radius:4px;
  background:#ecf0f1;
  border: #ccc 1px solid;
  padding: 8px;
  width:250px;
  font-size:1em;
}

.btn{
  background:#2ecc71;
  width:250px;
  padding-top:5px;
  padding-bottom:5px;
  color:white;
  border-radius:4px;
  border: #27ae60 1px solid;
  
  margin-top:20px;
  margin-bottom:20px;
  float:left;
  margin-left:16px;
  font-weight:800;
  font-size:0.8em;
}

.btn:hover{
  background:#2CC06B; 
}

</style>
