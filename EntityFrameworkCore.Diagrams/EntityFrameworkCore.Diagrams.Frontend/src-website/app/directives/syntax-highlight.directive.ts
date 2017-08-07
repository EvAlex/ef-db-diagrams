import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[efdSyntaxHighlight]',
})
export class SyntaxHighlightDirective implements OnInit {

    @Input()
    efdSyntaxHighlight: string;

    constructor(private readonly _el: ElementRef, private readonly _renderer: Renderer2) {
    }

    ngOnInit() {
        if ('hljs' in window) {
            const hljs = window['hljs'];
            const element = this._el.nativeElement as Element;
            const codeElement = element.nodeName === 'CODE'
                ? element
                : element.querySelector('code') || element;
            if (this.efdSyntaxHighlight) {
                codeElement.classList.add(this.efdSyntaxHighlight);
            }
            hljs.highlightBlock(codeElement);
        } else {
            console.error('Highlight.js API not available')
        }
    }

}
