Website Build Prompt — WCS Group (IT Services + E-Waste Recycling) — v2

Paste everything below into Figma AI (or hand to a developer) as-is.

PROMPT START

Build a professional B2B company website for a two-division group — World Class Solutions (WCS), an IT services company, and Green IT Recycling, an e-waste/IT-asset recycling company. Use React (functional components, hooks) for structure, semantic HTML5, and CSS (plain CSS or Tailwind — utility classes only, no inline styles, no CSS-in-JS). No UI kit look-and-feel; this must read as a real, custom-built corporate site, not an AI template.

Hard design constraints (avoid "AI-generated" look)
No decorative accent bars/stripes under headings, on card edges, or as sidebars.
No emoji, no generic stock icon packs. If icons are needed, use a single consistent line-icon set (e.g., Lucide/Feather) at one weight, one size, one color.
Real typographic hierarchy: max 4 font sizes per page (H1, H2, body, small/label). Body text 16–18px, line-height 1.5–1.6. Headings tighter line-height (1.1–1.2).
Whitespace over borders — separate sections with padding/background shifts, not rules or boxes.
Buttons: solid fill for primary CTA, one hover state (slight darken, no bounce/scale animation).
Grid alignment must be pixel-consistent — cards in a row share identical height/padding; columns share identical gutters.
Color palette — taken directly from the company PPT (single brand family, no invented colors)

The source PPT uses one blue family only — a light-to-deep blue gradient banner with a wave motif, deep blue body copy, and white backgrounds. Do not introduce green, orange, or any second hue anywhere on the site. Both divisions (IT Services and E-Waste Recycling) share this same palette — differentiate them through section labeling and imagery, not color.

Primary blue (deep): 
#0D47A1 — headings, nav active state, primary button fill
Mid blue (brand banner): 
#1E88E5 — section banner base, links, secondary buttons
Light blue (gradient top / tints): 
#64B5F6 — gradient endpoint, hover tints, background washes
Pale blue (background wash): 
#E3F2FD — card backgrounds, alternating section backgrounds
Body text: 
#1A1A1A for standard copy; 
#1565C0 for emphasis text/pull quotes (matches the PPT's blue body-text style)
Muted/secondary text: 
#5F6368
Base backgrounds: 
#FFFFFF and 
#F7FAFD alternating between sections
Dark footer (optional, if a dark section is used): 
#0A2540 with white text — a deep tint of the same blue family, not a separate near-black

Gradient exception: unlike a generic "no gradients" rule, this brand's own visual identity uses a soft blue gradient (light → deep, diagonal or radial) on section header banners — this is authentic to the PPT and should be reused exactly once per page, on the page's top banner/hero only. Do not use gradients anywhere else (no gradient buttons, no gradient text, no gradient card borders).

Optional brand motif: the PPT's header banners end in a soft wave shape before the white body content begins. This can be reused as a single SVG wave divider under the hero/page-title banner — but nowhere else on the page (not repeated as a footer wave, not used as a card decoration).

Typography
Headings: bold, clean sans-serif (Inter or similar), set in the deep blue 
#0D47A1 when used as a section title, or white when set inside a blue banner
Body: same family, regular weight, 
#1A1A1A
Eyebrow labels (small caps-style labels above section headers): 12–13px, uppercase, letter-spacing 0.08em, 
#1E88E5, medium weight
Navigation structure (mega-dropdown pattern, adapted from Eyrieon reference)

Sticky pill-style navbar, white or 
#0A2540 dark background. Logo left. Three dropdown nav groups + one CTA button, right-aligned, using the mid-blue 
#1E88E5 as the sole accent (active states, hover underline, CTA fill). On scroll, navbar background solidifies.

Nav item 1 — "What We Do" (two-column mega-dropdown)

Column A — IT SERVICES
Infrastructure Services
Application Development Services
Professional Consultancy Services
Website Design
Customized Data Centre Designing
High Performance Computing (HPC)
Column B — E-WASTE & RECYCLING
WEEE Recycling
Reverse Logistics
Data Destruction
Asset Management
EPR & E-Waste Management

Nav item 2 — "Who We Are" (single column)

About Us
Vision, Mission & Values
How It Works (3R's)
Clients

Nav item 3 — "Resources" (single column)

Blog
E-Waste Guide (types, impact, process)

CTA button (solid 
#0D47A1 fill, white text, right-aligned): "Contact Us"

Card component spec (used across every info-list section on the site)

All service lists, "Why Us" points, blog previews, and 3R's explanations must render as cards, not plain paragraph stacks. One reusable card component:

Card
├── [IMAGE SLOT] — 4:3 or 16:9 ratio, top of card, background #E3F2FD placeholder until real image supplied
├── Eyebrow label (optional, 12px, uppercase, #1E88E5)
├── Heading (H3, #0D47A1, bold)
├── Body text (2–4 lines, #1A1A1A)
└── "Read More" link (#1E88E5, arrow icon, no button chrome)
Card background: 
#FFFFFF on a 
#F7FAFD section background, or 
#E3F2FD tint on a white section background — always alternate so cards visually separate from their section.
Card shadow: none, or a barely-visible 1px border 
#E3F2FD — no drop shadows.
Grid: 3 columns desktop / 2 tablet / 1 mobile, equal height, equal gutter (24px).
Reserved image slots (explicit — do not fill with generic stock/AI-generated imagery; leave a labeled placeholder box sized to the real image that will be dropped in later)
Location	Placeholder size/ratio	What real image will go here
Home hero	Full-bleed, 16:9, dark overlay for text legibility	Data center / server room or industrial recycling floor photo (client to supply)
About Us section	1:1, right-aligned next to text block	The globe + business-people illustration used in the PPT "About Us" slide
IT Services page intro	16:9 banner under page title	IT team / infrastructure photo
Each IT Services card (6 cards)	4:3, top of card	Icon-style or photo per service (client to supply)
E-Waste Recycling page intro	16:9 banner under page title	Recycling plant / WEEE processing photo
Each E-Waste service card (5 cards)	4:3, top of card	Photo per service (WEEE, Reverse Logistics, Data Destruction, Asset Management, EPR)
Blog grid (8 cards)	4:3, top of card	One representative image per article
Client logo strip	Fixed-height logo boxes, grayscale, color on hover	Actual client logos (Tata Motors, Essar Steel, Persistent, etc.)
Contact page	1:1 or 4:3, beside contact form	Pune office / map graphic

Every placeholder should render as a light 
#E3F2FD box with a centered dashed border and a small gray label (e.g., "IMAGE: Data center hero") so it's obvious to the client exactly what needs to be swapped in — not a stretched/cropped stock photo standing in permanently.

Page-by-page content
1. HOME

Hero (blue gradient banner, 
#64B5F6 → 
#0D47A1, wave divider at base, white text):

Headline: World Class Solutions. Sustainable Technology, End to End. Subhead: We deliver enterprise IT services and responsible e-waste management — from deployment to decommission — for organizations across India.

Below the hero, a row of pill/tab links (outline style, 
#1E88E5 border and text, fill on hover): IT Infrastructure · Application Development · E-Waste Recycling · Data Destruction

Section: About us (short)

World Class Solutions (WCS) is an IT services organization providing IT services, consulting and business solutions, adding real value to global organizations through domain expertise and proven, world-class service. WCS places innovation, cost-effectiveness, timeliness and energy efficiency at the heart of its business, working toward complete customer satisfaction.

Section: Two-division overview (2 cards, same blue palette, differentiated only by label/icon — no color split)

Card 1: "IT Services" — one-line summary + "Explore IT Services" link
Card 2: "E-Waste Recycling" — one-line summary + "Explore Recycling Services" link

Section: Why Us (card grid, 5 cards)

Our Credibility — In this industry for over 29 years, shaping up to be a leading service provider online and offline.
Our Creativity — Constantly embracing change; new internet/technology updates implemented to client advantage.
Our Reliability — Staffed with competent professionals who translate business goals into reality.
Our Capability — Bright ideas backed by advanced tools and technology.
Our Adaptability — Never resting on past success; constant pace of improvement.

Section: Client logos — grid: Tata Motors, Essar Steel, Persistent, Rivulis Irrigation, Yash Technologies, FIMI, Abhinav Education Society, Armacell, Curtiss Wright, NephroPlus, Wilo Mather+Platt, Williams Controls, Focus Preferred Eng'g, Executive Access.

Footer CTA band (
#0A2540 background): "Ready to work with us?" + Contact button.

2. ABOUT US

Page banner: blue gradient, "ABOUT US" title, wave divider — matching the PPT slide exactly.

World Class Solutions (WCS) is an IT services organization providing IT services, consulting and business solutions. We add real value to global organizations through domain expertise plus solutions with proven success in the field and world-class service. WCS has placed innovation, cost-effectiveness, timeliness and a firm commitment to energy efficiency, at the heart of its business credo, to achieve 'Complete Customer satisfaction'. A wide range of distinguished clientele, who continuously repose their faith in our proficiency, bear testimony to this fact. When you work with us, your long-term success is our motivation. This is why we can offer you the ability to meet every challenge and the agility to capitalize on every opportunity.

[IMAGE SLOT: globe + business-people illustration from PPT, 1:1, right of text]

About Green IT Recycling (sub-section, same palette, distinct only by "Green IT Recycling" label):

Green IT Recycling Center Pvt. Ltd is an asset recovery solution provider, managing excess or end-of-life IT assets. Our expertise in process engineering and remarketing directly translates into the recovery of IT asset value for our clients' businesses. The Directors bring 16 years of experience in IT Asset management services, focused on three core services: Data Security, Value for Return, and Environmental Disposal.

Registered Recycler — Maharashtra Pollution Control Board (M.P.C.B)
Registered under Maharashtra Special Economic Zone (S.E.Z)

Vision: To become a leading enterprise and business solutions provider that drives performance and business value. We are committed to helping our clients achieve success by providing comprehensive solutions.

Mission: To help our customers gain and sustain a strategic business advantage by providing world-class solutions leveraging technology, professional services, and a flexible global delivery model.

Values: Creation of Wealth through Fair Practices, Pursuit of Excellence through quality, Highest Level of Integrity, Optimum Value Proposition, Customer Care, Team Work, Respect for the individual, Preservation of our heritage and environment.

3. IT SERVICES

Page banner: same blue gradient system, "IT SERVICES" title.

Intro: We work behind the scenes to help our clients achieve their business goals by delivering services that simplify and streamline your IT environment for operational excellence. Our consultants know exactly what to do to improve your business process and IT requirements. Regardless of industry, we offer flexible, suitable solutions to meet your service challenges.

Service card grid (6 cards, image slot + heading + body):

Infrastructure Services
Application Development Services
Professional Consultancy Services
Website Design
Customized Data Centre Designing
High Performance Computing (HPC)

Sub-section: Infrastructure Services (3 detail cards)

Technology Deployment — Successful IT hardware and software deployments require logistical skill and geographic coverage to ensure the right people are in the right place at the right time.
Managed IT Services — The need to get work done better, faster and more cost-effectively is ever present in business.
Outsourced IT Support Services — IT support teams are strategic assets that can reduce overall IT costs and significantly improve end-user productivity.

Sub-section: Application Development Services (card list)

Web Design & Maintenance
Application Development
Web Applications Development
Application Support & Maintenance
Application Testing

Sub-section: Technologies (simple tag/pill list, not full cards) .NET (ASP.NET, C#, VB.NET, WebServices) · ASP · HTML · DHTML · PHP · CGI · JavaScript · VBScript · Java · JSP · WebSphere · Oracle · SQL Server

4. E-WASTE RECYCLING

Page banner: same blue gradient system, "E-WASTE RECYCLING" title — no green.

Intro: The scope of services to effectively deal with a customer's demand for disposing of retiring IT assets can vary depending on many factors, from logistics to recycling services. As per customer demand, we render services following the norms of environmental laws.

Service card grid (5 cards, image slot + heading + body + "Read More"):

WEEE Recycling — Green IT Recycling provides safe and secure electronic waste disposal and recycling services (WEEE Recycling) for industries throughout India, strictly adhering to government regulations and international standards. Plant: D-222, MIDC Ranjangaon, District Pune, Maharashtra, 412220. Toll-Free: 1800-2700-600.
Reverse Logistics — PAN India pickup via tie-up with Gati KWE Logistics — covers return/exchange, repair, refurbishment, remarketing and disposition, starting at the point of consumption and ending at the point of origin.
Data Destruction — Three methods: Degaussing (zeroes magnetization, data unrecoverable), Physical destruction (shredding), Electronic Data Wiping (certified erasure software for SAS/SATA/SSD/tape, tamper-proof report).
Asset Management — Extract value from older, out-of-date computers, printers, scanners and copiers sitting idle in storage.
EPR (Extended Producer Responsibility) — A transparent operating model for bulk producers of electric/electronic equipment to meet EPR targets within a specified timeframe.

Sub-section: How It Works — The 3R's (3 cards, side by side)

Reuse — Donation to schools/NGOs, supplying parts to service centers, or reselling products; sorting used IT products for reuse.
Reduce — Refurbishment, power-saving options, "E-Office," repairing non-working computers using old working parts.
Recycle — Disassembly and segregation of IT products to reclaim base metals and hazardous materials — leaded CRT glass, mercury bulbs, ink cartridges, PCBs, ferrous metals.
5. BLOG / RESOURCES

Card grid (8 cards, image slot + title + 1–2 line excerpt + "Read More"):

What is E-waste Recycling? — Reuse and reprocessing of electrical/electronic equipment discarded or regarded as obsolete.
Impacts of E-Waste on the Environment — Waste from electronics ranging from computers and phones to household appliances.
Process of E-Waste Recycling — The reuse and reprocessing stages of discarded electrical/electronic equipment.
E-waste in India and Developed Countries — A rising global problem in both developing and developed nations, containing material that's both valuable and toxic.
Types of E-Waste — Large household appliances (42%), ICT equipment (33.9%), and consumer electronics.
Benefits of E-waste Recycling — Recycling raw materials from end-of-life electronics is the most effective solution to the growing e-waste problem.
Impacts of E-Waste on Health — Recycling valuable elements has become an income source informally in developing countries, though primitive methods pose health risks.
Where Does Your Electronic Waste Go? — Contains hazardous chemicals: lead, cadmium, beryllium, mercury, brominated flame retardants.
6. CLIENTS

Logo grid, white background, grayscale-to-color-on-hover.

7. CONTACT US
Address: 1, Sarangshree Apartment, Opp Kailas Jeevan Factory, Dhayari, Pune-411041.
Email: wcspune@gmail.com
Green IT Recycling Plant: D-222, MIDC Ranjangaon, District Pune, Maharashtra, 412220
Toll-Free: 1800-2700-600
Contact form: Name, Email, Phone, Message, Dropdown ("I'm interested in: IT Services / E-Waste Recycling / Both"), Submit button (
#0D47A1 fill).
[IMAGE SLOT: Pune office / map graphic, beside form]
Embed a Google Map pin (Pune office).
Footer (site-wide, 
#0A2540 dark blue background, white text)

Four columns: Logo + one-line tagline | IT Services quick links | Recycling quick links | Contact info + social icons (single-weight line icons, 
#64B5F6). Copyright line: "© 2025 World Class Solutions — All Rights Reserved."

Technical build notes
React functional components, one per section (Hero.jsx, MegaNav.jsx, ServiceCard.jsx, WhyUsGrid.jsx, ClientLogos.jsx, BlogCard.jsx, ContactForm.jsx, Footer.jsx, ImagePlaceholder.jsx).
ImagePlaceholder.jsx: reusable component taking ratio, label props — renders the dashed-border placeholder box described above.
Mega-dropdown nav: controlled via useState per nav item, close on outside click, one dropdown open at a time.
Fully responsive: navbar collapses to a hamburger + accordion-style mega-menu below 768px.
No animation libraries beyond simple CSS transitions (opacity/transform on dropdown open, 150–200ms ease).
Semantic tags throughout: <nav>, <header>, <main>, <section>, <footer>, proper heading hierarchy (one <h1> per page).
Alt text on every logo/image (client names, service names).
PROMPT END