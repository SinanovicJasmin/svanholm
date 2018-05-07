import { Component, Directive, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
    //providers: [AuthService]
})

export class PublicLayoutComponent implements AfterViewInit {

  activeRoute: string = 'forside';

    constructor(
        //private router: Router,
        //private activatedRoute: ActivatedRoute,
     
    ) {

    }

    ngAfterViewInit() {

  }

  addClass(menuItem: string) {
    this.activeRoute = menuItem;
  }
}

