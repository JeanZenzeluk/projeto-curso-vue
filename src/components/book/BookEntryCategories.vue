<template>
  <div>
    <div class="mt-4" v-if="book.volumeInfo.categories && book.volumeInfo.categories.length">
      <v-subheader>Categorias</v-subheader>
      <v-divider class="mb-2" />
      <v-chip
        v-for="(category, i) in book.volumeInfo.categories"
        :key="i"
        pill
        class="mr-3"
      >{{ category }}</v-chip>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookEntryCategories",
  props: {
    book: { type: Object, required: true }
  }
};
</script>

<style scoped>
</style>