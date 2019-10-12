import { Component, DoCheck, OnInit, QueryList, ViewChildren } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { of, throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Error } from 'tslint/lib/error';
import { HttpClient } from '@angular/common/http';
import { ReadDirective } from './read.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  constructor() {
  }

  public arr = [
    {
      id: 1,
      body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной\n' +
      '    "рыбой"\n' +
      '    для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и\n' +
      '    форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных\n' +
      '    изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация\n' +
      '    листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа\n' +
      '    Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
    },
    {
      id: 2,
      body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной\n' +
      '    "рыбой"\n' +
      '    для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и\n' +
      '    форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных\n' +
      '    изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация\n' +
      '    листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа\n' +
      '    Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
    },
    {
      id: 3,
      body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной\n' +
      '    "рыбой"\n' +
      '    для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и\n' +
      '    форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных\n' +
      '    изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация\n' +
      '    листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа\n' +
      '    Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
    },
  ];


  ngOnInit() {
  }
}
