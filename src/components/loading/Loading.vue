<template>
    <div>
        <div v-if="condition">
            <v-row justify="center">
                <v-progress-circular
                    indeterminate
                    color="primary"
                ></v-progress-circular>
            </v-row>
        </div>
        <div v-if="!condition">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        props: {
            condition: { type: Boolean, required: true},
        }
    };
</script>

<style scoped>

</style>