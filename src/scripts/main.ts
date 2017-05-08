import 'core-js/shim';
import { run } from '@cycle/rxjs-run';
import { VNode, makeDOMDriver, h1 } from '@cycle/dom';
import { Observable as o } from 'rxjs';
import { DOMSource } from '@cycle/dom/rxjs-typings';

type So = {
  DOM: DOMSource
};

type Si = {
  DOM: o<VNode>
};

function main({ DOM }: So): Si {
  const dom$ = o.of(h1(['It works!']));

  return {
    DOM: dom$
  };
}

run(main, {
  DOM: makeDOMDriver('#app')
});


