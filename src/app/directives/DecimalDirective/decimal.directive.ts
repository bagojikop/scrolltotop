import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDecimal]',
  standalone: true,
  providers: [DecimalPipe, CurrencyPipe] // Add CurrencyPipe here
})
export class DecimalDirective {
  tempValue: number = 0;
  @Input() number = 0; // Precision control for decimal
  @Input() currency: string | undefined; // Currency code input

  constructor(
    private el: ElementRef,
    private decimalPipe: DecimalPipe,
    private currencyPipe: CurrencyPipe // Inject CurrencyPipe
  ) {}

  @HostListener("focus")
  private focus() {
    // Remove formatting and convert to a plain number
    const currentValue = this.el.nativeElement.value;
    const numericValue = currentValue.replace(/[^0-9.]/g, ''); // Strip out everything except numbers and dot
    this.el.nativeElement.value = numericValue;
    this.tempValue = parseFloat(numericValue); // Store as number
  }

  @HostListener('input', ['$event'])
  onInputChange(event) {
    const initialValue = this.el.nativeElement.value;
    // Update the regex to allow digits and decimal point
    this.el.nativeElement.value = initialValue.replace(/[^0-9.]/g, '');
    
    // Handle multiple decimal points
    if (this.el.nativeElement.value.split('.').length > 2) {
      this.el.nativeElement.value = this.el.nativeElement.value.replace(/\.+$/, '');
    }
    
    // Stop propagation if value has changed
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

  @HostListener("blur")
  private blur() {
    const value = parseFloat(this.el.nativeElement.value);
    
    if (!isNaN(value)) {
      // Check if currency is set, then use CurrencyPipe
      if (this.currency) {
        this.el.nativeElement.value = this.currencyPipe.transform(
          value,
          this.currency, // Currency code
          'symbol',     // Display the symbol (₹ for INR)
          `1.${this.number}-${this.number}`, // Format with precision
          'en-IN' // Locale to use for formatting (optional)
        );
      } else {
        this.el.nativeElement.value = this.decimalPipe.transform(
          value,
          `1.${this.number}-${this.number}`
        );
      }
    } else {
      this.el.nativeElement.value = this.decimalPipe.transform(
        this.tempValue,
        `1.${this.number}-${this.number}`
      );
    }
  }
}
