<template>
    <div>
        <v-app-bar
            color="secondary"
            dense
            flat
            dark>
            <v-toolbar-title>Projeto - Curso Vue</v-toolbar-title>
            <v-spacer />
            <v-toobal-itens v-if="$store.state.logged">
                <v-btn 
                    text
                    @click="goToBookList">
                    Livros
                </v-btn>
                <v-btn 
                    v-if="$store.state.authToken"
                    text
                    @click="goToCollection">
                    Minha Coleção
                </v-btn>
                <v-btn 
                    text
                    @click="logout">
                    Sair
                </v-btn>
            </v-toobal-itens>
        </v-app-bar>
    </div>    
</template>

<script>
    export default {
        name: 'AppHeader',
        methods: {
            goToBookList(){
                this.$router.push('/book');
            },
            goToCollection(){
                this.$router.push('/collection'); // TODO rota nao exidte ainda
            },
            logout(){
                this.$store.commit('setAuthToken', '');
                this.$router.push('/');
            }
        }
    };
</script>

<style scoped>

</style>