import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  ngOnInit() {
    const profileImage = document.getElementsByClassName('image-profile')[0] as HTMLImageElement;
    const imageTitle = document.getElementsByClassName('image-title')[0] as HTMLParagraphElement;
    const imageDescription = document.getElementsByClassName('image-description')[0] as HTMLParagraphElement;
    const leftArrowButton = document.getElementsByClassName('left-arrow')[0] as HTMLButtonElement;
    const rightArrowButton = document.getElementsByClassName('right-arrow')[0] as HTMLButtonElement;

    const images = [
      { src: 'assets/images/rightnowpants.jpg', title: 'TODAY', description: 'Student BFH' },
      { src: 'assets/images/babypants.jpg', title: 'BACK IN THE DAYS', description: 'uncool since 2000' }
    ];

    let currentIndex = 0;

    leftArrowButton.addEventListener('click', () => {
      currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      updateImage();
    });

    rightArrowButton.addEventListener('click', () => {
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