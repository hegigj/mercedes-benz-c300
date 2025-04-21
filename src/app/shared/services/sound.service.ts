import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private blinkerAudio = new Audio();

  constructor() {
    this.blinkerAudio.src = './assets/sound/blinker.mp3';
    this.blinkerAudio.load();
  }

  playBlinkerSound(): void {
    this.blinkerAudio.currentTime = 0; // Reset the audio to the beginning
    this.blinkerAudio.play().catch(error => {
      console.error('Error playing sound:', error);
    });
  }

  stopBlinkerSound(): void {
    this.blinkerAudio.pause();
    this.blinkerAudio.currentTime = 0; // Reset the audio to the beginning
  }
}
