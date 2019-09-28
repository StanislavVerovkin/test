import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  public invoiceForm: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {

    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([ this.initItemRows() ])
    });

    this.invoiceForm.setControl('itemRows', this.setRows(JSON.parse(localStorage.getItem('key'))));
  }

  setRows(rows): FormArray {

    const formArray = new FormArray([]);

    rows.itemRows.forEach((item: any) => {
      formArray.push(this._fb.group({
        itemname: item.itemname,
      }));
    });

    return formArray;
  }

  get formArr() {
    return this.invoiceForm.get('itemRows') as FormArray;
  }

  initItemRows() {
    return this._fb.group({
      itemname: [ '' ]
    });
  }

  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  onSubmit(data) {
    console.log(data);
    localStorage.setItem('key', JSON.stringify(data));
  }
}
