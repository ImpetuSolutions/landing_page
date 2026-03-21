TypeScript Testing Guidelines (Fullstack)
-----------------------------------------

### Unit Tests

*   **System Under Test (SUT)**: Manually initialize the SUT or use a beforeEach block to create a fresh instance/component named sut.
    
*   **Scenario Coverage**: Ensure both success and error (exception/rejection) scenarios are covered.
    
*   **Mocking**: Use jest.mock() or vi.mock() only where **Generators** or **Factories** are not possible.
    
*   **Argument Tracking**: Use toHaveBeenCalledWith() to verify complete objects or schemas, not just IDs.
    
*   **Redundant Checks**: Omit explicit .toHaveBeenCalledTimes(1) unless multiple calls are expected; default behavior is preferred.
    
*   **Non-invocation**: Use .not.toHaveBeenCalled() to assert that a function or mock was never called.
    
*   **Naming Convention**: Method names follow the test\_when\_X\_then\_Y pattern.
    
*   **Code Clarity**: Do not add comments inside tests; the test code must be self-descriptive. Refactor if clarification is needed.
    
*   **Execution Flow**: Place mock verification (expect(mock).toHaveBeenCalled()) before state assertions.
    
*   **Assertion Variables**: Use expected and actual as variable names when preparing assertion values.
    

### DTO & Contract Tests

*   **Stability**: Implement serialization and deserialization tests using **Zod** or **io-ts** to ensure API contract stability between the Node.js backend and Next.js frontend.
    

### Test Data & Mocking

*   **Generators First**: Prefer **Generator** classes or **Factory functions** (e.g., using fishery or faker) for creating test objects and data.
    
*   **Mock Selection**: Use jest.fn() or vi.fn() only when a generator is unavailable or impractical.
    
*   **Strict Matching**: Avoid generic expect.anything(); prefer specific type matchers like expect.any(String) or expect.any(Number).
    
*   **Randomization**: Use faker or random utility helpers for IDs and unique fields instead of hardcoded strings.
    
*   **Generator Naming**: Generator methods should start with create and minimize parameters.
    

### Coverage & Value

*   **High-Value Tests**: Focus on business logic and custom components; avoid testing third-party libraries (e.g., direct tests for Next.js internal routing).
    
*   **Integration Priority**: Integration tests (using **Playwright** or **Cypress**) are preferred when they provide better coverage across the full stack.
    
*   **Redundancy**: Remove redundant unit tests if an integration test covers the same logic.
    
*   **Strong Assertions**: Avoid weak assertions like toBeDefined() or toBeTruthy(); assert actual field values instead.
    
    *   Weak assertions provide false coverage by only verifying existence, not correctness.
        
    *   **Prefer**: expect(result.field).toBe("expected") over expect(result).toBeDefined().