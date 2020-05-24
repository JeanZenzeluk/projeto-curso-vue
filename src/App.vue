<template>
    <v-app>
        <login-page />
    </v-app>
</template>

<script>

    import LoginPage from './components/login/loginPage.vue';

    // AIzaSyC7oSfvfCBPvIKNfN5qflrA-28KQHaSgKQ
    export default {
        name: 'App',
        components: { LoginPage },
    };
</script>
