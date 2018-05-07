import { Component, Directive, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
    //providers: [AuthService]
})

export class StartComponent {

    constructor(
        //private router: Router,
        //private activatedRoute: ActivatedRoute,
     
    ) {

    }

  ngOnInit() {

  }
}

