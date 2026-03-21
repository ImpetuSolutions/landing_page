# Git commit messages

## Rule

This project uses **[Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)** for commit messages.

## Format

```
<type>: <description>
```

## Types

- **feat**: New feature.
- **fix**: Bug fix.
- **docs**: Documentation changes.
- **style**: Code style changes (formatting, no logic changes).
- **refactor**: Code refactoring (no feature or bug fix).
- **perf**: Performance improvements.
- **test**: Adding or updating tests.
- **chore**: Maintenance tasks (dependencies, build, etc.).
- **ci**: CI/CD changes.

## Branch naming

- `feature/<kebab-name>` — new features.
- `fix/<kebab-name>` — bug fixes, hotfixes, and patches.
- `enhancement/<kebab-name>` — improvements to existing functionality.
- `release/<kebab-name>` — release preparation branches.
- `migration/<kebab-name>` — data or schema migrations.
- `chore/<kebab-name>` — maintenance tasks (dependencies, build, etc.).
- Name should be short, lowercase, and hyphen-separated.

## Best practices

- Keep subject line under 50 characters.
- Use imperative mood ("add" not "added" or "adds").
- Don't end subject line with a period.
- If a related issue exists, reference it in the footer (e.g., "Refs: #123").
- Do not add Co-Authored-By lines.

## Verification

- Run project tests before committing.
- Run pre-commit checks locally before pushing: `pre-commit run -a`.
