<template>
    <v-row>
        <v-col cols="12">
            <v-text-field 
                v-model="textSearch"
                label="Pesquise Algo.."
                @change="doSearch"
            />
        </v-col>
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
</template>

<script>
    const axios = require('axios');

    export default {
        name: 'BookList',
        data(){
            return{
                textSearch: '',
                bookList: []
            }
        },
        methods: {
            doSearch(){
                if(this.textSearch){
                    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.textSearch}`).then((response) =>{
                        this.bookList = response.data.items
                    });
                }
            }
        }
    };
</script>

<style scoped>

</style>