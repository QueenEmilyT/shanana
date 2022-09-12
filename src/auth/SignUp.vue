<template>
    <div style="height:100%;color:white;padding-top:30px;padding-bottom:70px;">
    <div>
    <div style="text-align:center;">
    <div><ion-icon :icon="layersOutline" style="font-size: 50px;"></ion-icon></div>
    <h1>SHANANA</h1>
    <p style="text-align:center;">
    Your beauty is our priority
    </p>
    </div>
    </div>



    <ion-card style="background:#4A235A;color:white;border-radius:20px;">
    <ion-card-header>
    <!-- <ion-card-subtitle>Welcome</ion-card-subtitle> -->
    <ion-card-title style="text-align:center;color:white;">Create Account</ion-card-title>
    <form style="padding:20px;">
    <div style="margin-top:10px;">
    <ion-input placeholder="Enter your names" v-model="form.names"></ion-input>
    </div>
    <div>
    <ion-input placeholder="Enter telephone number" v-model="form.tel"></ion-input>
    </div>
    <div>
    <ion-input placeholder="Enter password" type="password" v-model="form.pass"></ion-input>
    </div>
    <div style="text-align: center;margin-top:30px;">
    <ion-button color="light" @click="submit">Sign Up</ion-button>
    </div>
    </form>
    <div>


    </div>


    </ion-card-header>
    <ion-card-content>


    </ion-card-content>
    </ion-card>


    <div style="padding:10px;text-align: center;">
    <ion-button shape="round" color="#4A235A" >Login</ion-button>
    </div>

    </div>
    </template>

    <script>
    import { IonCard, IonCardContent, IonCardHeader,  IonCardTitle,IonIcon, IonInput, IonButton  } from '@ionic/vue';
    import { layersOutline} from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
    components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon,IonInput, IonButton},
    setup(){ return{
    layersOutline
    }
    },

    data(){return{

    form:{
    names:null,
    tel:null,
    pass:null,
    }



    }},


    methods:{
    submit:function(){
if(this.form.names!=''){
    this.$store.state.screen='newuser';
}



    },


    screen_nav:function(item){
    this.$store.state.screen=item;
    }





    }



    });
    </script>
    <style scoped>
    ion-input,.input{
    border-radius:20px;
    margin-bottom:15px;
    padding:15px;
    margin:10px;
    border:solid thin white;
    border-radius: 10px;
    }


    </style>

