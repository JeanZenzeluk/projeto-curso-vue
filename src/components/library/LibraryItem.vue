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
            <v-btn text small color="primary" @click="goToDetais">Ver Detalhes</v-btn>
        </v-card-actions>
    </v-card-text>
    </div>
</template>

<script>

export default {
  name: "LibraryItem",
  props: {
    shelf: { type: Object, required: true },
  },
  methods:  {
    goToDetais(){
        this.$router.push(`/library/$(this.shelf.id)`);
    },
  }
};
</script>

<style scoped>

</style>