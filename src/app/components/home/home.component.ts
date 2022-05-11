import { Component, OnInit } from '@angular/core';
import { MobileDetectorService } from '../../services/mobileDetector/mobile-detector.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { changeOpacityAnimation } from '../../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('insertRemoveTrigger', [
      transition(':enter', [
        useAnimation(changeOpacityAnimation, {
          params: {
            time: '5s'
          }
        })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  home = 1;
  isMobile: boolean = false;
  isShown: boolean = true
  animation = "";
  constructor(
    private mobileDetector: MobileDetectorService
  ) { }

  ngOnInit(): void {
    this.isMobile = this.mobileDetector.isMobile();
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.isShown = visible;
  }

}
