<template>
  <v-card class="mx-auto book-card" max-width="344" outlined>
    <div v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail"
        class="text-center pt-2">
        <img :src="book.volumeInfo.imageLinks.smallThumbnail" class="max-width-img"/>
    </div>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
            <span>{{book.volumeInfo.title.substring(0, 20)}}</span>
            <span v-if="book.volumeInfo.title.length > 20">...</span>
        </v-list-item-title>
        <v-list-item-subtitle>{{book.volumeInfo.subtitle || 'Sem descrição'}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <forward-navigation-button :url="entryPageUrl" />
      <v-btn text small color="primary" @click="goToPreview(book)" v-if="book.volumeInfo.previewLink">Ver Preview</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import bookService from './bookService';
import ForwardNavigationButton from '../navigation/ForwardNavigationButton.vue';

export default {
  name: "BookItem",
  components: { ForwardNavigationButton },
  mixins: [bookService],
   props: {
      book: { type: Object, required: true},
  },
  computed: {
    entryPageUrl(){
      return `/book/${this.book.id}`;
    },
  }
};
</script>

<style scoped>

.book-card{
    height: 250px;
}
.max-width-img{
    max-width: 80px;
}

</style>