import { Todo, TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
 
  todo: Todo = {
    task: 'test',
    createdAt: new Date().getTime(),
    priority: 2
  };
 
  todoId = null;
 
  constructor(private route: ActivatedRoute, 
    private nav: NavController, private todoService: TodoService, 
    private alertController: AlertController,
    private loadingController: LoadingController) { }
 
  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }
 
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
 
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Item Saved',
      buttons: ['OK']
    });
    
    await alert.present();
  }
  
 
  async saveTodo() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
 
    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.presentAlert();
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.presentAlert();
      });
    }
  }
 
}
