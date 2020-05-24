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
            <v-snackbar v-model="showMessage">
                {{ message }}
                <v-btn
                    color="info"
                    text
                    dark
                    @click="showMessage = false"
                >
                    Fechar
                </v-btn>
            </v-snackbar>
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
                showMessage: false,
                message: '',
            }
        },
        methods: {
            login(){
                if(this.token){
                    this.$store.commit('setAlthToken', this.token);
                    this.$router.push('/book');
                    // alert(this.$store.state.authToken);
                }else{
                    // TODO Mostrar uma mensagem de erro
                    this.message = 'Voê deve informar um token.';
                    this.showMessage = true;
                }
            }, 
            loginAsGuest(){
                // TODO
                this.$router.push('/book');
            }
        }
    };
</script>
