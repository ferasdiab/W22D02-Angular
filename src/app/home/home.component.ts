import { Component, OnInit,Input  } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @Input() nameOf: String = "";
  todos: String[] = ["eat", "study", "sleep"];
  email: String = "";
  task:String=""
  updateTask:String=""
  a:boolean = true
  color:boolean=true
  nameOf:String='firas diab'
  selectedIndex:number=-Infinity
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  changeA(){
    if (this.a){
    this.a=false
    }else{
      this.a=true
    }
  }
  changeColor(){
    this.color=!this.color
  }
  addToList(){
    this.todos.push(this.task)
    this.task=''
  }
  deleteTask(i:number){
    this.todos.splice(i,1)    
  }
  updateTheTask(){
    this.todos.splice(this.selectedIndex,1,this.updateTask)
    this.updateTask=''
    this.changeA()
  }
  showInForUpdate(i:number){
    this.selectedIndex = i 
this.changeA()
  }
}
