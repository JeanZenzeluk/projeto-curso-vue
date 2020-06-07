<template>
   <v-container fluid>
       <v-row justify="end">
           <v-col cols="12" md="2">
               <v-btn text block @click="goBack">
                   Voltar
               </v-btn>
           </v-col>
       </v-row>
       <v-row v-if="book && book.volumeInfo">
           <v-col cols="12" md="3" v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail" class="text-center">
             <img :src="book.volumeInfo.imageLinks.thumbnail"/>
           </v-col>
           <v-col cols="12" md="9">
               <h4 class="display-1"> {{ book.volumeInfo.title}}</h4>
               <h4 class="headline"> {{ book.volumeInfo.subtitle || 'Sem Descrição'}}</h4>

               <p class="mt-2"> {{book.volumeInfo.description}} </p>

               <div v-if="book.volumeInfo.authors && book.volumeInfo.authors.length">
                   <v-subheader>Autores</v-subheader>
                   <v-divider class="mb-2"/>
                   <v-chip v-for="(author, i) in book.volumeInfo.authors" :key="i" pill class="mr-3">
                       <v-avatar left color="primary">
                           {{ author.substring(0, 1) }}
                       </v-avatar>
                       {{ author }}
                   </v-chip>
               </div>
                <div class="mt-4" v-if="book.volumeInfo.categories && book.volumeInfo.categories.length">
                   <v-subheader>Categorias</v-subheader>
                   <v-divider class="mb-2"/>
                   <v-chip v-for="(category, i) in book.volumeInfo.categories" :key="i" pill class="mr-3">
                       {{ category }}
                   </v-chip>
               </div v-if="book.volumeInfo.previewLink">
                <div class="mt-4">
                   <v-subheader>Ações</v-subheader>
                   <v-divider class="mb-2"/>
                   <v-btn text color="primary" @click="goToPreview(book)">
                       Ver Preview
                   </v-btn>
               </div>

           </v-col>
       </v-row>
   </v-container>
</template>

<script>

    import bookService from './bookService';

    const axios = require('axios');

    export default {
        name: 'BookEntryPage',
        mixins: [bookService],
        data(){
            return{
                book: {},
            }
        },
        created(){
            axios.get(`https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}`).then((response) => {
                this.book = response.data;
            });
        },
        methods:{
            goBack(){
                this.$router.push('/book');
            },
        }
    };
</script>

<style scoped>

</style>