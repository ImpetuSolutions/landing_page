# Performance guidelines

## Performance objectives

Service level objectives (SLOs):

- Response time: P95 latency < 200ms for web endpoints.
- Availability: 99.9% uptime for production services.
- Throughput: Handle peak load with < 80% resource utilization.
- Recovery time: Return to normal performance within 5 minutes of incident resolution.

## Performance budget

Resource constraints:

- Memory: Application should not exceed 80% of allocated memory.
- CPU: Sustained CPU usage should remain below 70% of allocated cores.
- Disk: I/O operations should not saturate storage bandwidth.
- Network: Network latency should account for < 10% of total response time.

## Performance anti-patterns

Avoid these practices:

- Premature optimization: Optimizing before identifying actual bottlenecks.
- Micro-benchmarks: Focusing on isolated performance without system context.
- Production experimentation: Making performance changes without testing.
- Single-metric optimization: Improving one metric at the expense of others.
