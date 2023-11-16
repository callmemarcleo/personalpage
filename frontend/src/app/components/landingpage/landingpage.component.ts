import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  ngOnInit() {
    const profileImage = document.getElementsByClassName('profile-image')[0] as HTMLImageElement;
    const imageTitle = document.getElementsByClassName('image-title')[0] as HTMLParagraphElement;
    const imageDescription = document.getElementsByClassName('image-description')[0] as HTMLParagraphElement;
    const toggleButton = document.getElementsByClassName('toggle-button')[0] as HTMLButtonElement;

    const images = [
      { src: 'https://i.ibb.co/9gHsxQ7/rightnowpants.jpg', title: 'TODAY', description: 'Student BFH' },
      { src: 'https://i.ibb.co/1XFSn1r/babypants.jpg', title: 'BACK IN THE DAYS', description: 'uncool since 2000' }
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

