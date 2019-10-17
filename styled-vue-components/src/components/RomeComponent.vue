<template lang="html">
  <div is="sui-container">

    <template>
      <mdb-card class="small-card">
      <mdb-card-body class="card-body">
        <mdb-card-title class="title-card">Rome</mdb-card-title>
        <mdb-btn color="primary" class="download-button">Download itinerary</mdb-btn>
      </mdb-card-body>
      </mdb-card>
    </template>
  
  </div>
</template>


<script>
import firstViewImage from "../assets/rome.jpeg"
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

.sui-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.title-card {
  font-family: 'Open Sans', sans-serif;
  color: white;
  font-weight: 900;
  font-size: 30px;
  padding: 5px 5px 0 0;
}

.small-card {
  width: 255px;
  height: 305px;
  border-radius: 20px;
  background-image: url("../assets/rome.jpeg");
  background-size: cover;
  background-position: right;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

}

.download-button {
  border-radius: 15px;
  font-weight: 900;
  font-family: 'Open Sans', sans-serif;
}

</style>
