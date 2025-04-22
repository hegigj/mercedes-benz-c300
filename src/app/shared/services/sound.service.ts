import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private mute: boolean = false;

  private blinkerAudio = new Audio();
  private engineAudio = new Audio();
  private engineIdleVolume: number = .5;

  constructor() {
    this.blinkerAudio.src = './assets/sound/blinker.mp3';
    this.blinkerAudio.load();

    this.engineAudio.src = './assets/sound/blinker.mp3';
    this.engineAudio.volume = this.engineIdleVolume;
    this.engineAudio.load();
  }

  muteSounds(): void {
    this.mute = true;

    this.stopBlinkerSound();
    this.stopEngineSound();
  }

  unmuteSounds(): void {
    this.mute = false;
  }

  playBlinkerSound(): void {
    if (!this.mute) {
      this.blinkerAudio.currentTime = 0;
      this.blinkerAudio.play().catch(error => {
        console.error('Error playing sound:', error);
      });
    }
  }

  stopBlinkerSound(): void {
    this.blinkerAudio.pause();
    this.blinkerAudio.currentTime = 0;
  }

  playEngineSound(): void {
    if (!this.mute) {
      this.engineAudio.currentTime = 0;
      this.engineAudio.play().catch(error => {
        console.error('Error playing sound:', error);
      });
    }
  }

  adjustEngineSoundVolume(volume: number): void {
    if (!this.mute) {
      this.engineAudio.volume = volume <= this.engineIdleVolume ? this.engineIdleVolume : volume;
    }
  }

  stopEngineSound(): void {
    this.engineAudio.pause();
    this.engineAudio.currentTime = 0;
  }
}
