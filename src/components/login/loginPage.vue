<template>
    <div>
        <v-container fluid>
            <v-row justify="center">
                <v-col cols="12" md="3" class="text-center">
                    <h6 class="display-1 text-uppercase">Login</h6>
                    <v-text-field label="ID Do usuário" v-model="userId"/>
                    <v-text-field label="Token" v-model="token"/>
                    <v-btn depressed dark color="primary" block @click="login" class="mb-2">
                        Login
                    </v-btn>
                    <v-btn text @click="loginAsGuest" color="blue">
                        Entrar como visitante
                    </v-btn>
                    
                </v-col>
            </v-row>
          
        </v-container>
    </div>
</template>

<script>
    
    export default {
        name: 'loginPage',
        data() {
            return {
                userId: '110471019258967698339',
                token: 'AIzaSyC7oSfvfCBPvIKNfN5qflrA-28KQHaSgKQ',
               
            }
        },
        methods: {
            login(){
                if(this.userId && this.token){
                    this.$store.commit('setAuthToken', this.token);
                    this.$store.commit('setUserId', this.userId);
                    this.$router.push('/book');
                    // alert(this.$store.state.authToken);
                }else{
                    // TODO Mostrar uma mensagem de erro
                    this.$store.commit('showErrorMessage', 'Você deve informar um ID de usuário e um token');
                }
            }, 
            loginAsGuest(){
                // TODO
                this.$store.commit('setLogged', true);
                this.$router.push('/book');
            }
        }
    };
</script>
