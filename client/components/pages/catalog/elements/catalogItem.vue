<template>
  <div class="">
    <img
      :src="img"
      :alt="name"
    >
    <p>{{ name }}</p>
    <p>{{ price }}</p>
  </div>
</template>

<script>
import {defineComponent, toRefs} from "@nuxtjs/composition-api";

export default defineComponent({
  setup(props) {
    const { name, price, img } = toRefs(props);

    return {
      img,
      name,
      price
    }
  }
})
</script>

<style scoped>

</style>
