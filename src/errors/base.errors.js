/**
 * A base custom error class with a default error message that can be overridden.
 */
export class CustomError extends Error {
    /** 
     * Creates a new CustomError instance.
     * @param {number} status - The HTTP status code.
     * @param {string} message - The error message to be returned in the response.
     */
    constructor(status, message = "Internal Server Error") {
        super(message);
        this.status = status;
        this.message = message;
        this.name = this.constructor.name;
    }
}