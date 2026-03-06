# Rebranding Plan: ASTA → Vet Brains

## Organization Details

**From:** Applied Skills Training Academy (ASTA) - اكاديمية المهارات التطبيقية  
**To:** Vet Brains - عقول بيطرية

### Key Changes:
- **Name**: Vet Brains / عقول بيطرية
- **Phone**: 00201003670502, 00201201568888
- **Location**: 451 Haram Street, Giza, Egypt
- **Currency**: Egyptian Pound (EGP) instead of Saudi Riyal (SAR)
- **Domain**: vetbrains.edu.eg (placeholder until actual domain)
- **Email**: info@vetbrains.edu.eg, support@vetbrains.edu.eg (placeholders)
- **Country**: Egypt (was Saudi Arabia)
- **Focus**: Veterinary Training + AI + Current IT/Business programs
- **Payment**: Instapay (Egyptian payment system)
- **Languages**: Keep both Arabic and English
- **Colors**: Veterinary medical theme (teal/green/blue palette)
- **Social Media**: Mock links (to be updated later)

## Implementation Plan

### Phase 1: Branding & Visual Identity (No dependencies)
**Step 1.1** - Update all text content in i18n files
- Replace organization name in `src/i18n/en.json` and `src/i18n/ar.json`
- Update descriptions to mention veterinary training, AI, and professional development
- Change phone numbers from Saudi (+966) to Egyptian (+20)
- Update address from "Dammam, Saudi Arabia" to "451 Haram Street, Giza, Egypt"
- Update copyright text
- Create vision/mission statements for veterinary + tech academy
- Update AI bot name from "Asta AI Assistant" to "Vet Brains AI Assistant"

**Step 1.2** - Update logo and images
- Create text-based SVG logo for "Vet Brains" with veterinary symbol (placeholder)
- Replace `public/svgs/ASTA_Nav_Logo.svg`
- Replace `public/images/Asta logo.png`
- Note: Hero banner image can remain generic or be updated later

**Step 1.3** - Update color scheme
- Modify Tailwind config to use veterinary medical colors (teal: #00897B, green: #4CAF50, blue: #2196F3)
- Update primary brand colors from current navy (#202C5B) to new scheme

### Phase 2: Contact Information & Links (No dependencies)
**Step 2.1** - Update contact details across all pages
- Phone numbers in Footer.jsx
- WhatsApp numbers in WhatsupButton.jsx
- Call button numbers in CallButton.jsx
- Email addresses in Registeration.jsx and Registeration2.jsx

**Step 2.2** - Update domain references
- Replace all "https://asta.edu.sa" with "https://vetbrains.edu.eg" (86+ occurrences)
- Update canonical URLs in SEO components
- Update sitemap-generator.js base URL

**Step 2.3** - Update social media links
- Replace social links in Footer.jsx with mock Egyptian vet academy links
- Twitter, LinkedIn, YouTube, Instagram, Facebook

### Phase 3: Currency & Payment System (No dependencies)
**Step 3.1** - Replace currency symbols and references
- Change SAR/SR/ريال to EGP/جنيه مصري throughout codebase
- Update Riyal SVG icons to Egyptian Pound symbols
- Modify price displays in course and program cards

**Step 3.2** - Update payment configuration
- Remove Saudi payment methods (Mada, STC Pay)
- Add Instapay as Egyptian payment option
- Update PaymentModal.jsx component

### Phase 4: Content & Data (Depends on finalizing vet courses)
**Step 4.1** - Keep existing courses/programs
- Retain all current IT, business, cybersecurity programs
- Update any Saudi-specific references or regulations

**Step 4.2** - Prepare for veterinary content addition
- Document structure for future vet programs in Programs.json
- Document structure for future vet courses in Courses.json
- Note: Actual veterinary program content to be added later

**Step 4.3** - Update metadata and SEO
- Update country code from "SA" to "EG"
- Update geo-region from "Dammam" to "Giza"
- Update keywords to include veterinary training
- Update descriptions to reflect Egyptian market

### Phase 5: Configuration & Build Files (No dependencies)
**Step 5.1** - Update package.json and metadata
- Update project name from "asta-react" to "vetbrains-react"
- Update any ASTA references in README.md

**Step 5.2** - Update HTML metadata
- Update page title in index.html
- Update meta descriptions
- Update favicon/icon references

**Step 5.3** - Update EmailJS configuration
- Update recipient emails in registration forms
- Update email templates with new branding

## Critical Files to Modify

### Configuration Files:
- `/package.json` - project name
- `/index.html` - title, meta tags
- `/sitemap-generator.js` - base URL
- `/tailwind.config.cjs` - color scheme

### Content Files:
- `/src/i18n/en.json` - all English text (400+ lines)
- `/src/i18n/ar.json` - all Arabic text (400+ lines)

### Component Files:
- `/src/components/Footer.jsx` - contact info, social links, address
- `/src/components/CallButton.jsx` - phone numbers
- `/src/components/WhatsupButton.jsx` - WhatsApp numbers
- `/src/components/PaymentModal.jsx` - payment methods
- `/src/components/SEO.jsx` - default meta tags
- `/src/components/OrganizationSchema.jsx` - structured data

### Page Files (Domain URLs):
- All page components with SEO tags (~20 files)
- `/src/pages/Registeration.jsx` - email config
- `/src/pages/Registeration2.jsx` - email config

### Asset Files:
- `/public/svgs/ASTA_Nav_Logo.svg` - main logo
- `/public/svgs/icons/Riyal.svg` - currency icon
- `/public/svgs/icons/WhiteRiyal.svg` - currency icon
- `/public/images/Asta logo.png` - logo image

### Data Files:
- `/src/api/Programs.json` - program data with prices
- `/src/api/Courses.json` - course data with prices
- `/src/api/Standarts.js` - standards and contact info

## Verification Steps

1. **Visual Check**: Homepage displays "Vet Brains - عقول بيطرية" in header
2. **Contact Check**: Footer shows Egyptian phone numbers and Giza address
3. **Currency Check**: All prices display in EGP/جنيه
4. **Link Check**: All internal links use vetbrains.edu.eg domain
5. **Language Check**: Both Arabic and English interfaces work correctly
6. **Payment Check**: Instapay appears as payment option
7. **SEO Check**: Meta tags show Egyptian location and vet training keywords
8. **Email Check**: Registration forms send to new email addresses
9. **Mobile Check**: Responsive design works on mobile devices
10. **Build Check**: Application builds successfully without errors

## Decisions Made

- **Domain**: Using "vetbrains.edu.eg" as placeholder (user to provide actual domain later)
- **Emails**: Using "info@vetbrains.edu.eg" and "support@vetbrains.edu.eg" as placeholders
- **Logo**: Will create text-based SVG placeholder with veterinary symbol
- **Colors**: Adopting medical/veterinary theme (teal, green, blue)
- **Content**: Keeping all existing programs, preparing structure for vet programs to be added later
- **Social Media**: Using placeholder/mock URLs to be updated when actual pages created
- **Payment**: Focusing on Instapay for Egyptian market
- **Scope**: Complete rebrand but NOT creating actual veterinary course content yet

## Notes for Future

- Actual domain to be updated when acquired
- Real email addresses to be configured with EmailJS
- Veterinary course/program content to be added to Courses.json and Programs.json
- Logo to be replaced with professional design when available
- Social media accounts to be updated with real links
- Partner organizations can be added to footer when established
