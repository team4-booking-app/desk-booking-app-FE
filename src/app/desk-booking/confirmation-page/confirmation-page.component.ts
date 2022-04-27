import { Component, OnInit } from '@angular/core';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss'],
})
export class ConfirmationPageComponent implements OnInit {
  config: CountdownConfig = {
    leftTime: 10,
    formatDate: ({ date }) => `${date / 1000}`,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onTimerComplete(e: CountdownEvent) {
    if (e.action == 'done') {
      this.router.navigate(['/overview']);
    }
  }
}
