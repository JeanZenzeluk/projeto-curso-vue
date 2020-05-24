<template>
    <div>
        <v-container fluid>
            <v-row justify="center">
                <v-col cols="12" md="3" class="text-center">
                    <h6 class="headline">Login</h6>
                    <v-text-field label="Token" v-model="token"/>
                    <v-btn depressed dark color="green" block @click="login">
                        Login
                    </v-btn>
                    <v-btn text @click="loginAsGuest">
                        Entrar como visitante
                    </v-btn>
                    
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
    // AIzaSyC7oSfvfCBPvIKNfN5qflrA-28KQHaSgKQ
    export default {
        name: 'loginPage',
        data() {
            return {
                token: '',
            }
        },
        methods: {
            login(){
                alert(this.token);
            }, 
            loginAsGuest(){
                // TODO
            }
        }
    };
</script>
