import { Component, OnInit } from '@angular/core';
import { MobileDetectorService } from '../../services/mobileDetector/mobile-detector.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home=1;
  isMobile: boolean = false;
  constructor(
    private mobileDetector: MobileDetectorService,
  ) { }

  ngOnInit(): void {
    this.isMobile = this.mobileDetector.isMobile();
  }

}
