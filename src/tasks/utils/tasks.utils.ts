/**
 * Calculates a price based on a set of business rules.
 *
 * @returns The calculated price as a number.
 */
export function calculatePrice(): number {
    return Math.floor(Math.random() * 100) + 1
}
