<template>
    <v-btn text small color="primary" @click="goToDetais">Ver Detalhes</v-btn>
</template>

<script>
export default {
    name: 'ForwardNavigationButton',
    props: {
        url: { type: String, required: true},
    },
    methods: {
      goToDetais(){
        this.$router.push(this.url);
          // TODO levar nossa pagina (rota) que ira mostrar detalhes do livro
      }
  }
}
</script>

<style scoped>

</style>