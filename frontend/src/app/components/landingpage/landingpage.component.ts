import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  ngOnInit() {
    const profileImage = document.getElementById('profile-image') as HTMLImageElement;
    const imageTitle = document.getElementById('image-title') as HTMLParagraphElement;
    const imageDescription = document.getElementById('image-description') as HTMLParagraphElement;
    const toggleButton = document.getElementById('toggle-button') as HTMLButtonElement;

    const images = [
      { src: 'https://i.ibb.co/9gHsxQ7/rightnowpants.jpg', title: 'TODAY', description: 'Student BFH' },
      { src: 'frontend\src\assets\images\babypants.jpeg', title: 'BACK IN THE DAYS', description: 'uncool since 2000' }
    ];

    let currentIndex = 0;

    toggleButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });

    function updateImage() {
      profileImage.src = images[currentIndex].src;
      imageTitle.textContent = images[currentIndex].title;
      imageDescription.textContent = images[currentIndex].description;
    }

    // Initialisierung
    updateImage();
  }
}