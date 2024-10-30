// testLogger.js
const Logger = require("./CustomLogger");

// Create an instance of Logger
const logger = new Logger();

// Test each log level
logger.info("This is an informational message.");
logger.warn("This is a warning message.");
logger.error("This is an error message.");
