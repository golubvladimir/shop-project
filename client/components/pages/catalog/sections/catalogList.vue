<template>
  <div class="">
    <catalog-item
      v-for="item in items"
      class=""
      :img="item.img"
      :name="item.name"
      :price="item.price"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    catalogItem: () => import('@/components/pages/catalog/elements/catalogItem')
  },
  setup(props) {
    const { items } = toRefs(props);

    return {
      items
    }
  }
})
</script>

<style scoped>

</style>
