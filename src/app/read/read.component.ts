import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Tutorial } from '../models/tutorial.model';
import { Store } from '@ngrx/store';
import { AppState } from "./../app.state";
import * as TuturialActions from "../actions/tutorial.actions";
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorialReducer');
  }
  delTutorial(index){
    this.store.dispatch(new TuturialActions.RemoveTutorial(index))
  }
  ngOnInit() {
  }

}
