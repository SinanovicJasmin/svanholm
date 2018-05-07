import { Component, Directive, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'sv-accordion-group',
  templateUrl: './sv-accordion-group.component.html',
  styleUrls: ['./sv-accordion-group.component.css']
})

export class SvAccordionGroupComponent {
  @Input() heading: string;
  @Input() done: boolean;

  ngOnInit() {
  }

  openChanged(opened, el) {
    if (opened) {
      setTimeout(() => el.scrollIntoView());
    }
  }
}

