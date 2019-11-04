import { Persona } from './../models/persona.model';
import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  implements OnInit {
  @Input() personaDato: Persona;
  persona: Persona;
  constructor() {
    this.persona = new Persona();
    this.personaDato = new Persona();
  }

  ngOnInit() {
    console.log('ng On init' );
  }
  guardarPersona() {
      console.log(this.persona);
  }

}
