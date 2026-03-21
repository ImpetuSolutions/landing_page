TypeScript & Next.js Documentation Guidelines
=============================================

TSDoc & JSDoc Basics
--------------------

*   **Public API Focus**: Document all exported classes, functions, interfaces, and types.
    
*   **The "What" and "Why"**: Descriptions should focus on the intent and purpose of the code rather than the implementation details.
    
*   **Conciseness**: Keep descriptions brief; avoid using HTML tags as TSDoc supports Markdown natively.
    
*   **Live Examples**: Provide usage examples within @example blocks. For React components, show basic prop usage.
    

Error Handling Documentation
----------------------------

*   **Thrown Exceptions**: Use the @throws tag to document errors that a function might throw, especially those that should be handled by an Error Boundary (React) or a Catch-all (Node).
    

Documentation Hygiene
---------------------

*   **Sync with Code**: Ensure docstrings are updated alongside code changes; use tools like eslint-plugin-tsdoc to enforce valid syntax.
    
*   **Comment Cleanup**: Remove "TODOs" or outdated comments during the PR process to prevent "comment rot".
    

Formatting & Tags
-----------------

*   **Markdown Standard**: Use Markdown for all formatting within docstrings (e.g., backticks for code).
    
*   **Line Wrapping**: Wrap lines at **80-100 characters** (standard for Prettier) to ensure readability in IDE tooltips.
    
*   **Standard Tags**: Use TSDoc-compliant tags appropriately:
    
    *   @param for function arguments.
        
    *   @returns for return values (omit if the type hint is self-explanatory).
        
    *   @see or {@link} for cross-references to other modules.
        
    *   @deprecated for legacy code with a suggested alternative.
        

API & Component Documentation (Next.js Specific)
------------------------------------------------

*   **OpenAPI/Swagger**: For Node.js APIs, use JSDoc tags that integrate with OpenAPI generators to document endpoints automatically.
    
*   **Component Props**: Use TypeScript interfaces to document React props. Add a docstring to each interface member so they appear in VS Code's IntelliSense when the component is used.