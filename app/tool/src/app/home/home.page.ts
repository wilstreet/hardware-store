import { Component, OnInit } from '@angular/core';
import { Tool, CrudService } from '../services/crud.service';
import { NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  tools: Tool[];

  constructor(private toolService: CrudService, public navCtrl: NavController,  public actionSheetController: ActionSheetController ) { }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      cssClass:'action',
      buttons: [{
        text: 'nuevos pedidos',
        role: 'destructive',
        icon: 'cart',
        handler: () => {
          this.navCtrl.navigateForward('/elemento')
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

    this.toolService.gettools().subscribe(res => {
      this.tools = res;
    });
  }
 
  remove(item: { id: string; }) {
    this.toolService.removeTool(item.id);
  }
}
