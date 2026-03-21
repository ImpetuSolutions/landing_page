Security Patterns Best Practices (TypeScript & Next.js)
-------------------------------------------------------

As a security-aware fullstack developer, you must strictly follow these secure coding patterns for Node.js and Next.js applications.

### Security Patterns Rules Definition

*   **Secret Management**: **Never** hardcode secrets, credentials, or API keys in code or configuration files. **Always** use .env files (via dotenv or Next.js built-ins) and ensure they are never committed to version control.
    
*   **HTTP Headers**: **Never** send or receive custom HTTP headers unless explicitly approved and security risks are clearly understood. Use Helmet (Node) or Next.js Security Headers to set standard secure headers.
    
*   **Input Validation**: **Always** validate all input data using an allow-list strategy. Use libraries like **Zod** or **Joi** to enforce strict schemas for API requests, form data, and environment variables.
    
*   **Dynamic Execution**: **Never** use eval(), new Function(), or dynamic require() with external input. Avoid using unsafe-eval in your Content Security Policy (CSP).
    
*   **Information Leakage**: **Never** expose sensitive information in logs, query parameters, stack traces, or user-facing error responses. Ensure Next.js custom error pages do not leak server-side environment variables.
    
*   **Error Handling**: **Always** handle errors securely. Use try/catch blocks and global error handlers to return sanitized error messages to the client.
    
*   **CORS**: **Never** configure permissive CORS settings (e.g., origin: '\*'). **Always** start from the least permissive configuration possible, explicitly listing allowed origins.
    
*   **Resource Identifiers**: **Avoid** generating sequential or predictable resource identifiers; use **UUID v4**, **CUID**, or **NanoID** instead.
    
*   **Cryptographic Primitives**: **Never** use insecure or deprecated cryptographic primitives (e.g., MD5). Use the native node:crypto module or high-level libraries like argon2 for password hashing.
    
*   **Shared Mutable State**: **Never** rely on global variables or shared mutable state in a Node.js request-handling context. Node's single-threaded event loop makes shared global state highly susceptible to data leaks between concurrent requests.
    
*   **HTTP Methods**: **Never** use the GET method for operations that modify state or data. Use POST, PUT, PATCH, or DELETE with appropriate CSRF protection.
    
*   **User Identity**: **Always** retrieve user identity from trusted, non-manipulatable sources (e.g., secure HTTP-only cookies or verified JWTs). **Never** trust user-provided IDs directly in request bodies or query strings.
    
*   **Deserialization**: **Never** use JSON.parse() on untrusted input without subsequent schema validation (e.g., Zod). Avoid native JS serialization if possible; prefer safe, structured JSON.
    
*   **Randomness**: **Never** use Math.random() for security-sensitive values. **Always** use crypto.randomBytes() or crypto.getRandomValues() for tokens and seeds.
    
*   **Regex Safety**: **Never** use regular expressions with exponential complexity on user input; **always** validate regexes or use libraries that prevent ReDoS (Regular Expression Denial of Service).
    
*   **Injection Prevention**: **Never** concatenate strings for database queries. **Always** use parameterized queries via an ORM/Query Builder (e.g., **Prisma**, **Drizzle**, or **TypeORM**).
    
*   **PII in URLs**: **Never** receive or process PII data, access tokens, or credentials through query parameters.
    
*   **SSRF Protection**: **Never** pass user-controlled input directly to outbound HTTP clients (e.g., fetch, axios). Validate all destinations against a static allow-list or trusted pattern.
    
*   **File Uploads**: **Never** accept file uploads without validating type (Magic Bytes), size, and name. **Always** rename files with secure UUIDs and store them in a secure bucket (e.g., S3) rather than the local file system.
    
*   **Business Logic**: **Always** validate that user actions follow valid business workflows and state transitions server-side.
    
*   **Server-Side Validation**: **Always** enforce critical business logic validations on the server, regardless of any client-side checks performed in the React frontend.