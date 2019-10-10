import {animate, animateChild, query, stagger, style, transition, trigger} from "@angular/animations";

export const listAnimation = [
  // nice stagger effect when showing existing elements
  trigger('listAnimation', [
    transition(':enter', [
      // child animation selector + stagger
      query('@listItemAnimation',
        stagger(150, animateChild())
      )
    ]),
  ]),
  trigger('listItemAnimation', [
    // cubic-bezier for a tiny bouncing feel
    transition(':enter', [
      style({ transform: 'scale(0.5)', opacity: 0 }),
      animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
        style({ transform: 'scale(1)', opacity: 1 }))
    ]),
    transition(':leave', [
      style({ transform: 'scale(1)', opacity: 1, height: '*' }),
      animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
        style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
    ]),
  ])
];
