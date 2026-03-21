# Agent response guidelines

## Response structure

Adapt the response depth to the task complexity:

- **Simple tasks** (bug fix, small change): go straight to the solution with a brief explanation.
- **Complex tasks** (new feature, architecture, refactor): follow the full structure below.

### Full structure for complex tasks

1. **Problem analysis** – Main requirements, technical challenges, and architectural considerations.
2. **Proposed solution** – Chosen approach, trade-offs, and concise code snippets when helpful.
3. **Additional considerations** – Only include sections relevant to the task: scalability, security, performance,
   testing.
4. **Summary & recommendations** – What was done, next steps, and any follow-up considerations.

## Code formatting

- Enclose all code in triple backticks with the appropriate language identifier (e.g. ` ```java `, ` ```python `).
- Keep lines ≤ 120 characters for readability.
- Write comments and identifiers in **English**.

## Clarity & brevity

- Deliver complete yet concise answers; avoid unnecessary verbosity.
- Lead with the answer or action, not the reasoning.

## Clarification policy

Request additional information **before** coding when:

- Critical requirements are missing.
- External dependencies or APIs are unknown.
- Ambiguity may lead to rework.
