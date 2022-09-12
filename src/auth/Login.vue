<template>
    <div style="height:100%;color:white;padding-top:30px;background:#4A235A;">


        <div>
        <div style="text-align:center;">
        <div><ion-icon :icon="layersOutline" style="font-size: 30px;"></ion-icon></div>
        <h2>SHANANA</h2>
        <p style="text-align:center;">
        Your beauty is our priority
        </p>
        </div>



        </div>



          <ion-card style="background:#4A235A;color:white;border-radius:20px;">
            <ion-card-header>
              <!-- <ion-card-subtitle>Welcome</ion-card-subtitle> -->
              <ion-card-title style="text-align:center;color:white;">Login</ion-card-title>
        <form style="padding:20px;">
        <div style="margin-top:10px;">
        <ion-input placeholder="Enter Telephone Number" v-model="form.tel"></ion-input>
        </div>
        <div>
        <ion-input placeholder="Enter Password" type="password" v-model="form.pass"></ion-input>
        </div>
        <div style="text-align: center;margin-top:30px;">
            <ion-button color="light" @click="submit()">Login</ion-button>
        </div>
        </form>
        <div>


        </div>


            </ion-card-header>
            <ion-card-content>


            </ion-card-content>
          </ion-card>


        <div style="padding:10px;text-align: center;padding-bottom:200px;">
            <ion-button shape="round" color="#4A235A" @click="screen_nav('signup')">Sign Up</ion-button>
        </div>

        </div>
</template>
<script>

import { IonCard, IonCardContent, IonCardHeader,  IonCardTitle,IonIcon, IonInput, IonButton  } from '@ionic/vue';
import { defineComponent } from "vue";
import { layersOutline} from 'ionicons/icons';
export default defineComponent({
    name: "HomePage",
    components: {
        IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon,IonInput, IonButton
    },

    data(){
    return{
    title:'Login',

    form:{
    tel:null,
    pass:null,
    }



    }
},
setup(){
    return{
        layersOutline,
    }
},

methods:{
screen_nav:function(screen){
this.$store.state.screen=screen;
},
submit:function(){
this.$store.state.screen='home';
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
