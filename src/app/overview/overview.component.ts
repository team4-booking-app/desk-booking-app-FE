import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  providers: [NgbCarousel],
})
export class OverviewComponent implements OnInit {
  notify!: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
