<template>
  <div class="">
    <main />
    <catalog-list />
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    main: () => import('@/components/pages/catalog/sections/main'),
    catalogList: () => import('@/components/pages/catalog/sections/catalogList')
  },
  setup(props) {

  }
})
</script>

<style scoped>

</style>
