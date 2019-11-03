<template>
  <div class="rome">
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

.rome .container {
  display: flex;
  justify-content: center;
}

</style>
