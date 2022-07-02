import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  name = 'Formation Web';
  alignment = 'right';
  couleur = 'red';
  @Input() value: any;
  @Input() session: any;

  constructor() { }

  ngOnInit(): void {
  }

  inscrire() {
    console.log("inscription reussite!");
    this.session.participants++;
    if (this.session.participants = 20)
      this.session.isCompleted = true;
  }

}
