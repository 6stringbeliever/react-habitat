import * as React           from 'react';
import * as ReactDOM        from 'react-dom';

import {IDOMFactory}        from '../interfaces/IDOMFactory';

export class ReactDOMFactory implements IDOMFactory {

    identifier() {
      return 'React';
    }

    inject(module: any, props: {}, target: Element) {

        if(target){
            ReactDOM.render(
                React.createElement(module, props || {}),
                target
            );
        } else {
          console.warn('Target element is null or undefined. Cannot inject component');
        }
    }
}