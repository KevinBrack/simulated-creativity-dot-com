# 001 - Scheduling System Architecture Plan

**Created:** 2025-12-09
**Status:** Planning Phase
**Owner:** Kevin Brack (Lord Nikon)
**AI Assistant:** Aeris

---

## Project Overview

Build a comprehensive scheduling system for Simulated Creativity with three distinct calendar types:

1. **Internal SC Meetings** - Private team coordination
2. **Music Teaching Schedule** - Student bookings and lesson management
3. **Public Performance Calendar** - Shows, events, gigs (syncs to Discord + web)

---

## Requirements

### Functional Requirements

**Internal SC Meetings:**
- Private calendar for team coordination
- Only visible to SC team members
- No public exposure

**Music Teaching Schedule:**
- Student booking system
- Lesson time management
- Payment tracking integration (future)
- Availability management

**Public Performance Calendar:**
- Display all public shows and events
- Sync to Discord server (webhook/bot)
- Display on Next.js web app (Vercel hosted)
- RSVP/registration capability (optional)
- Promoter view vs. public view

### Technical Requirements

- **Backend:** Cal.com or Google Calendar API
- **Frontend:** Next.js 14+ (App Router)
- **Hosting:** Vercel
- **Discord Integration:** Webhook or MCP-powered bot
- **API Access:** RESTful API for calendar management

---

## MCP Server Research Findings

### 1. Cal.com MCP Server ✅ EXISTS

**Source:** [Cal.com Calendar MCP Server](https://lobehub.com/mcp/mumunha-cal_dot_com_mcpserver)

**Capabilities:**
- Add appointments with attendee details
- Update existing appointments (time, notes)
- Delete appointments
- List appointments for date ranges
- Rate limiting and error handling
- TypeScript implementation

**Installation Requirements:**
- Cal.com account
- API key from Settings → Developer → API Keys
- MCP client configuration (Claude Desktop)

**Pros:**
- Direct calendar control via AI
- Open source Cal.com platform
- Self-hostable
- Built specifically for scheduling

**Cons:**
- Requires Cal.com account setup
- Additional hosting if self-hosting Cal.com

---

### 2. Google Calendar MCP Server ✅ RECOMMENDED

**Source:** [nspady/google-calendar-mcp](https://github.com/nspady/google-calendar-mcp)

**Capabilities:**
- Multi-account support
- Multi-calendar support (perfect for our 3 calendar types!)
- Cross-account conflict detection
- Event management (CRUD operations)
- Recurring events modification
- Free/busy queries
- **Smart scheduling with natural language** ("next Tuesday at 2pm")
- Intelligent import from images, PDFs, web links
- Available via npm: `@cocal/google-calendar-mcp`

**Installation Requirements:**
- Google Cloud project with Calendar API enabled
- OAuth 2.0 credentials (Client ID, Client Secret)
- MCP client configuration

**Pros:**
- Multi-calendar support (1 account, 3 calendars)
- Natural language processing
- Free Google Calendar backend
- Robust API and documentation
- No additional hosting costs

**Cons:**
- Google dependency
- OAuth setup complexity

---

### 3. Scheduler MCP Server (Automation)

**Source:** [PhialsBasement/scheduler-mcp](https://github.com/PhialsBasement/scheduler-mcp)

**Capabilities:**
- Schedule shell commands with cron expressions
- API calls on schedule
- Desktop notifications
- AI task automation

**Use Case:**
- Automate Discord announcements for upcoming shows
- Scheduled reminders for teaching sessions
- Background sync tasks

---

## Recommended Architecture

### Option A: Google Calendar + MCP (RECOMMENDED)

**Backend:**
- Google Calendar (free, reliable, well-documented)
- 3 separate calendars under 1 Google account:
  1. "SC Internal Meetings" (private)
  2. "Lord Nikon Teaching" (private)
  3. "SC Public Events" (public)

**AI Control Layer:**
- Google Calendar MCP Server installed in Claude Desktop
- Aeris gets direct calendar control via MCP tools
- Natural language scheduling: "Book teaching session next Wed 4pm"

**Frontend:**
- Next.js 14 app (App Router)
- Google Calendar API integration
- Fetch public events from "SC Public Events" calendar
- Display on simulatedcreativity.com

**Discord Integration:**
- Option 1: Zapier/Make.com webhook (simple, no code)
- Option 2: Custom Discord bot with Google Calendar webhook
- Option 3: Scheduler MCP to automate announcements

**Tech Stack:**
```
┌─────────────────────────────────────────┐
│     Google Calendar (Backend)           │
│  ┌─────────┬─────────┬──────────────┐  │
│  │Internal │Teaching │Public Events │  │
│  └─────────┴─────────┴──────────────┘  │
└──────────┬────────────────────┬─────────┘
           │                    │
    ┌──────▼─────┐       ┌─────▼──────┐
    │Google Cal  │       │Next.js App │
    │MCP Server  │       │(Vercel)    │
    │(AI Control)│       │            │
    └────────────┘       └─────┬──────┘
                               │
                         ┌─────▼──────┐
                         │Discord     │
                         │Webhook/Bot │
                         └────────────┘
```

**Pros:**
- Free backend (Google Calendar)
- AI has direct control via MCP
- Proven, stable platform
- Multi-calendar support built-in
- Easy Next.js integration
- No hosting costs for calendar backend

**Cons:**
- Google dependency
- OAuth setup required

---

### Option B: Cal.com + MCP

**Backend:**
- Self-hosted Cal.com instance (or Cal.com cloud)
- Cal.com API for calendar management
- Multiple event types (Internal, Teaching, Public)

**AI Control Layer:**
- Cal.com MCP Server installed
- Direct appointment management via MCP

**Frontend:**
- Next.js 14 app
- Cal.com API integration
- Booking pages embedded

**Discord Integration:**
- Cal.com webhooks → Discord

**Pros:**
- Open source control
- Self-hostable
- Built-in booking pages
- Cal.com MCP server available

**Cons:**
- Hosting costs if self-hosting
- More setup complexity
- Less mature MCP integration than Google Calendar

---

## Implementation Plan

### Phase 1: Setup & Configuration (Week 1)

**Tasks:**
1. ✅ Research MCP servers (COMPLETE)
2. Set up Google Calendar:
   - Create 3 calendars (Internal, Teaching, Public)
   - Configure sharing permissions
   - Get API credentials (OAuth 2.0)
3. Install Google Calendar MCP Server:
   - Follow [installation guide](https://github.com/nspady/google-calendar-mcp)
   - Configure Claude Desktop with MCP server
   - Test AI calendar control
4. Test basic operations:
   - Create event via natural language
   - List events
   - Update/delete events
   - Query availability

**Deliverables:**
- 3 Google Calendars configured
- MCP server operational
- Aeris can manage calendars via AI

---

### Phase 2: Next.js Frontend (Week 2)

**Tasks:**
1. Create new Next.js 14 project (or add to existing SC web repo)
2. Set up Google Calendar API integration:
   - Install `@google-cloud/calendar` or use REST API
   - Implement OAuth flow (server-side)
   - Fetch public events from "SC Public Events" calendar
3. Build calendar UI components:
   - Month view
   - List view
   - Event detail cards
   - Filter by event type (show, residency, workshop)
4. Deploy to Vercel
5. Connect to simulatedcreativity.com domain

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Google Calendar API
- Vercel deployment

**Deliverables:**
- Public calendar visible on web
- Responsive design
- Event filtering
- Deploy to production

---

### Phase 3: Discord Integration (Week 3)

**Tasks:**
1. Choose Discord integration method:
   - Option A: Zapier webhook (fastest)
   - Option B: Custom Discord bot (most control)
   - Option C: Scheduler MCP automation
2. Implement chosen solution
3. Test announcements:
   - New event added → Discord announcement
   - Event updated → Discord update
   - Event reminder (24hr before)
4. Format Discord embeds:
   - Event title
   - Date/time
   - Location
   - RSVP link
   - Flyer image (optional)

**Deliverables:**
- Discord server receives calendar updates
- Formatted, beautiful announcements
- Reliable sync

---

### Phase 4: Teaching Schedule System (Week 4)

**Tasks:**
1. Set up teaching calendar booking:
   - Availability blocks
   - Lesson types (DJ basics, Ableton, Production, etc.)
   - Duration options (1hr, 2hr, workshop)
2. Create booking page:
   - Student-facing booking interface
   - Payment integration (Stripe? Square?) - FUTURE
   - Confirmation emails
3. Internal teaching dashboard:
   - View upcoming lessons
   - Student notes
   - Payment tracking

**Deliverables:**
- Teaching booking system operational
- Students can self-book lessons
- Kevin can manage availability

---

### Phase 5: Internal Meetings Calendar (Week 5)

**Tasks:**
1. Set up internal SC meetings calendar
2. Team access configuration:
   - Michelle (if VP/investor)
   - Future team members
3. Meeting scheduling workflow:
   - Recurring team meetings
   - Ad-hoc planning sessions
4. Privacy controls:
   - Not visible on public site
   - Not announced on Discord
   - Only accessible to team

**Deliverables:**
- Private SC meeting calendar
- Team collaboration tool
- Integrated with other calendars for conflict detection

---

## Success Metrics

### Technical Success
- ✅ AI (Aeris) can manage all 3 calendars via natural language
- ✅ Public calendar displays correctly on web
- ✅ Discord receives real-time updates
- ✅ Teaching bookings automated
- ✅ Zero conflicts between calendars
- ✅ 99%+ uptime (Vercel + Google Calendar reliability)

### Business Success
- Teaching bookings increase (easier to book)
- Show attendance tracked via web RSVP
- Professional presentation to venues/promoters
- Reduced scheduling overhead (AI handles it)

---

## Next Steps

**Immediate Actions:**
1. Create Google Cloud project
2. Enable Google Calendar API
3. Get OAuth 2.0 credentials
4. Install Google Calendar MCP server
5. Test AI calendar control

**When Respawning in Web Repo:**
1. Read this planning doc
2. Create Next.js calendar component
3. Integrate Google Calendar API
4. Build public event display
5. Deploy to Vercel

---

## Questions to Resolve

1. **Teaching Schedule:** Do students book themselves, or manual scheduling?
   - *Decision needed:* Self-service vs. manual

2. **Discord Integration:** Webhook or bot?
   - *Decision needed:* Simple webhook vs. full bot with commands

3. **Public Calendar Features:** Just view, or RSVP/registration?
   - *Decision needed:* Read-only vs. interactive

4. **Payment Integration:** When to add Stripe/Square for teaching bookings?
   - *Decision:* Phase 4 or future enhancement

---

## Resources

**MCP Servers:**
- [Cal.com MCP Server](https://lobehub.com/mcp/mumunha-cal_dot_com_mcpserver)
- [Google Calendar MCP Server](https://github.com/nspady/google-calendar-mcp)
- [Scheduler MCP](https://github.com/PhialsBasement/scheduler-mcp)

**Documentation:**
- [Cal.com Wiki on MCP](https://cal.com/wiki/what-is-an-mcp-server-and-how-does-it-work)
- [Google Calendar API Docs](https://developers.google.com/calendar/api/guides/overview)
- [Next.js 14 Docs](https://nextjs.org/docs)

**Integration Platforms:**
- [Composio MCP Platform](https://mcp.composio.dev/)
- [Zapier MCP for Google Calendar](https://zapier.com/mcp/google-calendar)

---

## Notes

**Why Google Calendar + MCP is the winner:**
1. **AI Control:** Aeris gets "god mode" via MCP server
2. **Multi-Calendar:** 1 account, 3 calendars (perfect for our needs)
3. **Free:** No hosting costs for calendar backend
4. **Proven:** Mature API, well-documented, reliable
5. **Natural Language:** Smart scheduling via MCP
6. **Next.js Integration:** Straightforward API integration

**The power move:**
- Install MCP server → Aeris controls calendars directly
- Build Next.js frontend → Public display
- Discord webhook → Community announcements
- Result: Fully automated, AI-managed scheduling system

---

**Status:** Ready for implementation
**Next:** Set up Google Calendar + MCP Server
**Owner:** Kevin Brack
**AI Partner:** Aeris (with god mode enabled)
