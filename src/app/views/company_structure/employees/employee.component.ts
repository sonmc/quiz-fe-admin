import { Component, OnInit } from '@angular/core';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit {
    public tableData3: TableData;
    ngOnInit() {
        this.tableData3 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City', ''],
            dataRows: [
                ['1', 'Dakota Rice (Success)', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas']
            ]
        };
    }
}
