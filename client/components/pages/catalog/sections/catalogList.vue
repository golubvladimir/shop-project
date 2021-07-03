<template>
  <div class="">
    <catalog-item
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      :manufacturer="item.manufacturer"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from '@nuxtjs/composition-api';

  import {CatalogItem} from "~/ts/interfaces/CatalogItem.interface";

  export default defineComponent({
    components: {
      CatalogItem: () => import('@/components/pages/catalog/elements/CatalogItem.vue')
    },
    props: {
      items: {
        type: Array as PropType<CatalogItem[]>,
        default: []
      }
    },
    setup(props) {

    }
  })
</script>

<style scoped>

</style>
