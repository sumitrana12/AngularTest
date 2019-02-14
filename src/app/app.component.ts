import { Component, OnInit, Inject } from '@angular/core';
import { RootObject, HitsItem, TableData } from './story.model';
import { SelectionModel } from '@angular/cdk/collections';
import {AppService} from './app.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource} from '@angular/material';
import { element } from 'protractor';
import { interval } from 'rxjs/observable/interval';
import {DialogueComponent} from './dialogue/dialogue.component';
import { Jsonp } from '@angular/http';
import { all } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app';
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  formatData: Object[] = [
    {title: 'To Moon', url: 'www.tomoon.com', created_at: 'New Delhi', author: 'Sumit Rana'},
    {title: 'Twilight', url: 'www.twilight.com', created_at: 'Washington', author: 'Miachael'},
    {title: 'Nice Book', url: 'www.nice.com', created_at: 'Punjab', author: 'Ochit'},
    {title: 'Murder', url: 'www.germany.com', created_at: 'Germany', author: 'Rehan'},
    {title: 'Race To Win', url: 'www.england.com', created_at: 'England', author: 'Sachin'},
    {title: 'Shobhit', url: 'www.sachin.com', created_at: 'Lohia', author: 'Kapil'},

  ];

  storyList: RootObject;
  tableDataList: TableData[];
  tableData: TableData;
  subscription: any;
  dataSource: any;

  // tslint:disable-next-line:no-inferrable-types
  selectedRowIndex: number = 0;


   constructor(private _appService: AppService, public dialog: MatDialog) {
    this.getStories();
    this.subscription = interval(10000).subscribe(x => {
      this.getStories();
     });
   }

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   getStories() {
     this._appService.getStories().subscribe(result => {
       this.storyList = result;
       this.getTableData();
     });
   }


   getTableData() {
   this.tableDataList = [];
   if (this.storyList != null) {
    for (const hits of this.storyList.hits) {
      if (hits != null) {
              this.tableData = <TableData>{};
              this.tableData.author = hits.author;
              this.tableData.title = hits.title;
              this.tableData.url = hits.url;
              this.tableData.created_at = hits.url;

            this.tableDataList.push(this.tableData);
       }
    }
    this.dataSource = new MatTableDataSource(this.tableDataList);
   }
   }



   ngOnInit() {

   }

   selectedRow(row) {
       const data = JSON.stringify(row);
       this.openDialog(data);
   }

   openDialog(selectedData): void {
    const dialogRef = this.dialog.open(DialogueComponent, {
      width: '450px',
      height: '350px',
      data: selectedData,
    });

  }


}
