import {Directive, ElementRef, inject, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appBeverageStatus]',
  standalone: true
})
export class BeverageStatusDirective implements OnChanges {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);
  @Input({required: true}) appBeverageStatus: boolean | string;

  ngOnChanges(changes: SimpleChanges): void {
    const beverageStatusChanges = changes['appBeverageStatus'];
    if (beverageStatusChanges) {
      this.setBeverageStyles(beverageStatusChanges.currentValue);
    }
  }

  private setBeverageStyles(beverageStatus: boolean | string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '5px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'textAlign', 'center');
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderRadius', '5px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#ffffff');

    beverageStatus ? this.setBlueBg() : this.setGreenBg();
  }

  private setGreenBg() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#a3be8c');

  }

  private setBlueBg() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#6184ae');
  }
}
