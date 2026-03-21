TypeScript Project Structure (Next.js & Node.js)
------------------------------------------------

### Standard Layout (Next.js App Router)
```
project-root/
 ├─ src/
 │  ├─ app/                 # Next.js App Router (Routes, Layouts, Pages)
 │  ├─ components/          # Shared UI Components
 │  ├─ lib/                 # Core utilities and shared logic
 │  ├─ services/            # Business logic / Use cases
 │  ├─ hooks/               # Custom React hooks
 │  └─ types/               # Global TypeScript interfaces/types
 ├─ tests/                  # Integration and E2E tests
 ├─ public/                 # Static assets
 ├─ package.json            # Manifest and dependencies
 ├─ tsconfig.json           # TypeScript configuration
 └─ README.md
 ```

*   **Standard Layout**: Follow the Next.js conventional directory structure for the frontend.
    
*   **Package Naming**: Use snake\_case or kebab-case for file and directory names (standard in the JS ecosystem), avoiding reverse-DNS naming conventions.
    

### Package & Module Naming

*   **Lowercase Naming**: Module and file names must be all lowercase.
    
*   **Compound Names**: Use kebab-case for compound names (e.g., user-profile.ts or data-mapper/) instead of underscores or hyphens within a single word.
    
*   **Nesting Hierarchy**: Represent hierarchy through directory nesting: use data/mapper/ instead of a single compound directory name.
    
*   **Singular Segments**: Each segment must be a single, meaningful lowercase word, written in singular form (e.g., builder, mapper, model).
    

### Build & Dependency Management (npm/pnpm/yarn)

*   **Version Consistency**: Use the dependencies and devDependencies sections in package.json for version management.
    
*   **Vulnerability Monitoring**: Regularly run npm audit or pnpm audit to monitor and fix security vulnerabilities.
    
*   **Deduplication**: Use lockfiles (package-lock.json, pnpm-lock.yaml) to ensure deterministic builds and resolve transitive dependency conflicts.
    
*   **Dependency Scopes**: Declare appropriate scopes: use dependencies for runtime, devDependencies for build/test tools, and peerDependencies for shared libraries.
    

### Continuous Integration

*   **Verification**: Enforce npm test and npm run build in the CI pipeline to verify project integrity.
    
*   **Lockfile Enforcement**: Use npm ci or pnpm install --frozen-lockfile in CI to ensure the environment exactly matches the lockfile.
    
*   **Audit Failure**: Fail the build on critical security vulnerabilities or if there are uncommitted changes to the lockfile.