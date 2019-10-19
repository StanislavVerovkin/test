import { Component, DoCheck, OnInit, QueryList, ViewChildren } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { of, throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Error } from 'tslint/lib/error';
import { HttpClient } from '@angular/common/http';
import { ReadDirective } from './read.directive';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {

  }

}
