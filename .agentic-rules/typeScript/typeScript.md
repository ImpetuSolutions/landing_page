TypeScript & Next.js Framework Guidelines
-----------------------------------------

### Dependency Injection & Module Usage

*   **Functional Composition**: Instead of class-level annotations like @Service, prefer exporting pure functions or classes that are instantiated within a specific scope.
    
*   **Inversion of Control**: For Node.js (NestJS), continue using constructor injection. For Next.js/React, use **React Context** or **Higher-Order Components** to provide dependencies to the component tree.
    
*   **Environment Configuration**: Inject configuration by using process.env validated through a schema library like **Zod** to ensure required variables exist at runtime (equivalent to @Value).
    
*   **Conditional Logic**: Use standard TypeScript conditional imports or environment-based branching for feature flagging (equivalent to @Conditional\*).
    

### Data Persistence & ORM Best Practices (Prisma / Drizzle)

*   **Schema Definition**: Explicitly define models in your schema file (e.g., schema.prisma) and map primary keys, relations, and indexes explicitly.
    
*   **Business Key Equality**: When comparing objects in the frontend or logic layer, rely on immutable business keys (UUIDs/slugs) rather than internal database auto-increment IDs.
    
*   **Atomic Transactions**: Apply transactions at the service or Server Action layer using the ORM's transaction API (e.g., prisma.$transaction); ensure they remain as short as possible to avoid blocking.
    
*   **Query Optimization**: Use explicit selection (select) and inclusion (include) to fetch only necessary fields and avoid N+1 problems common with deep relational nesting.
    
*   **Fetching Strategy**: In Next.js, prefer **Server Components** for data fetching to reduce client-side overhead and keep database credentials secure.
    

### Build & Dependency Management (npm / pnpm / yarn)

*   **Version Alignment**: Keep dependencies aligned via package.json and ensure deterministic builds by always committing the lockfile (package-lock.json, pnpm-lock.yaml).
    
*   **Centralized Config**: Manage shared configurations (ESLint, Prettier, Tailwind) in a single location or a base configuration package in monorepos.
    
*   **Conflict Resolution**: Use the "resolutions" (yarn) or "overrides" (npm/pnpm) fields to explicitly handle conflicting transitive dependencies.
    
*   **Dependency Scopes**: Strictly separate dependencies (runtime) from devDependencies (build-time/testing) to optimize container image sizes.