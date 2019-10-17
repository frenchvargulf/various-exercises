<template>

  <div id="app">

    <sui-menu id="nav">
      <sui-menu-item ><router-link to="/">
        Card Component
      </router-link></sui-menu-item> 
      <sui-menu-item><router-link to="/rome">
        Rome Component
      </router-link></sui-menu-item>
      <sui-menu-item><router-link to="/visa">
        Visa Card
      </router-link></sui-menu-item>
    </sui-menu>
    <router-view/>
    
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  color: #2c3e50;
  background: rgba(25,84,107,1);
  background: -moz-linear-gradient(left, rgba(25,84,107,1) 0%, rgba(25,84,107,1) 0%, rgba(25,84,107,1) 0%, rgba(255,217,155,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(25,84,107,1)), color-stop(0%, rgba(25,84,107,1)), color-stop(0%, rgba(25,84,107,1)), color-stop(100%, rgba(255,217,155,1)));
  background: -webkit-linear-gradient(left, rgba(25,84,107,1) 0%, rgba(25,84,107,1) 0%, rgba(25,84,107,1) 0%, rgba(255,217,155,1) 100%);
  background: -o-linear-gradient(left, rgba(25,84,107,1) 0%, rgba(25,84,107,1) 0%, rgba(25,84,107,1) 0%, rgba(255,217,155,1) 100%);
  background: -ms-linear-gradient(left, rgba(25,84,107,1) 0%, rgba(25,84,107,1) 0%, rgba(25,84,107,1) 0%, rgba(255,217,155,1) 100%);
  background: linear-gradient(to right, rgba(25,84,107,1) 0%, rgba(25,84,107,1) 0%, rgba(25,84,107,1) 0%, rgba(255,217,155,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#19546b', endColorstr='#ffd99b', GradientType=1 );
  padding: 10px 0;
}

#nav {
  
}

</style>
