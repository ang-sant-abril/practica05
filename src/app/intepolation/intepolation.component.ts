import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intepolation',
  templateUrl: './intepolation.component.html',
  styleUrls: ['./intepolation.component.css']
})
export class IntepolationComponent implements OnInit {

  actor: any = {
    apellidos: 'De Niro',
    nombre: 'Robert',
    fechaNacimiento: new Date(1943, 7, 17)
  }

  constructor() { }

  ngOnInit(): void {
  }

  getEdad(): number {
    let edad: number = (new Date().getTime() - this.actor.fechaNacimiento.getTime()) / (365 * 24 * 60 * 60 * 1000);
    return Math.ceil(edad);
  }

}
