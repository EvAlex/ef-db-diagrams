import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ClrType } from '../../models/clr-type';


@Component({
    selector: 'efd-clr-type',
    templateUrl: './clr-type.component.html',
    styleUrls: ['./clr-type.component.scss']
})
export class ClrTypeComponent implements OnInit, OnChanges {

    @Input()
    type: ClrType;

    tokens: Token[] = [];

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this.type instanceof ClrType) {
            this.tokens = getTokens(this.type);
        } else {
            this.tokens = [];
        }
    }

}

class Token {
    get isToken() { return this.type === TokenType.Token; }
    get isKeyword() { return this.type === TokenType.Keyword; }
    get isType() { return this.type === TokenType.Type; }

    constructor(
        public readonly value: string,
        public readonly type: TokenType
    ) {
    }
}

function getTokens(type: ClrType): Token[] {
    const result: Token[] = [];
    if (type.name === 'Nullable`1' && type.genericTypeArguments.length === 1) {
        const realType = type.genericTypeArguments[0];
        const tokenType = realType.isPrettyNameKeyword ? TokenType.Keyword : TokenType.Type;
        result.push(
            new Token(realType.prettyName, tokenType),
            new Token('?', TokenType.Token)
        );
    } else {
        const tokenType = type.isPrettyNameKeyword ? TokenType.Keyword : TokenType.Type;
        result.push(new Token(type.prettyName, tokenType));
        if (type.genericTypeArguments.length > 0) {
            result.push(new Token('<', TokenType.Token));
            for (let i = 0; i < type.genericTypeArguments.length; i++) {
                const cur = type.genericTypeArguments[i];
                const curType =  type.isPrettyNameKeyword ? TokenType.Keyword : TokenType.Type;
                const isLast = i + 1 === type.genericTypeArguments.length - 1;
                result.push(new Token(cur.prettyName, curType));
                if (!isLast) {
                    result.push(new Token(',', TokenType.Token));
                }
            }
            result.push(new Token('>', TokenType.Token));
        }
    }
    return result;
}

enum TokenType {
    Token,
    Keyword,
    Type
}
