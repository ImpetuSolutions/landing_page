Coding Conventions (Fullstack TypeScript)
=========================================

Technology Stack
----------------

*   **Language**: TypeScript (latest stable).
    
*   **Package Manager**: pnpm or npm.
    
*   **Framework**: Next.js (App Router) for Web; NestJS or Fastify for standalone Node.js.
    

Code Style
----------

*   **Focused Logic**: Keep functions and React components single-purpose and modular.
    
*   **Immutability**: Prefer const over let; use readonly types and avoid mutating arrays or objects directly.
    
*   **Absence of Value**: Use undefined or optional chaining (?.) instead of null for absent values; avoid "naked" nulls.
    
*   **File Endings**: Ensure all files end with a single newline character.
    
*   **Primitive Types**: Use primitive boolean, string, and number; avoid boxed objects.
    
*   **Naming Guidelines**:
    
    *   **Variables/Functions**: camelCase.
        
    *   **Classes/Interfaces/Types/React Components**: PascalCase.
        
    *   **Folders/Files**: kebab-case (common in Next.js).
        
    *   **Verbs**: Start function names with verbs (e.g., getUser, isActive, toggleModal).
        
*   **Function/Component Guidelines**:
    
    *   Keep functions ≤ 100 lines.
        
    *   Maximum 5–10 parameters; prefer passing a single "Options" object for more than 3 parameters.
        
    *   Extract logic into custom hooks (React) or utility functions (Node).
        

Exception & Error Handling
--------------------------

*   **Specific Catching**: Never use a generic catch (error: any); always type-check or narrow the error using instanceof.
    
*   **Error Context**: When throwing new errors, wrap the original error or use the cause property in the Errorconstructor.
    
*   **Custom Errors**: Create domain-specific error classes (e.g., ValidationError, UnauthorizedError) to drive specific HTTP status codes or UI feedback.
    

TypeScript Modern Features
--------------------------

*   **Type Inference**: Let TypeScript infer types for local variables; explicitly annotate function parameters and return types.
    
*   **Template Literals**: Use backticks (\`) for multi-line strings and interpolation instead of concatenation.
    
*   **Async/Await**: Always use async/await over raw Promise.then() chains.
    
*   **Zod/Valibot**: Use schema validation libraries for runtime type safety at the boundaries (API calls, Form inputs).
    

Next.js & Node.js Best Practices
--------------------------------

*   **Dependency Injection**: In React, use **Context API** or **Composition**; in Node (NestJS), use constructor-based @Inject().
    
*   **Server Components**: In Next.js, prefer **Server Components** by default to reduce client-side bundle size.
    
*   **Environment Variables**: Use a validated env.ts file (via Pydantic-like Zod schemas) to ensure required variables exist at startup.
    

Development Tools and Practices
-------------------------------

*   **Linting & Formatting**: Use **ESLint** and **Prettier**.
    
*   **No Suppressions**: Do not use // @ts-ignore or eslint-disable unless it's a verified edge case; resolve the underlying type issue.
    
*   **Standard Tooling**: Do not modify .eslintrc.json or tsconfig.json without team approval; follow the strict base configuration.