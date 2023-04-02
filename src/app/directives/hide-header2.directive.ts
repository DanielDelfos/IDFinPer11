import { Directive, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader2]',
  host: {
   '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideHeader2Directive {

  @Input('header2') header2: any;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController
  ) { 
    // console.log('hola mundo');
  }

  ngOnInit() {
    // console.log(this.header2);
    this.header2 = this.header2.el;

    // por performance, valido domcontroller
    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header2, 'transitions', 'margin-top 400ms');
    });
  }

  onContentScroll(event: any) {
    // console.log(event);
    // console.log(event.detail.scrollTop);
    
    // Si baje a cierto scroll oculto o no el header
    if(event.detail.scrollTop > 150) {
      // console.log('Esconder!!');
      // this.renderer.setStyle(this.header2, 'margin-top', '-20px')
      this.domCtrl.write(() => {
        this.renderer.setStyle(this.header2, 'margin-top', `-${this.header2.clientHeight}.px`);
      });  
    }else {
      // console.log('Mostrar!!');
      this.domCtrl.write(() => {
        this.renderer.setStyle(this.header2, 'margin-top', '0');
      });  
    }
  }

}
