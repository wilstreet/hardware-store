import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Tool, CrudService } from '../services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.page.html',
  styleUrls: ['./elemento.page.scss'],
})
export class ElementoPage implements OnInit {

  tool: Tool = {
    task: '¿Que deseas?',
    createdAt: new Date().getTime(),
    priority: 'dirección'
  };
 
  toolId = null;

  constructor(public actionSheetController: ActionSheetController,public route: ActivatedRoute, public nav: NavController, public toolService: CrudService, public loadingController: LoadingController ) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      buttons: [{
        text: 'nuevos pedidos',
        role: 'destructive',
        icon: 'cart',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Mis pedidos',
        icon: 'cart',
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
        text: 'nueva direccion',
        icon: 'map',
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
    this.toolId = this.route.snapshot.params['id'];
    if (this.toolId)  {
      this.loadtool();
    }
  }
 
  async loadtool() {
    const loading = await this.loadingController.create({
      message: 'Loading Tool..'
    });
    await loading.present();
 
    this.toolService.getTool(this.toolId).subscribe(res => {
      loading.dismiss();
      this.tool = res;
    });
  }
 
  async savetool() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Tool..'
    });
    await loading.present();
 
    if (this.toolId) {
      this.toolService.updateTool(this.tool, this.toolId).then(() => {
        loading.dismiss();
        this.nav.goBack('home');
      });
    } else {
      this.toolService.addTool(this.tool).then(() => {
        loading.dismiss();
        this.nav.goBack('home');
      });
    }
  }
 
}

