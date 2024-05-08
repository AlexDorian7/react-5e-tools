import { parse, pool } from 'dicebag';

export function rollDice(expression: string): Array<number> {
    const dice = parse(expression);
    return pool(dice);
}