<template>
    <div>
    <app-layout v-if="$store.state.screen=='home'">
    <ion-row style="padding-top:2px;padding-bottom:150px;backround: #E8DAEF ;">
    <ion-col size="12" style="padding:0;">
    <ion-card style="border: solid 1px  #D2B4DE; margin:0px;box-shadow:none;margin-top:0;border-radius:0px;margin-bottom:3px;margin-top:-10px;">
    <!-- <img :src="'../../assets/images/bg1.JPG'" style="height:100px;width:100%;"/> -->
    <div :style="'height:100px;background-image:url('+'../../assets/images/bg1.JPG'+');background-size:cover;background-position:center;'"></div>
    <ion-card-header>
    <ion-card-subtitle style="text-align:left;"><ion-icon :icon="heartOutline" style="margin-right:10px;color:#7D3C98"></ion-icon>Beauty Tips</ion-card-subtitle>
    <ion-card-title style="text-align:left;color:#4A235A;">
    Skin care
    <ion-chip :outline="true" style="float:right;border: solid 1px  #D2B4DE;font-size:12px;color:white;background:#4A235A; ">View more</ion-chip>
    </ion-card-title>
    </ion-card-header>
    <ion-card-content style="text-align:left;">
    Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
    </ion-card-content>
    </ion-card>
    </ion-col>







    <ion-col size="4" style="height: 120px" class="border">
    <div class="borderIn">
    <div style="text-align: center">
    <ion-thumbnail style="text-align: center;margin-left: 25%">
    <ion-img
    :src="'../../assets/icon/hair.png'"

    ></ion-img>
    </ion-thumbnail>
    </div>
    <div class="tab-padding-top">Hair</div>
    </div>
    </ion-col>





    <ion-col size="4" style="height: 120px" class="border">
    <div class="borderIn">
    <div style="text-align: center">
    <ion-thumbnail style="text-align: center;margin-left: 25%">
    <ion-img
    :src="'../../assets/icon/woman-nail.png'"

    ></ion-img>
    </ion-thumbnail>
    </div>
    <div class="tab-padding-top">Nails</div>
    </div>
    </ion-col>


    <ion-col size="4" style="height: 120px" class="border">
    <div class="borderIn">
    <div style="text-align: center">
    <ion-thumbnail style="text-align: center;margin-left: 25%">
    <ion-img
    :src="'../../assets/icon/makeup.png'"

    ></ion-img>
    </ion-thumbnail>
    </div>
    <div class="tab-padding-top">Make Up</div>
    </div>
    </ion-col>


    <ion-col size="4" style="height: 120px" class="border">
    <div class="borderIn">
    <div style="text-align: center">
    <ion-thumbnail style="text-align: center;margin-left: 25%">
    <ion-img
    :src="'../../assets/icon/cosmetic.png'"
    style=""
    ></ion-img>
    </ion-thumbnail>
    </div>
    <div class="tab-padding-top">Skin Care</div>
    </div>
    </ion-col>









    <ion-col size="4" style="height: 120px" class="border">
    <div class="borderIn">
    <div style="text-align: center">
    <ion-thumbnail style=" text-align: center;margin-left: 25%">
    <ion-img
    :src="'../../assets/icon/spa.png'"

    ></ion-img>
    </ion-thumbnail>
    </div>
    <div class="tab-padding-top">Spa</div>
    </div>
    </ion-col>





    <ion-col size="4" style="height: 120px" class="border">
    <div class="borderIn">
    <div style="text-align: center">
    <ion-thumbnail style="text-align: center;margin-left: 25%">
    <ion-img
    :src="'../../assets/icon/star.png'"

    ></ion-img>
    </ion-thumbnail>
    </div>
    <div class="tab-padding-top">Products</div>
    </div>
    </ion-col>

    <ion-col size="12"  @click="nav('/near')">
    <div class="borderIn">
    <ion-row>
    <ion-col size="2">
    <ion-icon :icon="locationOutline" style="font-size: 25px;"></ion-icon>
    </ion-col>
    <ion-col size="10" style="text-align:left;">
    <span>Find services near you</span>
    </ion-col>
    </ion-row>
    </div>
    </ion-col>



    </ion-row>
</app-layout>
    <div>
      
    <Login v-if="$store.state.screen=='login'"/>
    <SignUp v-if="$store.state.screen=='signup'"/>
    <NewUser v-if="$store.state.screen=='newuser'"/>
    <CreateServiceProvider v-if="$store.state.screen=='createservice'"/>
    <CreateServiceProfession v-if="$store.state.screen=='createprofession'"/>
    <UploadFiles v-if="$store.state.screen=='uploadpictures'"/>
    <CreateUserBio v-if="$store.state.screen=='createuser'"/>
    <CreateUserContact v-if="$store.state.screen=='createusercontact'"/>


    </div>

</div>


    </template>

    <script>
    import {
    IonImg,
    IonThumbnail,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonChip
    } from "@ionic/vue";
    import {
    arrowBackCircle,
    starOutline,
    searchOutline,
    mailOutline,
    notificationsCircleOutline,
    ellipsisVertical,
    heartOutline,
    locationOutline,
    briefcaseOutline
    } from "ionicons/icons";
    import { defineComponent } from "vue";
    import AppLayout from '@/shared/AppLayout';
    import Login from '@/auth/Login';
    import SignUp from '@/auth/SignUp';
    import NewUser from '@/auth/NewUser';
    import CreateServiceProvider from '@/auth/CreateServiceProvider';
    import CreateServiceProfession from '@/auth/CreateServiceProfession';
    import UploadFiles from '@/auth/UploadFiles';
    import CreateUserBio from '@/auth/CreateUserBio';
    import CreateUserContact from '@/auth/CreateUserContact';


    export default defineComponent({
    name: "HomePage",
    components: {
    AppLayout,
    IonImg,
    IonThumbnail,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonChip,
    Login,
    SignUp,
    NewUser,
    CreateServiceProvider,
    CreateServiceProfession,
    UploadFiles,
    CreateUserBio,
    CreateUserContact,




    },

    setup() {
    return {
    briefcaseOutline,
    searchOutline,
    mailOutline,
    notificationsCircleOutline,
    ellipsisVertical,
    heartOutline,
    locationOutline,
    arrowBackCircle,
    starOutline,
    };
    },

    data() {
    return {






    };
    },






    });
    </script>

    <style>
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
    padding: 0;
    }

    #container a {
    text-decoration: none;
    }

    .border {
    padding: 4px;
    font-size: 14px;
    margin-bottom:5px;

    }
    .borderIn{
    border: solid 1px  #D2B4DE ;
    padding: 14px;
    border-radius: 10px;
    background:white;

    }
    .icon1 {
    font-size: 23px;
    }

    .header-fixed {
    position: fixed;
    width: 100%;
    }
    .tab-padding-top {
    padding: 10px;
    }

    ion-col{
    --background:#000000;
    }

    </style>
