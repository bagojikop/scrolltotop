import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scroll-bottom-top',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './scroll-bottom-top.component.html',
  styleUrl: './scroll-bottom-top.component.scss'
})
export class ScrollBottomTopComponent {
  isShow = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isShow = scrollPosition > this.topPosToStartShowing;
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
