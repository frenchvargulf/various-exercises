<template>

  <div id="app">

    <ul id="nav">
      <li class="router-el" ><router-link to="/" class="router-link">
        Card Component
      </router-link></li> 
      <li class="router-el"><router-link to="/rome" class="router-link">
        Rome Component
      </router-link></li>
    </ul>

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
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.router-el {
  border: 1px solid rgb(255, 255, 255);
  margin: 1em;
  
  font-weight: 700;
  box-shadow: inset 0 0 0 0 rgb(25, 84, 107);
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s; 
  border-radius: 35px;
}

.router-el:hover {
  box-shadow: inset 0 0 0 50px rgb(25, 84, 107);
  border-color: rgb(25, 84, 107);
  cursor: pointer;
}

.router-el a {
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em;
  display: block;
}

</style>
