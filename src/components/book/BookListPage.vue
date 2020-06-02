<template>
    <v-container fluid>
        <v-row>
            <v-col
                colls="12"
                md="4"
                lg="3">
                <h6 class="display-1 text-uppercase">Livros</h6>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="(book, i) in bookList"
                :key="i"
                colls="12"
                md="3"
                lg="2">

                <v-card
                    class="mx-auto"
                    max-width="344"
                    outlined
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="headline mb-1">{{book.title}}</v-list-item-title>
                            <v-list-item-subtitle> {{book.desc}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                        <v-btn 
                            text
                            small
                            color="primary">
                            Ver Detalhes
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'BookListPage',
        data(){
            return{
                bookList: [
                    { title: 'Livro 1', desc: 'Descricao qualquer'},
                    { title: 'Livro 2', desc: 'Descricao qualquer'},
                    { title: 'Livro 3', desc: 'Descricao qualquer'},
                    { title: 'Livro 4', desc: 'Descricao qualquer'},
                    { title: 'Livro 5', desc: 'Descricao qualquer'},
                    { title: 'Livro 6', desc: 'Descricao qualquer'},
                ]
            }
        }
    };
</script>

<style scoped>

</style>