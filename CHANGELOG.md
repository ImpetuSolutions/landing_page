# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Introduced complete internationalization (i18n) setup natively supporting English and Spanish localization using Next.js 16 dynamic API (`[lang]`) layout and custom semantic dictionary mappings.
- Added `Email` and `Teléfono` input fields to the contact form and mapped them to Zoho CRM integration.
- Migrated the static HTML landing page to a Next.js (App Router) project constraint.
- Integrated the Zoho CRM API via a new Route Handler (`/api/leads`) to securely process contact form submissions.

### Added
- Replaced the landing page HTML with a new complete Tailwind CSS based design (`index.html`).

