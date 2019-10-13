<template>
  <div>
    <sui-menu pointing>
      <a
        is="sui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        @click="select(item)"
      />

    </sui-menu>

    <sui-segment>
      <docs-wireframe name="paragraph" />
    </sui-segment>
  </div>
</template>

<script>

import ImageCard1 from '@/components/FoodComponent.vue'

export default {
  name: 'Menu',
  data() {
    return {
      active: 'Home',
      items: ['Home', 'ImageCard1', 'About'],
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  },
};
</script>
