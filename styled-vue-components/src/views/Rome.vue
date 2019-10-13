<template>
  <div class="about" is="sui-container">
    <ImageCard2 />
  </div>
</template>

<script>

import ImageCard2 from '@/components/RomeComponent.vue'

export default {
  name: 'Rome',
  components: {
    ImageCard2
  }
}

</script>

<style lang="scss">

.about.ui .container {
  display: flex;
  justify-content: center;
}

</style>
