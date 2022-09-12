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
    <ion-card-title style="text-align:center;color:white;font-size:15px;">Tell us about the services you provide</ion-card-title>
    <div>
    </div>


    </ion-card-header>

    <ion-card-content style="padding:0;">
    <div style="padding:20px;">
    <ion-select interface="popover" placeholder="Select profession service you provide" v-model="form.profession" @change="select_profession($event)">
    <IonSelectOption :value="p.name" v-for="p in professions" :key="p.name">{{ p.name }} </IonSelectOption>
    </ion-select>
    </div>

    <div style="padding:20px;padding-top:0;">
    <ion-select interface="popover" placeholder="Select years of experience" v-model="form.experience" @change="select_experience($event)">
    <IonSelectOption :value="n.name" v-for="n in experience" :key="n.name">{{ n.name }} </IonSelectOption>

    </ion-select>
    </div>
    <div style="padding:20px;padding-top:0;">
        <!-- <ion-label position="stacked">Telephone number</ion-label> -->
        <ion-input placeholder="Enter your primary telephone contact" v-model="form.tel"></ion-input>
        </div>
    <div style="padding:20px;padding-top:0;">
        <!-- <ion-label position="stacked">NIN Number</ion-label> -->
        <ion-input placeholder="Enter your National ID NIN" v-model="form.nin"></ion-input>
        </div>
    </ion-card-content>









    </ion-card>


    <div style="text-align: center;">

    <ion-button shape="round" color="light" @click="submit()">Save</ion-button>




    </div>











    </div>
    </template>

    <script>
    import { IonCard, IonCardContent, IonCardHeader,  IonCardTitle,IonIcon,  IonButton, IonSelect, IonSelectOption, IonInput, } from '@ionic/vue';
    import { personOutline} from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
    components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon,IonButton, IonSelect, IonSelectOption, IonInput,
    },
    setup(){ return{
    personOutline,
    }
    },

    data(){return{

    form:{
    profession:null,
    experience:null,
    tel:null,
    nin:null,
    },


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
    ],







    }},


    methods:{

select_profession:function(event){
this.form.profession=event.target.value;
},
select_experience:function(event){
this.form.experience=event.target.value;
},


    submit:function(){
    if(this.form.profession!=null && this.form.experience!=null){
    this.$store.state.screen='uploadpictures';

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
