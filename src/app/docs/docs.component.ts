import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css'],
})
export class DocsComponent implements OnInit {
  openTab = 1;

  constructor() {}

  ngOnInit(): void {}

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }
}
