<template>
  <div>
    <catalog-list
      class=""
      :items="items"
    />
  </div>
</template>

<script lang="ts">
  import {defineComponent, useContext, useFetch, ref} from "@nuxtjs/composition-api";
  import {getModule} from "vuex-module-decorators";

  import {CatalogItem} from "~/ts/interfaces/CatalogItem.interface";

  import Catalog from "~/store/catalog";

  export default defineComponent({
    name: "index",
    components: {
      CatalogList: () => import('@/components/pages/catalog/sections/CatalogList.vue')
    },
    setup() {
      const { store } = useContext();
      const catalog = getModule(Catalog, store);

      let items = ref<CatalogItem[]>([]);

      const { fetch } = useFetch(async () => {
        items.value =  await catalog.getItems();
      })

      return {
        items
      }
    }
  })
</script>

<style scoped>

</style>
