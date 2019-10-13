<template lang="html">
  <div is="sui-container">
      <sui-card>
        <sui-reveal animated="move">
          <sui-reveal-content visible>
            <sui-image :src="image" />
          </sui-reveal-content>
          <sui-reveal-content hidden>
            <sui-image :src="image2"  />
          </sui-reveal-content>
        </sui-reveal>
        <sui-card-content>
          <sui-card-header> Visit Scotland </sui-card-header>
          <sui-card-meta> Summer 2019 </sui-card-meta>
          <sui-card-description>
              Scotland is a country in Europe and is part of the island of Great Britain. This lush beautiful country is bursting with green spaces, lush forests, towering mountains and vast lochs.
            </sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
          <a href="https://www.visitscotland.com/">
            <sui-button color="teal" content="Looks Perfect. Let's go!"> 
            </sui-button>        
          </a>
        </sui-card-content>
      </sui-card>  
  </div>
</template>


<script>
import firstViewImage from "../assets/scotland1.jpeg"
import secondViewImage from "../assets/scotland2.jpeg"

export default {
  name: 'ImageCard1',
  data: () => {
    return {
      image: firstViewImage,
      image2: secondViewImage
    }
  }
};
</script>

<style lang="scss">

.sui-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

</style>
