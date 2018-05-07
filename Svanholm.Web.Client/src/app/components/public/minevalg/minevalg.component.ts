import { Component, Directive, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './minevalg.component.html',
    styleUrls: ['./minevalg.component.css']
    //providers: [AuthService]
})

export class MinevalgComponent implements AfterViewInit {

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {

    }

    ngAfterViewInit() {

  }

  editData(page: string, section: string) {
    if (section) {
      this.router.navigate(['/' + page, { section: section }]);
    } else {
      this.router.navigate(['/' + page]);
    }
    
  }
}

