# Logging guidelines

## Output

All logs must be written to stdout. Never write logs to files, external endpoints, or any other destination.

## Structured logging format

### Required fields

- Timestamp: ISO 8601 format in UTC.
- Level: ERROR, WARN, INFO, DEBUG.
- Message: Human-readable description.
- Service: Application/service name.
- Correlation ID: For request tracing.

### Optional context fields

- Error code: For error categorization.

## Correlation and traceability

### Correlation IDs

- request-id: Propagate through all service calls.
- trace-id: For distributed tracing integration.
- span-id: For OpenTelemetry span correlation.

### Context propagation

- Incoming requests: Extract and use existing correlation IDs.
- Outgoing requests: Propagate correlation IDs to downstream services.
- Error tracking: Include correlation IDs in error logs.
- Performance: Log correlation IDs for slow operations.

## Log levels and usage

### Level guidelines

- ERROR: System errors, exceptions, failures requiring attention.
- WARN: Potential issues, deprecated features, retries.
- INFO: Business events, user actions, system state changes.
- DEBUG: Detailed debugging information, development use only.

### Production logging

- Default level: INFO in production environments.
- Error context: Include stack traces and relevant context.
- Performance: Log high-impact operations with timing.
- Security: Log authentication/authorization events.

## Security and privacy

### Sensitive information protection

Never log:

- Passwords, tokens, API keys.
- Credit card numbers, personal identification.
- Session cookies, authentication tokens.
- User personal data (emails, phones, addresses).

## Integration with observability

### Metrics correlation

- Error rates: Log errors with metrics correlation.
- Performance: Include timing information in logs.
- Business metrics: Log business events for analytics.
- Health checks: Log service health information.

### Distributed tracing

- OpenTelemetry: Include trace and span IDs in logs.
- Cross-service: Maintain traceability across service boundaries.

## Best practices

### Message quality

- Descriptive messages: Clear, actionable log messages.
- Consistent format: Use consistent message templates.
- Context inclusion: Include relevant business context.
- Avoid noise: Don't log routine successful operations.

### Error handling

- Stack traces: Include full stack traces for errors.
- Error codes: Use consistent error categorization.
- Recovery actions: Log automated recovery attempts.

### Development vs production

- Development: More verbose logging for debugging.
- Production: Focus on business events and errors.
- Configuration: Use environment-specific log levels.
