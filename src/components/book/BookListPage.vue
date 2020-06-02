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
                            <v-list-item-title class="headline mb-1">{{book.volumeInfo.title}}</v-list-item-title>
                            <v-list-item-subtitle> {{book.volumeInfo.subtitle}}</v-list-item-subtitle>
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
    const axios = require('axios');

    export default {
        name: 'BookListPage',
        data(){
            return{
                bookList: []
            }
        },
        created(){
            axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers').then((response) =>{
                this.bookList = response.data.items
            });
        }
    };
</script>

<style scoped>

</style>