import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.page.html',
  styleUrls: ['./check-box.page.scss'],
})
export class CheckBoxPage implements OnInit {

  data = [
    {
      name: 'primary',
      Selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'seccess',
      selected: false
    },
    {
      name: 'warning',
      selected: true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
