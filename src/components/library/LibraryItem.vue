<template>
    <div>
    <v-card class="mx-auto book-card" max-width="344" outlined>
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    <span>{{ shelf.title }}</span>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-card>

    <v-card-text>
        <span>
            Número de Livros:
            <span class="font-weight-medium ml-1"> {{shelf.volumeCount }} </span>
        </span>
         <v-card-actions>
            <forward-navigation-button :url="entryPageUrl" />
        </v-card-actions>
    </v-card-text>
    </div>
</template>

<script>

import ForwardNavigationButton from '../navigation/ForwardNavigationButton.vue';

export default {
  name: "LibraryItem",
  components: { ForwardNavigationButton },
  props: {
    shelf: { type: Object, required: true },
  },
  computed: {
    entryPageUrl(){
      return `/book/${this.shelf.id}`;
    },
  }
};
</script>

<style scoped>

</style>