<template>
    <div style="height:100%;color:white;padding-top:10px;padding-bottom:70px;">


    <div>
    <div style="text-align:center;">
    <div><ion-icon :icon="personOutline" style="font-size: 30px;"></ion-icon></div>
    <h2>User names</h2>
    <!-- <p style="text-align:center;">
    078.....
    </p> -->
    </div>



    </div>



      <ion-card style="background:#4A235A;color:white;border-radius:20px;">
        <ion-card-header>
          <!-- <ion-card-subtitle>Welcome</ion-card-subtitle> -->
          <ion-card-title style="text-align:center;color:white;">Welcome</ion-card-title>
    <form>
        <ion-list style="background:#4A235A;color:white;">
            <ion-radio-group style="background:#4A235A;color:white;" color="">
              <ion-list-header style="margin-bottom:15px;margin-top:15px;">
                <ion-label style="color:white;font-size:19px;font-weight:bold;text-align:center;line-height:35px;">Tell us why you are joining Shanana platform?</ion-label>
              </ion-list-header>

              <ion-item color="#4A235A;" style="background:#4A235A;color:white;" lines="none">
                <ion-label>I need a service.</ion-label>
                <ion-radio slot="start" value="user" @click="selected('user')"></ion-radio>
              </ion-item>

              <ion-item color="#4A235A;" style="background:#4A235A;color:white;" lines="none">
                <ion-label>I provide  services.</ion-label>
                <ion-radio slot="start" value="service" @click="selected('service')"></ion-radio>
              </ion-item>

              <ion-item color="#4A235A;" style="background:#4A235A;color:white;" lines="none">
                <ion-label>I own a business.</ion-label>
                <ion-radio slot="start" value="business" @click="selected('business')"></ion-radio>
              </ion-item>
            </ion-radio-group>
          </ion-list>
    </form>
    <div>


    </div>


        </ion-card-header>
        <ion-card-content>


        </ion-card-content>
      </ion-card>


    <div style="padding:10px;text-align: center;">
        <ion-button shape="round" color="light" @click="submit">Continue</ion-button>
    </div>

    </div>
    </template>

    <script>
    import { IonCard, IonCardContent, IonCardHeader,  IonCardTitle,IonIcon,  IonButton,IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup  } from '@ionic/vue';
    import { layersOutline,personOutline} from 'ionicons/icons';
    import { defineComponent } from 'vue';

    export default defineComponent({
      components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon,IonButton,IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,},
      setup(){ return{
        layersOutline,
        personOutline,
      }
      },

      data(){return{

    select:null,
    url:null,


      }},


    methods:{
    selected:function(item){
this.select=item;
    },
    submit:function(){
var url=null;
if(this.select=='user'){
url='createuser';
}else if(this.select=='service'){
url='createservice';
}else if(this.select=='business'){
url='createbusiness';
}
this.$store.state.screen=url;
    },







    },






    });
    </script>
    <style scoped>
    ion-input{
    margin:10px;
    border-radius:20px;
    background:white;
    padding:20px;
    }
    </style>
