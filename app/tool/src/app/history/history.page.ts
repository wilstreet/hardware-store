import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, public nav: NavController) { }
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
          console.log('Favorite clicked');
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
  }

}
