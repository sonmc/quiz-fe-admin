import { Component, OnInit } from '@angular/core';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'team',
    templateUrl: './team.component.html'
})

export class TeamComponent implements OnInit {
    public tableData3: TableData;
    ngOnInit() {
        this.tableData3 = {
            headerRow: ['ID', 'Team Name', ''],
            dataRows: [
                ['1', 'Team Marketing'],
                ['2', 'Team TVTS'],
                ['3', 'Team RnD'],
            ]
        };
    }
}
