import { Directive, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTodoStatus]'
})
export class TodoStatusDirective implements AfterViewInit {

  @Input() appTodoStatus:boolean;
  constructor(private elRef:ElementRef) { }

  ngAfterViewInit() {
    console.log('Span existe', this.appTodoStatus, this.elRef);
    this.elRef.nativeElement.className =this.appTodoStatus ? 'complete' : 'incomplete';
  }


  
}
