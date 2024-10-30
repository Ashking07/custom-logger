// CustomLogger.js
class Logger {
  // Helper method to get a formatted timestamp
  getTimestamp() {
    return new Date().toISOString(); // e.g., 2024-10-28T15:53:00.000Z
  }

  // Main log method to format and print messages
  log(message, level) {
    const timestamp = this.getTimestamp();
    console.log(`[${timestamp}] [${level}]: ${message}`);
  }

  // Info level log
  info(message) {
    this.log(message, "INFO");
  }

  // Warning level log
  warn(message) {
    this.log(message, "WARNING");
  }

  // Error level log
  error(message) {
    this.log(message, "ERROR");
  }
}

module.exports = Logger;
