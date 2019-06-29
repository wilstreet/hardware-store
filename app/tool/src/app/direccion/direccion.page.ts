import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { NavController, LoadingController  } from '@ionic/angular';
import { Tool, CrudService } from '../services/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.page.html',
  styleUrls: ['./direccion.page.scss'],
})
export class DireccionPage implements OnInit {
  
  tool: Tool = {
    task: '3104822764',
    createdAt: new Date().getTime(),
    priority: 'Wil',
   
  };
 
  toolId = null;

  constructor(public nav: NavController, public actionSheetController: ActionSheetController, public route: ActivatedRoute,  public toolService: CrudService, public loadingController: LoadingController) { }
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
      message: 'Enviando pedido'
    });
    await loading.present();
 
    if (this.toolId) {
      this.toolService.updateTool(this.tool, this.toolId).then(() => {
        loading.dismiss();
       this.nav.navigateForward('/home');
      });
    } else {
      this.toolService.addTool(this.tool).then(() => {
        loading.dismiss();
       this.nav.navigateForward('/home');
        
      });
    }
  }
 
}

