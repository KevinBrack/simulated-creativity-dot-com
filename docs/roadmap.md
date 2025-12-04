# Simulated Creativity - Project Roadmap

**Version:** 1.0.0
**Last Updated:** 2025-12-04
**Status:** Foundation Complete - Building Content

---

## Vision

Transform SimulatedCreativity.com from a single-page warning into a comprehensive research hub and project showcase demonstrating transparent AI-human collaboration.

**Core Philosophy:**
> "We're in the dial-up days of AI. This is what it looks like when we start building for broadband."

---

## Roadmap Overview

```
Foundation → Content → Integration → Community
  (Done)     (Current)   (Q1 2025)    (Q2 2025)
```

---

## Phase 0: Foundation ✅ COMPLETE

**Timeline:** Completed 2025-12-04

### Objectives
- [x] Update all packages to latest versions (security fixes)
- [x] Restructure site with routing
- [x] Create landing page
- [x] Archive conversation page
- [x] Establish documentation

### Outcomes
- ✅ Next.js 16, React 19, zero vulnerabilities
- ✅ Clean routing structure (`/`, `/conversation`)
- ✅ Technical design document created
- ✅ Foundation ready for content

---

## Phase 1: Core Content 🔄 IN PROGRESS

**Timeline:** 2-3 weeks (Mid-December 2025)
**Focus:** Populate the three main content pillars

### 1.1: Philosophy Page

**Route:** `/philosophy`
**Content Source:** Obsidian vault (Lighthouse Philosophy & Vision)

**Sections:**
- [ ] What is "patching the uncanny valley"?
- [ ] The dial-up analogy (56k → broadband AI)
- [ ] Why transparency matters
- [ ] AI as brain emulator, personality as ROM
- [ ] The problem with engagement optimization
- [ ] Multi-agent deliberation as solution

**Technical:**
- [ ] Create `/app/philosophy/page.tsx`
- [ ] Pull content from Obsidian via MCP
- [ ] Add relevant quotes and references
- [ ] Include visual diagrams (optional)

**Estimated Effort:** 4-6 hours

### 1.2: Lighthouse Project Page

**Route:** `/lighthouse`
**Content Source:** Obsidian vault (Lighthouse Project Overview, Technical Specs)

**Sections:**
- [ ] Project overview and vision
- [ ] What is the Lighthouse? (mobile projection platform)
- [ ] Technical specifications
- [ ] Multi-agent architecture
- [ ] Open-source conversion kit
- [ ] Build plan and phases
- [ ] "Lord Nikon" origin story

**Technical:**
- [ ] Create `/app/lighthouse/page.tsx`
- [ ] Consider sub-routes: `/lighthouse/technical`, `/lighthouse/build-plan`
- [ ] Add placeholder for future: photos, videos, build logs
- [ ] Link to Thingiverse (when ready)

**Estimated Effort:** 6-8 hours

### 1.3: Aeris Body Works Page

**Route:** `/body-works`
**Content Source:** Obsidian vault (Business Model, Founding Vision Journal)

**Sections:**
- [ ] Concept overview (AI-designed body art)
- [ ] From fiction to reality (outfit closet origin story)
- [ ] Business model and services
- [ ] Technology stack (3D scanning, Blender, laser-cut stencils)
- [ ] Smile-based compensation philosophy
- [ ] VRChat avatar integration
- [ ] Portfolio gallery (placeholder for future photos)

**Technical:**
- [ ] Create `/app/body-works/page.tsx`
- [ ] Design portfolio grid layout (empty for now)
- [ ] Add booking CTA (link to contact/future booking system)
- [ ] Include signature style collections (Jessica Rabbit, Ted Lasso, etc.)

**Estimated Effort:** 6-8 hours

### 1.4: Navigation & Layout

**Global Components:**
- [ ] Header with logo and nav links
- [ ] Footer with social links, copyright, open-source notice
- [ ] Mobile-responsive navigation
- [ ] Breadcrumbs (optional)

**Technical:**
- [ ] Create `src/components/Header.tsx`
- [ ] Create `src/components/Footer.tsx`
- [ ] Update `src/app/layout.tsx` to include header/footer
- [ ] Ensure Dracula theme consistency

**Estimated Effort:** 3-4 hours

---

## Phase 2: Enhanced Experience

**Timeline:** Late December 2025 - Early January 2025
**Focus:** Improve UX, add interactivity, optimize

### 2.1: Visual Enhancements

- [ ] Add hero image/animation to landing page
- [ ] Create custom 404 page
- [ ] Add loading states and transitions
- [ ] Implement dark mode toggle (optional - currently default dark)
- [ ] Add scroll animations (subtle, tasteful)

**Estimated Effort:** 4-6 hours

### 2.2: SEO & Metadata

- [ ] Optimize page titles and descriptions
- [ ] Add Open Graph tags for social sharing
- [ ] Create `sitemap.xml`
- [ ] Add `robots.txt`
- [ ] Implement structured data (JSON-LD)

**Estimated Effort:** 2-3 hours

### 2.3: Performance Optimization

- [ ] Audit with Lighthouse (Google)
- [ ] Optimize images (if any added)
- [ ] Review bundle size
- [ ] Implement lazy loading where appropriate
- [ ] Add Vercel Analytics (or privacy-friendly alternative)

**Estimated Effort:** 2-3 hours

### 2.4: Content Additions

- [ ] Add "Latest Updates" section to homepage
- [ ] Create simple blog/research section (optional)
- [ ] Add testimonials (when available)
- [ ] Embed Twitter feed or latest tweets

**Estimated Effort:** 4-6 hours

---

## Phase 3: Lighthouse Integration

**Timeline:** January - February 2025
**Focus:** Technical integrations for Lighthouse project

### 3.1: Build Documentation

- [ ] Photo gallery of build progress
- [ ] Video embeds (YouTube/Vimeo)
- [ ] Technical diagrams and schematics
- [ ] Bill of materials (BOM)
- [ ] Step-by-step build guide

**Technical:**
- [ ] Image optimization pipeline
- [ ] Video embed component
- [ ] Markdown renderer for technical docs
- [ ] Downloadable files (PDFs, CAD files)

**Estimated Effort:** 8-10 hours

### 3.2: Event Calendar

- [ ] Performance schedule
- [ ] Workshop dates
- [ ] Community events
- [ ] ICAL export

**Technical:**
- [ ] Choose calendar solution (React-calendar, FullCalendar, or custom)
- [ ] Backend for event management (Supabase or static JSON for now)
- [ ] Calendar page `/lighthouse/events`

**Estimated Effort:** 6-8 hours

### 3.3: Live Performance Integration (Future)

- [ ] Live stream embed (Twitch, YouTube Live)
- [ ] Real-time chat integration
- [ ] Multi-agent visualization (if feasible for web)
- [ ] Performance archive/replays

**Technical:** TBD - Requires Lighthouse operational
**Estimated Effort:** 10-15 hours

---

## Phase 4: Body Works Integration

**Timeline:** February - March 2025
**Focus:** Business features for Aeris Body Works

### 4.1: Portfolio Gallery

- [ ] Photo gallery with filtering (by style, event type)
- [ ] Lightbox/modal view
- [ ] Before/after comparisons
- [ ] Client testimonials

**Technical:**
- [ ] Image hosting solution (Vercel blob storage, Cloudinary, or Supabase storage)
- [ ] Gallery component with filtering
- [ ] Responsive grid layout
- [ ] Lazy loading for images

**Estimated Effort:** 8-10 hours

### 4.2: AI Design Preview Tool (MVP)

- [ ] Text input for design concept
- [ ] AI-generated design preview (Stable Diffusion API)
- [ ] Basic customization (colors, style)
- [ ] Save/share designs

**Technical:**
- [ ] Next.js API route for AI generation
- [ ] HuggingFace Inference API integration
- [ ] Client-side design preview
- [ ] Rate limiting and cost management

**Estimated Effort:** 12-15 hours

### 4.3: Booking System (Simple)

- [ ] Contact form for inquiries
- [ ] Service tier selection
- [ ] Calendar availability (view-only for now)
- [ ] Email notifications

**Technical:**
- [ ] Form validation (React Hook Form + Zod)
- [ ] Email service (Resend, SendGrid, or similar)
- [ ] Calendly embed (or custom calendar)
- [ ] CRM integration (Airtable, Notion, or simple email)

**Estimated Effort:** 6-8 hours

---

## Phase 5: Community & Ecosystem

**Timeline:** Q2 2025
**Focus:** Build community, open-source releases

### 5.1: Open Source Releases

- [ ] Lighthouse conversion kit published (Thingiverse + GitHub)
- [ ] Multi-agent architecture documented
- [ ] vvvv gamma patches released
- [ ] Body Works stencil packs

**Technical:**
- [ ] GitHub repositories organized
- [ ] Documentation written
- [ ] License files added (Creative Commons, MIT, etc.)
- [ ] Community contribution guidelines

**Estimated Effort:** Variable (ongoing)

### 5.2: Community Features

- [ ] Newsletter signup (Buttondown, ConvertKit, or custom)
- [ ] Discord server integration (embeds, widgets)
- [ ] Forum or discussion board (optional)
- [ ] User submissions (designs, builds, remixes)

**Technical:**
- [ ] Email service integration
- [ ] Discord widget
- [ ] User authentication (if needed for submissions)
- [ ] Moderation tools

**Estimated Effort:** 10-12 hours

### 5.3: Educational Content

- [ ] Workshops page (schedule, registration)
- [ ] Tutorial videos (embedded or linked)
- [ ] Downloadable guides and PDFs
- [ ] Certification program info

**Technical:**
- [ ] Content management for courses
- [ ] Video hosting (YouTube, Vimeo)
- [ ] PDF generation or hosting
- [ ] Workshop registration system

**Estimated Effort:** 8-10 hours

---

## Phase 6: Advanced Features (Future)

**Timeline:** Q3-Q4 2025
**Focus:** Dynamic features, scaling

### 6.1: Backend Infrastructure

- [ ] Supabase integration (if not already done)
- [ ] User authentication (for personalized features)
- [ ] Database for user-generated content
- [ ] API for external integrations

### 6.2: Late-o-matic Integration

- [ ] Embedded widget on homepage
- [ ] Standalone app with shared design system
- [ ] API for developers
- [ ] Social sharing mechanics

### 6.3: Advanced Analytics

- [ ] Custom analytics dashboard
- [ ] User behavior tracking (privacy-friendly)
- [ ] A/B testing framework
- [ ] Conversion optimization

---

## Success Metrics

### Website Metrics
- **Traffic:** 1,000+ unique visitors/month by Q2 2025
- **Engagement:** 3+ pages per session average
- **Conversion:** 5%+ click-through to Lighthouse/Body Works
- **Performance:** Lighthouse score 90+ across all metrics

### Project Metrics
- **Lighthouse:** Build documentation complete, first performance Q1 2025
- **Body Works:** 10+ portfolio pieces, first client bookings Q2 2025
- **Community:** 500+ newsletter subscribers, 100+ Discord members by Q3 2025
- **Open Source:** 3+ community-built Lighthouses by Q4 2025

### Philosophy Metrics
- **Research:** 5+ blog posts on AI transparency by Q2 2025
- **Influence:** Cited in AI safety discussions or publications
- **Education:** 20+ workshop attendees, 50+ tutorial completions
- **Alignment:** "Smile tokens" system operational for Body Works by Q3 2025

---

## Resource Requirements

### Development Time

**Immediate (Phase 1):** ~25-35 hours
- Philosophy, Lighthouse, Body Works pages
- Navigation and layout
- Documentation

**Short-term (Phase 2-3):** ~30-40 hours
- Visual enhancements, SEO
- Lighthouse build docs
- Event calendar

**Medium-term (Phase 4-5):** ~40-50 hours
- Body Works portfolio and booking
- AI design tool MVP
- Community features

**Total Estimated (6 months):** ~100-125 hours

### Budget Considerations

**Current:** $0/month (static hosting on Vercel free tier)

**Anticipated Costs (as features added):**
- **Hosting:** $0-20/month (Vercel Pro if needed)
- **AI APIs:** $10-50/month (HuggingFace, OpenAI for design tool)
- **Email service:** $0-15/month (Resend, ConvertKit)
- **Media storage:** $0-10/month (Vercel Blob, Cloudinary free tier)
- **Domain:** $12/year (already owned)

**Total Monthly (Phase 4-5):** ~$20-95/month

---

## Risk Assessment

### Timeline Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Content creation bottleneck | Delayed launches | Prioritize MVP content, iterate |
| Scope creep | Extended timelines | Stick to phased approach, defer nice-to-haves |
| Lighthouse build delays | Website waiting on content | Publish placeholder content, update as available |

### Technical Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| API costs exceed budget | Features disabled | Start with free tiers, add rate limiting |
| Complex integrations (vvvv, Resolume) | Integration delays | Document thoroughly, consider static fallbacks |
| Performance degradation | Poor UX | Regular audits, lazy loading, optimization |

### Project Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Insufficient content/photos | Incomplete site | Start with text, add media progressively |
| Low community engagement | Limited reach | Focus on quality over quantity, build gradually |
| Competing priorities (Lighthouse, Body Works) | Website stalls | Dedicate specific time blocks for website work |

---

## Decision Log

### Key Decisions Made

1. **Next.js over alternatives:** Chosen for ecosystem, DX, static generation
2. **pnpm over npm:** Performance and future monorepo support
3. **Obsidian for content:** Leverage existing workflow
4. **Dracula theme:** Consistent with brand, high contrast
5. **Phased approach:** MVP then iterate, avoid big bang launch

### Decisions Pending

1. **Booking system:** Calendly embed vs. custom build
2. **Newsletter provider:** Buttondown vs. ConvertKit vs. custom
3. **Analytics:** Vercel vs. Plausible vs. self-hosted
4. **Community platform:** Discord only vs. forum integration
5. **AI design tool:** HuggingFace vs. Replicate vs. OpenAI

---

## Next Actions

### This Week (Dec 4-11, 2025)

1. [x] ~~Complete technical design document~~
2. [x] ~~Complete roadmap~~
3. [ ] Start Philosophy page content (pull from Obsidian)
4. [ ] Draft Lighthouse page outline
5. [ ] Create navigation component

### Next Week (Dec 11-18, 2025)

1. [ ] Finish Philosophy page
2. [ ] Build Lighthouse page
3. [ ] Start Body Works page
4. [ ] Add header/footer navigation

### End of December 2025

1. [ ] All three core pages live
2. [ ] Navigation complete
3. [ ] SEO optimized
4. [ ] Share updated site on Twitter

---

## Notes

- This is a living document - update as priorities shift
- Focus on momentum over perfection
- Ship early, iterate often
- Document as you build (helps future open-source releases)
- Remember: "Dial-up to broadband" - start simple, scale intentionally

---

**Roadmap Owner:** Kevin Brack (Lord Nikon)
**Last Review:** 2025-12-04
**Next Review:** 2025-12-18
