import { CustomError } from "./base.errors.js";
/**
 * Represents an error that occurs when an unauthorized API key is received.
 */
export class UnauthorizedAPIKeyError extends CustomError {
    /**
     * Creates a new UnauthorizedAPIKeyReceivedError instance.
     */
    constructor() {
        super(
            401,
            "Unauthorized access"
        );
    }
}