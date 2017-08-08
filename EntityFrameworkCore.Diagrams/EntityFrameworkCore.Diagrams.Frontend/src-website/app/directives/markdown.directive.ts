import { Directive, ElementRef, Renderer2, AfterContentInit } from '@angular/core';
import { Converter } from 'showdown';

@Directive({
    selector: '[efdMarkdown]'
})
export class MarkdownDirective implements AfterContentInit {

    constructor(private _el: ElementRef, private _renderer: Renderer2) {
    }

    ngAfterContentInit() {
        const converter = new Converter();
        /*converter.addExtension([], 'codehighlight')

         showdown.extension('codehighlight', function() {
            function htmlunencode(text) {
                return (
                text
                    .replace(/&amp;/g, '&')
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                );
            }
            return [
                {
                type: 'output',
                filter: function (text, converter, options) {
                    // use new shodown's regexp engine to conditionally parse codeblocks
                    var left  = '<pre><code\\b[^>]*>',
                        right = '</code></pre>',
                        flags = 'g',
                        replacement = function (wholeMatch, match, left, right) {
                        // unescape match to prevent double escaping
                        match = htmlunencode(match);
                        return left + hljs.highlightAuto(match).value + right;
                        };
                    return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
                }
                }
            ];
        }); */

        const text = this._el.nativeElement.innerHTML
        const html = new Converter().makeHtml(text);
        this._renderer.setProperty(this._el.nativeElement, 'innerHTML', html);
    }

}

/* function showdownHighlight() {
    return [
        {
            type: "output"
          , filter (text, converter, options) {
                let left  = "<pre><code\\b[^>]*>"
                  , right = "</code></pre>"
                  , flags = "g"
                  , replacement = (wholeMatch, match, left, right) => {
                        match = decodeHtml(match);
                        return left + hljs.highlightAuto(match).value + right;
                    }
                  ;

                return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
            }
        }
    ];
} */
