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
    <ion-card-title style="text-align:center;color:white;font-size:15px;">Upload 3 recent photographs</ion-card-title>
    <div>
    </div>


    </ion-card-header>


    <ion-card-content style="padding:0;">

    <div style="padding:20px;padding-top:0;">
    <!-- <ion-label position="stacked">NIN Number</ion-label> -->
    <ion-button expand="block" fill="outline" color="light">Upload file</ion-button>
    </div>
    </ion-card-content>








    </ion-card>


    <div style="text-align: center;">

    <ion-button shape="round" color="light" @click="submit()">Finish</ion-button>




    </div>











    </div>
    </template>

    <script>
    import { IonCard, IonCardContent, IonCardHeader,  IonCardTitle,IonIcon,  IonButton, } from '@ionic/vue';
    import { layersOutline,personOutline} from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
    components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon,IonButton,
    },
    setup(){ return{
    layersOutline,
    personOutline,
    }
    },

    data(){return{

    form:{
    gender:null,
    dob:null,
    profession:null,
    experience:null,
    },

    show_form:'bio',
    form_state:false,
    form_title:'Tell us about yourself',
    professions:[
    {name:'Hair plaiting'},
    {name:'Nails'},
    {name:'Massage'},

    ],

    experience:[
    {name:'Less than a year'},
    {name:'1 year'},
    {name:'2 Years'},
    {name:'More than 2 Years'},
    ]




    }},


    methods:{
    submit:function(){
this.$store.state.screen='home';
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
