<template>
  <h1 v-if="size === '1'">
    <slot />
  </h1>
  <h2 v-if="size === '2'">
    <slot />
  </h2>
  <h3 v-if="size === '3'">
    <slot />
  </h3>
</template>

<script>
import {defineComponent, toRefs} from '@nuxtjs/composition-api';

export default defineComponent({
  setup(props) {
    const { size } = toRefs(props);

    return {
      size
    }
  }
})
</script>

<style scoped>

</style>
