import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnChanges, DoCheck {

  public Editor = ClassicEditor;

  public model = {
    goals: '',
    needs: '',
    bounties: '',
  };

  data = {
    teamRows: [
      { name: 'Adam', admin_id: 3 },
      { name: 'Stas', admin_id: 123 },
      { name: 'Valter', admin_id: 13 },
    ],
    roleRows: [
      { title: 'Lead Bizdev', role_id: 5 },
      { title: 'Role', role_id: 10 },
      { title: 'Support', role_id: 11 },
    ]
  };

  arr: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  ngDoCheck() {
    console.log(this.model);
  }


  onSubmit() {

    this.arr = this.data.teamRows
      .map((teamRow, index) => ({
        ...teamRow, ...this.data.roleRows[ index ]
      }));

    console.log(this.arr);

  }
}
