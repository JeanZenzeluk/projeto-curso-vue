<template>
    
    <div>
        <loading :condition="searchOnGoing">
            <v-row>
                <v-col
                    v-for="(shelf, i) in shelfList"
                    :key="i"
                    colls="12"
                    md="3"
                    lg="3">

                    <library-item :shelf="shelf" />
                   
                </v-col>
            </v-row>
        </loading>
    </div>
    
</template>

<script>

    import api from '../api/api';
    import Loading from '../loading/Loading.vue';
    import LibraryItem from './LibraryItem.vue';

    export default { // 110471019258967698339
        name: 'LibraryList',
        components: { Loading, LibraryItem},
        mixins: [api],
        data() {
            return {
                shelfList: [],
                searchOnGoing: false,
            }
        },
        created() {
            this.searchOnGoing = true;
            this.get('/users/110471019258967698339/bookshelves').then((response)=> {
                this.shelfList = response.data.items;
                this.searchOnGoing = false;
            });
        }
       
    };
</script>

<style scoped>

</style>