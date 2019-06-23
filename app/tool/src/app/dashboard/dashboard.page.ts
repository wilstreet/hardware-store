import { Component, OnInit } from '@angular/core';
import { NavController, } from '@ionic/angular';
import {  AuthenticationService } from '../services/authentication.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 
  userEmail: string;
 
  constructor(public actionSheetController: ActionSheetController, private navCtrl: NavController,
    private authService:  AuthenticationService) { }

    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Acciones',
        cssClass:'action',
        buttons: [{
          text: 'nuevos pedidos',
          role: 'destructive',
          icon: 'cart',
          handler: () => {
            this.navCtrl.navigateForward('/elemnto')
          }
        }, {
          text: 'Mis pedidos',
          icon: 'cart',
          
          handler: () => {
            this.navCtrl.navigateForward('/home')
          }
        }, {
          text: 'Perfil',
          icon: 'contact',
          handler: () => {
            this.navCtrl.navigateForward('/dashboard')
          }
        }, {
          text: 'nueva direccion',
          icon: 'map',
          handler: () => {
            this.navCtrl.navigateForward('/direccion')
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
    }

  ngOnInit() {
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
  }
 
  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }
}
  


