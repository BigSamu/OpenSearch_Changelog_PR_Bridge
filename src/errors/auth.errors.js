import { CustomError } from "./base.errors";

/**
 * Represents an error that occurs when the authorized API key has not been configured.
 */
export class AuthorizedAPIKeyNotConfiguredError extends CustomError {
    /**
     * Creates a new MissingAuthorizedAPIKeyError instance.
     */
    constructor() {
        super(
            500,
            "Server error: CHANGELOG_PR_BRIDGE_SECRET_KEY is not configured",
            "Internal Server Error"
        );
    }
}

/**
 * Represents an error that occurs when an unauthorized API key is received.
 */
export class UnauthorizedAPIKeyReceivedError extends CustomError {
    /**
     * Creates a new UnauthorizedAPIKeyReceivedError instance.
     */
    constructor() {
        super(
            401,
            `Unauthorized API key received on ${new Date().toISOString()}`,
            "Unauthorized access"
        );
    }
}