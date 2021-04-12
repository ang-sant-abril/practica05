import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-acceso-dom',
  templateUrl: './acceso-dom.component.html',
  styleUrls: ['./acceso-dom.component.css']
})
export class AccesoDomComponent implements OnInit {

  nombres: Array<string> = ['Juan','Carlos','Laura','Lucía'];
  @ViewChild('lista') listaRef: ElementRef;
  @ViewChildren('item') itemsRef: QueryList<any>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.listaRef.nativeElement, 'padding-left', '200px');
    console.log(this.itemsRef);
  }

  setDone(i: number): void {
    this.itemsRef.forEach((elem: any, index: number) => {
      if(i === index) {
        if (elem.nativeElement.style.textDecoration === '') {
          this.renderer.setStyle(elem.nativeElement, 'text-decoration', 'line-through');
        } else {
          this.renderer.setStyle(elem.nativeElement, 'text-decoration', '');
        }
      }
    })
  }

}
