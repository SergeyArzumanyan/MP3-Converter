import { Component } from '@angular/core';
import { ConfigService } from "@Core/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public configService: ConfigService) {}
}
