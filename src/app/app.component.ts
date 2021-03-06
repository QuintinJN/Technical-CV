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
  title = 'CV';
  @Input() public facts: any[] = [];
  @Input() public users: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getFact();
    this.getUsers();
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  getFact(){
     this.apiService.getFact().subscribe((data) => {
       console.log(data);
       this.facts = data;
     });
   }
   getUsers(){
     this.apiService.getUsers().subscribe((data) => {
       console.log(data);
       this.users = data;
     });
   }
}
