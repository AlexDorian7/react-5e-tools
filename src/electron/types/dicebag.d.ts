declare module dicebag {
    export function roll(diceExpression: DiceExpression): number;
    export function pool(diceExpression: DiceExpression): Array<number>;
    export function parse(diceExpression: string): DiceExpresion;
}