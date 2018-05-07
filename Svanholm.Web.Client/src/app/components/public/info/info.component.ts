import { Component, Directive, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
  //providers: [AuthService]
})

export class InfoComponent {
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

