<template>
  <div>
    <h4 class="display-1">{{ book.volumeInfo.title}}</h4>
    <h4 class="headline">{{ book.volumeInfo.subtitle || 'Sem Descrição'}}</h4>

    <p class="mt-2">{{book.volumeInfo.description}}</p>
  </div>
</template>

<script>
export default {
  name: "BookEntryImage",
  props: {
    book: { type: Object, required: true }
  }
};
</script>

<style scoped>
</style>