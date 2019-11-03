<template lang="html">
  <div class="container">

      <div class="card-body">
        <h1 class="title-card">Rome</h1>
        <button type="button" color="primary" class="download-button">Download itinerary</button>
      </div>
  
  </div>
</template>


<script>


export default {
		name: 'ImageCard2',
		components: {
     
		}
	}
</script>

<style lang="css">

.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} 

.card-body {
  width: 16em;
  height: 19em;
  padding: 1em;
  border-radius: 2em;

  background-image: url("../assets/rome.jpg");
  background-size: cover;
  background-position: center right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.title-card {
  font-family: 'Raleway', sans-serif;
  color: white;
  font-weight: 700;
  font-size: 30px;
  margin: .2em;
}

.download-button {
  border-radius: 2em;
  font-weight: 700;
  width: 230px;
  height: 53px;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  border-color: #4ca2ff;
  background-color: #4ca2ff;
  align-self: center;
  outline: none;
  color: rgb(255,255,255);
}

</style>
