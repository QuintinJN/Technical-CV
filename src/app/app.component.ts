import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from './services/api.service';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  // users: String[];
  @Input() public facts: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getFact();
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  // getUsers(){
  //   this.apiService.getData().subscribe((data) => {
  //     console.log(data);
  //     this.users = data;
  // });
  getFact(){
    this.apiService.getFact().subscribe((data) => {
      console.log(data);
      // tslint:disable-next-line:no-string-literal
      this.facts = data;
    });
  }

}
