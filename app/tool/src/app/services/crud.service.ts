import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tool {
  id?: string;
  task: string;
  priority:string;
  createdAt:number;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public toolsCollection: AngularFirestoreCollection<Tool>;
 
  public tools: Observable<Tool[]>;
 
  constructor(db: AngularFirestore) {
    this.toolsCollection = db.collection<Tool>('tools');
 
    this.tools = this.toolsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  gettools() {
    return this.tools;
  }
 
  getTool(id: string) {
    return this.toolsCollection.doc<Tool>(id).valueChanges();
  }
 
  updateTool(tool: Tool, id: string) {
    return this.toolsCollection.doc(id).update(tool);
  }
 
  addTool(tool: Tool) {
    return this.toolsCollection.add(tool);
  }
 
  removeTool(id: string) {
    return this.toolsCollection.doc(id).delete();
  }
}
