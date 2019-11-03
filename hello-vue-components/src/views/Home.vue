<template>
  <div class="home">
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

.home .container {
  display: flex;
  justify-content: center;
}

</style>
