<template lang="html">
  <div class="container">

      <div class="card-body">
        <h1 class="title-card">Rome</h1>
        <button type="button" color="primary" class="download-button">Download itinerary</button>
      </div>
  
  </div>
</template>


<script>
import firstViewImage from "../assets/rome.jpg"
import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue';

export default {
		name: 'ImageCard2',
		components: {
			mdbCard,
			mdbCardImage,
			mdbCardBody,
			mdbCardTitle,
			mdbCardText,
			mdbBtn
		}
	}
</script>

<style lang="scss">

.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-body {
  max-width: 268px;
  height: 318px;
  border-radius: 35px;
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
  padding: 5px 5px 0 0;
}

.download-button {
  border-radius: 30px;
  font-weight: 700;
  width: 230px;
  height: 53px;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  border-color: #4ca2ff;
  background-color: #4ca2ff;
  align-self: center;
  outline: none;
}

// .download-button:hover {
//   outline: none;
//   border-color: #4ca2ff;
//   background-color: #4ca2ff;
// }

// button:focus {
//   outline: none;
//   border-color: #4ca2ff;
//   background-color: #4ca2ff;
// }

</style>
