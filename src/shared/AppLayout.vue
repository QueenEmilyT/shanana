<template>
    <ion-page>
      <ion-header class="ion-no-border">
        <ion-toolbar style="padding-top: 20px; padding-bottom: 5px; border-bottom: solid 5px #7D3C98;">
            <ion-buttons slot="start" v-if="$route.name!='Home'">
                <ion-button>
                    <ion-icon :icon="arrowBackOutline" class="icon1"></ion-icon>
                    </ion-button>
            </ion-buttons>
            <ion-title style="text-align:left;">SHANANA</ion-title>
            <ion-buttons slot="end">
                <ion-button style="margin-right:5px;">
                    <ion-icon :icon="starOutline" class="icon1"></ion-icon>
                    </ion-button>
                    <ion-button style="margin-right:5px;">
                        <ion-icon :icon="mailOutline" class="icon1"></ion-icon>
                        </ion-button>
                         <ion-button>
                            <ion-icon :icon="ellipsisVertical" class="icon1"></ion-icon>
                            </ion-button>

              </ion-buttons>
          </ion-toolbar>

      </ion-header>

      <ion-content :fullscreen="true">


        <div id="container">
       <slot></slot>
        </div>


<div>

    <ion-footer style="position: fixed; bottom: 0px;background:white;" >
        <ion-toolbar>
        <ion-title>
        <ion-grid>
        <ion-row style="text-align:center ;">
        <ion-col size="4">
        <div>
        <ion-icon :icon="chatbubblesOutline" class="icon1"></ion-icon>
        </div>
        <div style="font-size: 13px">Forum</div>
        </ion-col>

        <ion-col size="4">
        <div><ion-icon :icon="searchOutline" class="icon1"></ion-icon></div>
        <div style="font-size: 13px">Search</div>
        </ion-col>

        <ion-col size="4">
        <div>
        <ion-icon :icon="briefcaseOutline" class="icon1"></ion-icon>
        </div>
        <div style="font-size: 13px">Appointments</div>
        </ion-col>
        </ion-row>
        </ion-grid>
        </ion-title>
        </ion-toolbar>
        </ion-footer>

</div>




      </ion-content>
    </ion-page>
  </template>

  <script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonFooter,
    IonCol,
    IonGrid,
    IonRow, } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import {

    starOutline,
    briefcaseOutline,
    chatbubblesOutline,
    searchOutline,
    mailOutline,
    ellipsisVertical,
    arrowBackOutline,

    } from "ionicons/icons";

  export default defineComponent({
    name: 'HomePage',
    components: {
IonContent,
IonHeader,
IonPage,
IonTitle,
IonToolbar,
IonFooter,
IonCol,
IonGrid,
IonRow,
    },
    setup(){return{
    briefcaseOutline,
    chatbubblesOutline,
    searchOutline,
    mailOutline,
    ellipsisVertical,
    arrowBackOutline,
    starOutline,


    }}
  });
  </script>

  <style scoped>
  #container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;

  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  #container a {
    text-decoration: none;
  }

  ion-toolbar {
    --background:#4A235A;
    --color:white;

  }
  </style>
