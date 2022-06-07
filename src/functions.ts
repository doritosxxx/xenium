/**
 * Formats number with precision.
 * @returns float number with precision.
 */
export function prec(x:number):string {
	// Two digits after dot. Remove zeros at the end.
	return x.toFixed(2).replace(/\.?0+$/, "")
}

/**
 * Adds "+" before the number. Stands for plusminus.
 * @param x - Number.
 * @returns Formatted number represented with string.
 */
export function pm(x:number): string;
export function pm(x:string): string;
export function pm(x:string|number): string {
	x = x.toString()
	return (x[0] === '-' ? '' : '+') + x;
}

/**
 * @returns Random integer between lower and upper inclusive.
 * @param lower Lower bound.
 * @param upper Upper bound.
*/
export function randomInRange(lower: number, upper: number): number{
	lower = ~~lower
	upper = ~~upper
	if(lower > upper)
		throw new RangeError("lower must be not greater than upper")

	return Math.ceil(Math.random()*(upper-lower + 1)) + lower - 1;
}