# Observability guidelines

## Observability stack

### Tracing and metrics: OpenTelemetry + Datadog

- Architecture: Application - OTLP - Datadog agent (port 4318 HTTP).
- Instrumentation: via OTel SDK — prefer auto-instrumentation over manual.
- Traces endpoint: configured via `${OTEL_TRACES_ENDPOINT}` environment variable.
- Metrics endpoint: configured via `${OTEL_METRICS_ENDPOINT}` environment variable.
- Add custom spans only when business context is not captured automatically.

### Logs: stdout - Datadog agent

- Output: stdout only — never write to files.
- Datadog agent collects all container logs automatically — no additional setup needed.

## Correlation and context

### Request correlation

- Propagate trace context following W3C trace context specification.
- Include correlation IDs (request-id, trace-id, span-id) in all log entries.
- Maintain context across async operations and outgoing service calls.

### Custom spans

- Add manual spans only for business-critical operations not covered by auto-instrumentation.
- Always include relevant business context in span attributes.
- Never include PII in span attributes, tags, or metric labels.

## Data governance and security

### Sensitive data protection

- Never include PII in telemetry (spans, metrics, logs).
- Mask sensitive data before logging or adding to span attributes.
- Never use user IDs, document numbers, or any personal identifiers as metric tags.

## Monitoring and alerting

### Golden signals

See `common/performance.md` for SLO targets.

- Latency: monitor P95 and P99 response times.
- Traffic: request rate and connection counts.
- Errors: error rates by status code and error type.
- Saturation: CPU, memory, and resource utilization.

## Anti-patterns to avoid

- High-cardinality tags: never use UUIDs, user IDs, or unbounded values as metric tags.
- Blocking telemetry: never use synchronous telemetry in request paths.
- Over-instrumentation: do not create custom spans for every method call.
- Missing context: always include correlation IDs and business context in logs and spans.
- PII in telemetry: never log or trace personal data regardless of log level.
