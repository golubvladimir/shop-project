<template>
  <div>
    <title-element>
      Каталог
    </title-element>
    <p>
      Описание страницы каталога
    </p>
  </div>
</template>

<script>
export default {
  name: "main",
  components: {
    titleElement: () => import('@/components/elements/titleElement'),
  }
}
</script>

<style scoped>

</style>
