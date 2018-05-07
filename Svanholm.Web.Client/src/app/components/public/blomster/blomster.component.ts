import { Component, Directive, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
    changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './blomster.component.html',
  styleUrls: ['./blomster.component.css']
    //providers: [AuthService]
})

export class BlomsterComponent {
  selectedSection: string = null;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    if (this.activatedRoute.params) {
      this.activatedRoute.params.forEach((a) => {
        if (a.section)
          this.selectedSection = a.section
      });
    }
  }
}

