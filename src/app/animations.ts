import { animation, style, animate } from '@angular/animations';

export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}',
    backdropFilter: 'opacity(20%)',
  }),
  animate('{{ time }}')
]);

export const flyInTopAnimation = animation([
  style({
    transform: 'translateY(-100%)',
  }),
  animate('3s')
]);

export const flyInOutAnimation = animation([
  style({
    transform: 'translateX(-100%)',
  }),
  animate('{{time}}')
]);

export const changeOpacityAnimation = animation([
  style({
    opacity: '0',
  }),
  animate('{{time}}', style({opacity:1}))
]);

export const rotateAnimation = animation([
   style({ 
     transform: 'rotate(0)',
     }),
    animate('1500ms ease-out', style({transform: 'rotate(-360deg)'})),
]);