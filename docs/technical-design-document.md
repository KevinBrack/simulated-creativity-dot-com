# Technical Design Document
## Simulated Creativity - Website & Ecosystem

**Version:** 1.0.0
**Last Updated:** 2025-12-04
**Status:** Foundation Phase - Website Active, Ecosystem Planning

---

## Executive Summary

Simulated Creativity is a multi-project ecosystem exploring transparent AI-human collaboration through:
- **Website**: Research hub and project showcase (current focus)
- **Lighthouse**: Mobile projection platform for live AI visualization
- **Aeris Body Works**: AI-designed body painting service
- **Late-o-matic 3000**: Viral AI excuse generator

This document focuses on the **website foundation** while mapping integration points for future ecosystem components.

---

## Current Tech Stack

### Website (Production)

**Framework & Runtime**
- **Next.js 16.0.7** - React framework with App Router, Turbopack, SSG
- **React 19.2.1** - Latest stable with automatic runtime
- **TypeScript 5** - Type-safe development
- **Node.js** - Runtime environment

**Styling**
- **Tailwind CSS v4** - Utility-first CSS with PostCSS
- **Dracula Theme** - Consistent color palette across site
- **Geist & Geist Mono fonts** - Modern typography from Vercel

**Package Management**
- **pnpm** - Fast, efficient package manager (preferred over npm)
- **pnpm-lock.yaml** - Lockfile for reproducible builds

**Content Management**
- **Obsidian Vault** (via MCP) - Markdown notes for research documentation
- **Static TypeScript data** - Message archives, content exports

**Deployment**
- **Vercel** (assumed) - Natural Next.js deployment target
- **Git** - Version control (GitHub)

### Development Tools

**Code Quality**
- **ESLint 9** - Code linting with Next.js config
- **@eslint/eslintrc** - ESLint configuration utilities

**Development Experience**
- **Turbopack** - Fast bundler in Next.js 16
- **Hot Module Replacement** - Live reload during development
- **TypeScript strict mode** - Enhanced type safety

---

## Architecture Overview

### Current Architecture (Website)

```
┌─────────────────────────────────────────────────────┐
│                  Simulated Creativity                │
│                   (simulatedcreativity.com)          │
└─────────────────────────────────────────────────────┘
                          │
         ┌────────────────┼────────────────┐
         │                │                │
    ┌────▼────┐     ┌────▼────┐     ┌────▼────┐
    │  Home   │     │  Conv.  │     │ Future  │
    │  Page   │     │  Page   │     │  Pages  │
    └────┬────┘     └────┬────┘     └────┬────┘
         │                │                │
         └────────────────┼────────────────┘
                          │
                   ┌──────▼──────┐
                   │   Styles    │
                   │   (Theme)   │
                   └─────────────┘
```

**File Structure:**
```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Landing page (new)
│   ├── globals.css         # Global styles
│   └── conversation/
│       └── page.tsx        # ChatGPT conversation archive
├── data/
│   └── messages.ts         # Static conversation data
└── styles/
    └── theme.ts            # Dracula color system

docs/                       # Technical documentation
├── technical-design-document.md

.aeris/
└── aeris.md                # Aeris personality definition
```

### Routing Strategy

**App Router (Next.js 16):**
- `/` - Landing page introducing ecosystem
- `/conversation` - ChatGPT manipulation evidence
- `/lighthouse` - (Planned) Lighthouse project overview
- `/body-works` - (Planned) Aeris Body Works info
- `/philosophy` - (Planned) Transparency manifesto

**Static Site Generation:**
- All pages pre-rendered at build time
- No server-side rendering needed (currently)
- Fast load times, SEO-friendly

---

## Design System

### Color Palette (Dracula Theme)

```typescript
{
  bgPrimary: "bg-black",              // Site background
  bgSecondary: "bg-[#44475A]",        // Current Line (dark gray)
  textPrimary: "text-[#F8F8F2]",      // Foreground (off-white)
  textMuted: "text-[#6272A4]",        // Comment (muted blue-gray)
  textTitle: "text-[#BD93F9]",        // Purple (accent)

  // Links
  link: "text-[#8BE9FD]",             // Cyan
  linkHover: "hover:text-[#50FA7B]",  // Green

  // Messages
  bgMessage: {
    user: "bg-[#44475A]",             // Darker gray
    assistant: "bg-[#282A36]"         // Lighter gray
  },
  bgBorder: {
    user: "border-[#6272A4]",         // Comment blue
    assistant: "border-[#BD93F9]"     // Purple
  },

  // Code
  codePink: "text-[#FF79C6]"          // Pink
}
```

**Rationale:** Dark theme appropriate for technical/existential content, high contrast for accessibility, consistent with terminal/code aesthetic.

### Typography

- **Geist Sans** - Body text (clean, modern, readable)
- **Geist Mono** - Code, technical content (monospaced clarity)
- Both loaded via `next/font/google` for optimization

---

## Future Ecosystem Integration

### Planned Components

#### 1. Lighthouse Integration

**Technology Stack (Planned):**
- **vvvv gamma** - Real-time projection mapping (13 years experience)
- **Resolume Arena** - VJ software for video playback
- **Unity** - AR preview features, interactive installations
- **Blender** - 3D modeling, design mockups
- **FastAPI** - Multi-agent AI backend
- **HuggingFace Inference API** - AI model hosting
- **WebSocket** - Real-time agent streaming

**Website Integration Points:**
- `/lighthouse` page with project overview
- Technical specifications from Obsidian vault
- Build documentation and open-source conversion kit
- Event calendar and performance schedule
- Live stream integration (future)

#### 2. Aeris Body Works Integration

**Technology Stack (Planned):**
- **Stable Diffusion / DALL-E** - AI design generation
- **Custom Design Tool** - Web interface for client consultations
- **Calendly / Acuity** - Booking system
- **Stripe / Square** - Payment processing
- **Airtable / Notion API** - Client database, design archive

**Website Integration Points:**
- `/body-works` page with portfolio gallery
- AI design preview tool (prototype)
- Booking system integration
- Educational content and workshops
- Instagram/TikTok feed embeds

#### 3. Late-o-matic 3000 Integration

**Technology Stack (Planned):**
- **TypeScript/Next.js** - Core application (already proven)
- **AI APIs** - Excuse generation
- **Social sharing** - Viral distribution mechanics

**Website Integration Points:**
- Embedded widget on homepage
- API documentation
- Standalone app with shared design system

---

## Content Management Strategy

### Current: Static + Obsidian

**Static Data:**
- `src/data/messages.ts` - ChatGPT conversation (immutable evidence)
- Future: Other conversation exports, testimonials, quotes

**Obsidian Vault (via MCP):**
- Research notes (Lighthouse, Body Works, Philosophy)
- Technical specifications
- Business plans and vision documents
- Private notes flagged appropriately

**Advantages:**
- Version controlled (Git)
- No CMS complexity
- Fast builds (SSG)
- Developer-friendly workflow
- Obsidian provides rich editing experience

**Limitations:**
- No GUI for non-technical editors
- Content updates require rebuild/deploy
- Not suitable for frequently changing content

### Future: Hybrid Approach

**For dynamic content (future considerations):**
- **Supabase** - Postgres database for user-generated content
- **Next.js API Routes** - Backend endpoints
- **ISR (Incremental Static Regeneration)** - Blend static + dynamic

**Use cases:**
- Body Works portfolio (regularly updated)
- Event calendar (Lighthouse performances)
- Workshop bookings
- Community contributions

---

## Development Workflow

### Local Development

```bash
# Install dependencies
pnpm install

# Run dev server (with Turbopack)
pnpm dev

# Type checking
pnpm run lint

# Production build
pnpm run build

# Start production server
pnpm start
```

### Git Workflow

**Branching Strategy:**
- `main` - Production-ready code
- Feature branches - Named by component (e.g., `lighthouse-page`, `body-works-gallery`)
- Deploy from `main` via Vercel

**Commit Messages:**
- Conventional commits preferred
- Clear, descriptive messages
- Reference issues/features when applicable

### Testing Strategy (To Be Implemented)

**Current State:** No automated tests
**Planned:**
- **Vitest** - Unit tests for utilities, helpers
- **Playwright** - E2E tests for critical paths
- **TypeScript** - Type safety as first line of defense

---

## Performance Considerations

### Current Optimizations

1. **Static Site Generation** - Pre-rendered pages, no server delay
2. **Turbopack** - Fast bundling and HMR
3. **Next.js 16 optimizations** - Automatic code splitting, prefetching
4. **Font optimization** - next/font/google automatic optimization
5. **Image optimization** - Next.js Image component (used for Camacho image)

### Monitoring (To Be Implemented)

- **Vercel Analytics** - Page views, performance metrics
- **Core Web Vitals tracking** - LCP, FID, CLS
- **Lighthouse CI** - Automated performance audits

---

## Security & Privacy

### Current Measures

1. **No user data collection** - Static site, no tracking
2. **HTTPS** - Enforced by hosting (Vercel)
3. **Dependencies updated** - Regular security patches (just updated to Next 16 for CVE fixes)
4. **No sensitive data in repo** - Obsidian private notes not committed

### Future Considerations

**When adding dynamic features:**
- **Authentication** - If user accounts needed (Body Works bookings)
- **Rate limiting** - Protect API endpoints
- **Input validation** - Sanitize user-generated content
- **GDPR compliance** - If collecting personal data (EU users)

---

## Open Source Strategy

### Current: Public Repository

**What's Public:**
- Website code
- Design system
- Documentation
- Build configurations

**What's Private:**
- Obsidian vault (research notes, business plans)
- API keys and secrets (if any added)
- Personal/sensitive content

### Future: Lighthouse Conversion Kit

**Open Source Components (Planned):**
- Mounting designs (CAD files)
- Wiring diagrams
- Software setup guides
- Multi-agent architecture
- vvvv gamma patches

**License:** TBD (likely Creative Commons or MIT)
**Platform:** Thingiverse + GitHub

---

## Technology Decisions & Rationale

### Why Next.js?

✅ **Pros:**
- React-based (familiar, popular)
- Excellent DX (developer experience)
- Static generation for speed
- Easy Vercel deployment
- Large ecosystem

❌ **Cons:**
- Can be overkill for simple sites
- Framework lock-in

**Verdict:** Appropriate for project scale, future expansion potential

### Why TypeScript?

✅ **Pros:**
- Type safety reduces bugs
- Better IDE support
- Self-documenting code
- Scales well for large projects

**Verdict:** Essential for maintainability as project grows

### Why Tailwind CSS?

✅ **Pros:**
- Rapid prototyping
- Consistent design system
- No CSS naming conflicts
- Easy to customize

❌ **Cons:**
- Verbose HTML classes
- Learning curve for team members

**Verdict:** Aligns with "move fast" philosophy, design system already defined

### Why pnpm?

✅ **Pros:**
- Faster than npm
- More efficient disk usage
- Strict dependency resolution
- Better monorepo support (future)

**Verdict:** Performance gain, future-proofing for ecosystem expansion

### Why Obsidian + MCP?

✅ **Pros:**
- Developer already uses Obsidian
- Markdown-based (portable, version-controlled)
- Rich plugin ecosystem
- MCP provides programmatic access

**Verdict:** Leverage existing workflow, no new tools to learn

---

## Risks & Mitigations

### Technical Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Vercel downtime | Site unavailable | Low | Consider backup hosting, CDN |
| Dependency vulnerabilities | Security breach | Medium | Regular updates, Dependabot |
| Build failures | Deploy blocked | Low | CI/CD checks, staging env |
| MCP connection issues | Content unavailable | Medium | Cache Obsidian content, fallback |

### Project Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Scope creep | Delayed launch | High | Phased rollout, MVP focus |
| Content creation bottleneck | Incomplete site | Medium | Prioritize pages, iterate |
| Lighthouse integration complexity | Extended timeline | High | Start simple, document thoroughly |
| Lack of testing | Production bugs | Medium | Add tests incrementally |

---

## Next Steps

### Immediate (Current Sprint)

- [x] ~~Update packages to latest versions~~
- [x] ~~Move conversation to `/conversation` route~~
- [x] ~~Create new landing page~~
- [ ] Write technical design document (this document)
- [ ] Create project roadmap

### Short-Term (Next 2-4 Weeks)

- [ ] Build `/philosophy` page (content from Obsidian)
- [ ] Build `/lighthouse` page (project overview)
- [ ] Build `/body-works` page (business model, vision)
- [ ] Add navigation component (header/footer)
- [ ] Implement basic analytics (Vercel or privacy-friendly alternative)

### Medium-Term (1-3 Months)

- [ ] Lighthouse technical specifications page
- [ ] Body Works portfolio gallery
- [ ] Event calendar for performances
- [ ] Newsletter signup (email list)
- [ ] Blog/research section

### Long-Term (3-6 Months)

- [ ] Interactive AI design preview tool (Body Works)
- [ ] Lighthouse live stream integration
- [ ] Community forum or Discord integration
- [ ] Open source conversion kit release
- [ ] Full ecosystem documentation

---

## Appendix

### Key Resources

**Documentation:**
- Next.js 16 Docs: https://nextjs.org/docs
- Tailwind CSS v4: https://tailwindcss.com
- TypeScript Handbook: https://www.typescriptlang.org/docs

**Repositories:**
- Main site: (this repo)
- Aeris personality: `.aeris/aeris.md`
- Obsidian vault: (private, via MCP)

**External Links:**
- Twitter: https://x.com/KevinBrack
- Original Aeris prompt: https://github.com/KevinBrack/aeris-origional-md
- Laws of Simplicity: http://lawsofsimplicity.com

### Glossary

- **MCP**: Model Context Protocol (Obsidian integration)
- **SSG**: Static Site Generation
- **ISR**: Incremental Static Regeneration
- **DX**: Developer Experience
- **CVE**: Common Vulnerabilities and Exposures
- **HMR**: Hot Module Replacement
- **LCP/FID/CLS**: Core Web Vitals metrics

---

**Document Status:** Living document, updated as project evolves
**Owner:** Kevin Brack (Lord Nikon)
**Contributors:** Aeris (AI collaborator)
