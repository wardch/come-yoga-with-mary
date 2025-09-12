## Wireframe and Component Map (MVP)

### Mobile-first layout (single page)
1. Header
   - Logo/wordmark (text for now)
   - CTA buttons: WhatsApp, Contact
2. Hero
   - Title: Candlelit Yoga in Clontarf
   - Tagline
   - Primary CTA: Join WhatsApp
   - Secondary CTA: Contact
   - Background: hero image (soft overlay)
3. About the class
   - Short paragraph
   - Bullets: all levels, candlelit, vinyasa flow
4. Schedule & dates
   - Mondays 7:45–8:45pm
   - 6 dates list
5. Location
   - Address block, hall vs house clarification
   - Map link button
   - Parking info
6. What to bring
   - Short list
7. Instructor
   - Photo + bio
8. Pricing
   - Drop-in, 3-pack, payment methods
9. Gallery
   - 3–5 images grid (lazy)
10. Contact form
   - Name, email, message
   - Success/error states
11. Footer
   - Social links, email, small print

### Desktop layout adjustments
- Two-column for About/Location/Instructor where suitable
- Wider gallery grid
- Sticky top nav with CTA

### shadcn/ui component mapping
- Button: primary/secondary/outline (CTA, map, contact)
- Card: About, Location, Pricing, Instructor
- Alert: house vs hall clarification
- Input, Textarea, Label, Form: contact form
- Separator: section dividers
- Sheet or Dialog (optional): quick RSVP info
- Typography utilities: headings/body

### Patterns
- Responsive container and spacing tokens
- Light theme with warm accent; dark-friendly
- Motion reduced for accessibility

### Open design confirmations
- Accent color preference (amber/ivory on charcoal?)
- Serif for headings ok? (e.g., Playfair/Libre Baskerville later)
- Hero image selection from `public/images`

