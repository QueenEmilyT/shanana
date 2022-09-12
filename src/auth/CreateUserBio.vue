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
    <ion-card-title style="text-align:center;color:white;font-size:15px;">Tell us more about you </ion-card-title>
    <div>
    </div>


    </ion-card-header>


    <ion-card-content style="padding:0;padding-bottom:10px;margin-top:-10px;" v-show="show_form=='bio'">
    <div style="padding:10px;padding-top:0;padding-bottom:5px;">
    <ion-select interface="popover" placeholder="Select gender" v-model="form.gender">
    <IonSelectOption value="male">Male</IonSelectOption>
    <IonSelectOption value="female">Female</IonSelectOption>
    <IonSelectOption value="other">Other</IonSelectOption>
    </ion-select>
    </div>
    <div style="padding:20px;padding-top:0;padding-bottom:0;text-align: center;">Select date of birth</div>
    <div style="display:block;">
    <ion-datetime presentation="date" v-model="form.dob" style="border:solid thin white;border-radius: 10px;margin-left:10px;"></ion-datetime></div>
    </ion-card-content>












    </ion-card>


    <div style="text-align: center;">

    <ion-button shape="round" color="light" @click="submit()">Save</ion-button>




    </div>











    </div>
    </template>

    <script>
    import { IonCard, IonCardContent, IonCardHeader,  IonCardTitle,IonIcon,  IonButton, IonSelect, IonSelectOption,IonDatetime,  } from '@ionic/vue';
    import { layersOutline,personOutline} from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
    components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon,IonButton, IonSelect, IonSelectOption,IonDatetime,
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
    if(this.form.gender!=null && this.form.dob!=null){
    this.$store.state.screen='createusercontact';
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
