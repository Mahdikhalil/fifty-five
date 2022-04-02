import {Component, OnInit} from '@angular/core';
import {ConfigHttpService} from 'src/services/config-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private httpConfig: ConfigHttpService) {
  }

  ngOnInit(): void {
    this.httpConfig.initializeApp();
  }

}
