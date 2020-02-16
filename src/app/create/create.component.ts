import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from "./../actions/tutorial.actions";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  name : String = "";
  url : String = "";
  constructor(private store: Store<AppState>) { }
  
  addTutorial(){
    this.store.dispatch(new TutorialActions.AddTutorial({name : this.name, url :this.url}))
  }
  ngOnInit() {
  }

}
