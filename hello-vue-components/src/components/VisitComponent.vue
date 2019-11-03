<template lang="html">
  <div class="card-container">
    <div class="card">
        <div class="img-cnt">
          <img class="img-cnt-img" v-bind:src=image />
        </div>
        <div class="card-content">
          <h1 class="card-content-title"> Visit Scotland </h1>
          <span class="card-content-text">
            Scotland is a country in Europe and is part of the island of Great Britain. 
          </span>
            <button type="button" class="card-content-btn"> 
              Look's Perfect! Let's go!
            </button>        
          </div>
      
    </div>
  </div>
</template>


<script>

import image from '../assets/scotland1.jpeg'

export default {
  name: 'ImageCard1',
  data: () => {
    return {
      image: image
    }
  }
};
</script>

<style lang="scss">

.card-container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  max-height: 490px;
  max-width: 360px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Raleway';

  background-color: rgb(255, 255, 255);
}

.card-content {
  padding: 10px;
  height: 270px;
  width: 90%;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px;
}

.img-cnt-img {
  width: 100%;
  height: auto;
  max-height: 220px;
  object-fit: cover;
  border-radius: 30px 30px 0 0;
}

.card-content-title {
  color: #a0c770;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
}

.card-content-text {
  color: #33558b;
  width: 80%;
}

.card-content-btn {
  background-color: #a0c770;
  border-color: #a0c770;
  border-radius: 30px;
  font-weight: 500;
  width: 90%;
  height: 53px;
  font-family: 'Open Sans', sans-serif;
  align-self: center;
  border: none;
  outline: none;
}

.card-content-btn:hover {
  background-color: #a0c770;
  border-color: #a0c770;
  outline: none;
}



</style>
