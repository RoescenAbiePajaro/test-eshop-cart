import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrl: './up.component.css'
})
export class UpComponent {
  private scrollToTopBtn: HTMLElement | null = null;

  constructor() {
      this.scrollToTopBtn = document.getElementById('scrollToTopBtn');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
      if (this.scrollToTopBtn) {
          const scrollPosition = window.scrollY;
          this.scrollToTopBtn.style.display = scrollPosition > 300 ? 'block' : 'none';
      }
  }

  scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
  