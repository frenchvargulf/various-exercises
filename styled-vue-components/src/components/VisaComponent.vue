<template lang="html">
  <div is="sui-container">

    <div class="visa-cnt">

      <h1 class="rome-card-title">Visa</h1>

      <div class="card-number">
        <span>1234</span>
        <span>5678</span>
        <span>9012</span>
        <span>1456</span>
      </div>

      <div class="bottom-cnt">
        <div class="ownername">John Doe</div>
        <div class="valid-date">03/17</div>
      </div>

    </div>
  
  </div>
</template>


<script>

export default {
		name: 'Visa',
		components: {
  }
}
</script>

<style lang="scss">

.ui .container {
  display: flex;
  justify-content: center;
}

.visa-cnt {
  background-color: dodgerblue;
  width: 100%;
  height: 100%;
  width: 347px;
  height: 240px;
  border-radius: 20px;
  padding: 0 20px;
  color: white;
}

.rome-card-title {
  color: white;
  font-weight: 900;
  text-align: right;
  padding: 10px;
  font-style: italic;
}

.card-number {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px 0;
}

span {
  display: block;
}

span:first-of-type:after {
  content: '1234';
  display: block;
  font-size: 15px;
  opacity: 0.7;
  text-align: left;
}


.bottom-cnt {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin: 40px 0 0 0;
}

.ownername {}

.valid-date {
  position: relative;
}

.valid-date:before {
  content: 'valid thru';
  display: block;
  width: 5px;
  height: 5px;
  font-size: 8px;
  font-weight: 900;
  opacity: 0.7;
  position: absolute; 
  top: 15%;
  left: -65%;
  text-align: justify;
  text-transform: uppercase;

}


</style>
