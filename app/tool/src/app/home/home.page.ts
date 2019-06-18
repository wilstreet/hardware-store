import { Component, OnInit } from '@angular/core';
import { Tool, CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  tools: Tool[];

  constructor(private toolService: CrudService) { }

  ngOnInit() {

    this.toolService.gettools().subscribe(res => {
      this.tools = res;
    });
  }
 
  remove(item: { id: string; }) {
    this.toolService.removeTool(item.id);
  }
}
