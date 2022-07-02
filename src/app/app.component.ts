import { Component } from '@angular/core';

@Component({ // decorator - annotationmù55
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*styles:[`section {
    width: 100%;
    background-color: #32435b;
  }
  h1{
    color: #ffffff;
  }
  .description{
    font-style: italic;
    color: #ffffff;
  }    `]*/


})
export class AppComponent {
  title = 'angular-first-project';
  valeur = "valeur";
  first_session = {
    id : 1 ,
    name : 'Formation Web',
    track : 'MEAN Stack',
    date : new Date ('2008-12-01'),
    local : 'Lyon',
    participants : 0,
    duree : 3
  }
}
