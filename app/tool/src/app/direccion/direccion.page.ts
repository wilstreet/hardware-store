import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.page.html',
  styleUrls: ['./direccion.page.scss'],
})
export class DireccionPage implements OnInit {

  constructor(public nav: NavController, public actionSheetController: ActionSheetController) { }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      cssClass:'action',
      buttons: [{
        text: 'nuevos pedidos',
        role: 'destructive',
        icon: 'cart',
        handler: () => {
          this.nav.navigateForward('/elemento')
        }
      }, {
        text: 'Mis pedidos',
        icon: 'cart',
        
        handler: () => {
          this.nav.navigateForward('/home')
        }
      }, {
        text: 'Perfil',
        icon: 'contact',
        handler: () => {
          this.nav.navigateForward('/dashboard')
        }
      }, {
        text: 'nueva direccion',
        icon: 'map',
        handler: () => {
          this.nav.navigateForward('/direccion')
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
