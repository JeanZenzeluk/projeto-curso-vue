<template>
    
     <v-text-field 
                    v-model="textSearch"
                    label="Pesquise Algo.."
                    @input="doSearch"
                />
    
</template>

<script>

   
    export default {
        name: 'SearchInputField',
        data() {
            return {
                textSearch: '',
                lastChange: 0,
                delay: 300,
            }
        },
         methods: {
            doSearch(){
                const now = new Date().getTime();
                setTimeout(() => {
                    if(new Date().getTime() >= this.lastChange + this.delay){
                        this.$emit('search', this.textSearch);
                    }
                }, this.delay);
                
            }
        }
        
    };
</script>

<style scoped>

</style>