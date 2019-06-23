import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, public nav: NavController, public alert:AlertController) { }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      cssClass:'ve',
      buttons: [{
     
        text: 'Inicio',
        role: 'destructive',
        icon: 'albums',
        handler: () => {
          this.nav.navigateForward('/vendedor');
        }
      }, {
        text: 'Ayuda',
        icon: 'help-buoy',
        handler: () => {
         this.nav.navigateForward('/help')
        }
      }, {
        text: 'Perfil',
        icon: 'contact',
        handler: () => {
          this.nav.navigateForward('/dashboard')
        }
      }, {
        text: 'Historial',
        icon: 'filing',
        handler: () => {
         this.nav.navigateForward('/history') 
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

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Gracias por tú opinion, es muy importante para nosotros.',
      buttons: ['OK'],
      cssClass:'alert'

    });

    await alert.present();
  }


  ngOnInit() {
  }

}
