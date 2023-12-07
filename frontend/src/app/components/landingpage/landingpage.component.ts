import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  text = '';
  titles = ['Selfmade', 'Portfolio', 'Marc Leo'];
  currentIndex = 0;

  ngOnInit() {
    this.typewriterEffect();
  }

  typewriterEffect() {
    let i = 0;
    const speed = 80; // Anpassung der Schreibgeschwindigkeit

    const type = () => {
      if (i < this.titles[this.currentIndex].length) {
        this.text += this.titles[this.currentIndex].charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        // Schreibvorgang abgeschlossen
        if (this.currentIndex < this.titles.length - 1) {
          // Nicht der letzte Titel, starte Löschvorgang
          setTimeout(() => this.deleteEffect(), 1000);
        }
      }
    };

    type();
  }

  deleteEffect() {
    let i = this.titles[this.currentIndex].length - 1;
    const speed = 80; // Anpassung der Löschgeschwindigkeit

    const deleteChar = () => {
      if (i >= 0) {
        this.text = this.text.slice(0, -1);
        i--;
        setTimeout(deleteChar, speed);
      } else {
        // Löschvorgang abgeschlossen, bewege zum nächsten Titel
        this.currentIndex++;
        if (this.currentIndex < this.titles.length) {
          this.typewriterEffect();
        }
      }
    };

    deleteChar();
  }
}
