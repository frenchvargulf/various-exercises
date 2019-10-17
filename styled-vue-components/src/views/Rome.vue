<template>
  <div class="rome" is="sui-container">
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


.rome.ui .container {
  display: flex;
  justify-content: center;
}

</style>
