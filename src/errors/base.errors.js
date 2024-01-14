/**
 * A base custom error class with default internal and public messages that can be overridden.
 */
export class CustomError extends Error {
    /** 
     * Creates a new CustomError instance.
     * @param {number} status - The HTTP status code.
     * @param {string} internalMessage - The internal error message to be logged for server-side debugging.
     * @param {string} publicMessage - The public error message to be returned in the response.
     */
    constructor(status, internalMessage = "An internal error occurred", publicMessage = "Internal Server Error") {
        super(internalMessage);
        this.status = status;
        this.internalMessage = internalMessage;
        this.publicMessage = publicMessage;
        this.name = this.constructor.name;
    }
}