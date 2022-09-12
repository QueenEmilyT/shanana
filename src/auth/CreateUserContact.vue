<template>
    <div style="color:white;padding-top:10px;">
    <div>
    <div style="text-align:center;">
    <div><ion-icon :icon="personOutline" style="font-size: 30px;"></ion-icon></div>
    <h3 style="padding-top:0;">Names</h3>
    </div>

    </div>
    <ion-card style="background:#4A235A;color:white;border-radius:20px;margin-top:0;">
    <ion-card-header>
    <!-- <ion-card-subtitle>Welcome</ion-card-subtitle> -->
    <ion-card-title style="text-align:center;color:white;font-size:15px;">Tell us your  contacts</ion-card-title>
    <div>
    </div>


    </ion-card-header>

    <ion-card-content style="padding:0;">

    <div style="padding:20px;padding-top:0;">
        <!-- <ion-label position="stacked">Telephone number</ion-label> -->
        <ion-input placeholder="Enter your telephone contact" v-model="form.tel"></ion-input>
        </div>
    <div style="padding:20px;padding-top:0;">
        <!-- <ion-label position="stacked">NIN Number</ion-label> -->
        <ion-input placeholder="Enter your location" v-model="form.location"></ion-input>
        </div>
    </ion-card-content>









    </ion-card>


    <div style="text-align: center;">

    <ion-button shape="round" color="light" @click="submit()">Save</ion-button>




    </div>











    </div>
    </template>

    <script>
    import { IonCard, IonCardContent, IonCardHeader,  IonCardTitle,IonIcon,  IonButton,  IonInput, } from '@ionic/vue';
    import { personOutline} from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
    components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon,IonButton,  IonInput,
    },
    setup(){ return{
    personOutline,
    }
    },

    data(){return{

    form:{
    tel:null,
    location:null,
    }






    }},


    methods:{


    submit:function(){
    if(this.form.tel!=null && this.form.location!=null){
    this.$store.state.screen='home';

    }
    },




    //navigation
    nav:function(item){
    this.$router.push(item);
    },





    },






    });
    </script>
    <style scoped>
    ion-input,ion-select{
    margin:10px;
    border:solid thin white;
    border-radius: 10px;
    }

    ion-datetime{
    --background:#4A235A;
    }
    </style>
