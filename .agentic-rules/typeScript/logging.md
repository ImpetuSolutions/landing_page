TypeScript Logging Guidelines (Node.js & Next.js)
-------------------------------------------------

### Best Practices & Anti-patterns

*   **Use a Logging Library**: Never use console.log() for application logic in production; use a high-performance logger like **Pino** (recommended for speed) or **Winston**.
    
*   **Structured Logging (JSON)**:
    
    *   Avoid string concatenation or template literals for log messages.
        
    *   Always output logs as structured JSON to allow for easy parsing by log aggregators (Loki, ELK, Datadog).
        
    *   **Example**: logger.info({ userId: id }, "User logged in") instead of logger.info("User " + id + " logged in").
        
*   **Parameterized Context**:
    
    *   Include relevant metadata as an object (first argument) rather than embedding it in the message string.
        
    *   Explicitly name keys for clarity: logger.info({ orderId: id }, "processing order").
        
*   **Asynchronous & Non-blocking Logging**:
    
    *   Use the logger's built-in asynchronous modes (e.g., Pino's pino.destination({ sync: false })) to ensure logging does not block the Node.js event loop in high-throughput paths.
        
*   **Standard Output Only (12-Factor App)**:
    
    *   **Never** write logs to local files or manage log rotation within the application.
        
    *   Always stream logs to stdout and stderr.
        
*   **Correlation IDs & Tracing**:
    
    *   Use **AsyncLocalStorage** (Node.js) or Next.js middleware to automatically inject request-id, trace-id, and span\_id into every log entry without manual passing.
        
*   **Sensitive Data Exposure**:
    
    *   **Strictly Prohibited**: Never log passwords, bearer tokens, or PII (Personally Identifiable Information).
        
    *   Implement "redaction" at the logger level to automatically mask sensitive keys like email or credit\_card.
        
*   **Rich Context**:
    
    *   Avoid "naked" logs; every entry should include current context (e.g., service name, version, and environment).