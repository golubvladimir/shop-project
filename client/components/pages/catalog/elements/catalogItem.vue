<template>
  <div>
    <img src="" alt="">
    <p>{{ manufacturer }}</p>
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
  import {defineComponent, PropType} from "@nuxtjs/composition-api";
  import {Category} from "~/ts/interfaces/Category.interface";
  import {Manufacturer} from "~/ts/interfaces/Manufacturer.interface";

  export default defineComponent({
    props: {
      name: {
        type: String,
        default: ''
      },
      quantity: {
        type: Number,
        default: undefined
      },
      date: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      category: {
        type: Object as PropType<Category>,
        default: () => ({})
      },
      manufacturer: {
        type: Object as PropType<Manufacturer>,
        default: () => ({})
      }
    },
    setup() {
    }
  })
</script>

<style scoped>

</style>
