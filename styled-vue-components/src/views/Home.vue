<template>
  <div class="home" is="sui-container">
    <ImageCard1 />
  </div>
</template>

<script>

import ImageCard1 from '@/components/VisitComponent.vue'

export default {
  name: 'home',
  components: {
    ImageCard1
  }
}

</script>

<style lang="scss">

.home.ui .container {
  display: flex;
  justify-content: center;
}

</style>
