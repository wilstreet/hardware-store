import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Tool, CrudService } from '../services/crud.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  tools: Tool[];

  constructor(public actionSheetController: ActionSheetController, public nav: NavController, private toolService: CrudService, ) { }
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
    this.toolService.gettools().subscribe(res => {
      this.tools = res;
    });
  }
 
  remove(item: { id: string; }) {
    this.toolService.removeTool(item.id);
  }
}

