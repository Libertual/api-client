import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public links: any[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/Libertual/api-client',
      icon: 'web',
    },
    {
      name: 'Issues',
      url: 'https://github.com/Libertual/api-client/issues',
      icon: 'bug_report',
    },
    {
      name: 'Tecnual',
      url: 'https://github.com/tecnual',
      icon: 'person',
    },
  ];

  constructor() { }

  ngOnInit() { }
}
