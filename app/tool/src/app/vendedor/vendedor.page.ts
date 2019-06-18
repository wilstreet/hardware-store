import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.page.html',
  styleUrls: ['./vendedor.page.scss'],
})
export class VendedorPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      buttons: [{
        text: 'Inicio',
        role: 'destructive',
        icon: 'albums',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Ayuda',
        icon: 'help-buoy',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Perfil',
        icon: 'contact',
        handler: () => {
          console.log('Play clicked');
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
