You are a senior frontend engineer and design-focused developer.

Your task is to build a modern personal website for a software engineer using the markdown content provided.

The website must feel like a **builder's laboratory** — a place where systems, ideas, and experiments are shared.

The goal is NOT a typical resume website.

The goal is to communicate:

- builder mindset
- systems thinking
- AI experimentation
- engineering leadership

The site should feel **minimal, intelligent, and modern**.

Use the markdown file as the **single source of content**.

---

# Tech Stack

Build the site using the following stack:

Framework:
Next.js (App Router)

Styling:
TailwindCSS

Animation:
Framer Motion

Content Rendering:
MDX

Icons:
Lucide Icons

Deployment target:
Vercel

---

# Website Structure

Create the following pages:

Home
Systems
AI Experiments
Writing
About
Contact

---

# Navigation

Sticky navigation bar with:

Logo (name)
Home
Systems
AI
Writing
About
GitHub
Contact

Navigation should collapse into a mobile menu on small screens.

---

# Design Principles

Follow these design principles:

Minimalist layout  
Large typography  
Lots of whitespace  
Dark theme by default  
Subtle animations  
Professional and technical tone  

Avoid clutter.

The design should feel like:

- a modern startup website
- a technical thinker's portfolio
- a systems architect's lab

---

# Color Scheme

Dark background:

#0B0B0B

Accent color:

#6366F1 (indigo)

Text:

#E5E7EB

Muted text:

#9CA3AF

---

# Typography

Use:

Inter for body text  
JetBrains Mono for code snippets  

Hero text should be very large.

---

# Layout

The site should use a **vertical storytelling layout**.

Sections should appear as the user scrolls.

Use smooth motion transitions between sections.

---

# Page Details

## Home Page

Sections:

Hero
How I Think
Systems Built
AI Experiments
Timeline
Contact

Hero should include:

Name  
Title  
Short description  
GitHub button  
Scroll indicator  

---

## Systems Page

Show case studies of systems built.

Each system should display:

Title  
Problem  
What was built  
Impact  

Use cards or panels.

---

## AI Experiments Page

Show AI work and ideas.

Include:

AI Beyond the Chat Interface  
Current AI experiments  
Future ideas

---

## Writing Page

This page should support blog posts written in MDX.

Each article should have:

Title
Date
Reading time
Content

---

## About Page

Display:

Story
Engineering philosophy
Interests

Include a personal thesis section.

---

## Contact Page

Include:

Email
GitHub
LinkedIn

Also include a simple contact form.

---

# Animations

Use subtle animations.

Examples:

Fade in sections on scroll
Card hover animations
Smooth page transitions

Avoid heavy animations.

---

# Performance Requirements

Site must be:

Fast loading
Mobile responsive
Accessible
SEO friendly

Use:

Next Image optimization
Static generation when possible

---

# Components

Create reusable components:

Navbar
Hero
Section
Card
Timeline
Footer

---

# Content Rendering

Parse the provided markdown file.

Automatically populate sections using the content.

Do not hardcode text.

---

# Bonus Feature

Add a section on the home page called:

"Build Something With Me"

Include a simple text input where a user can describe a system idea.

For now this input only displays a placeholder response.

This will later connect to an AI system.

---

# Output Format

Provide:

1. Folder structure
2. All code files
3. Instructions to run locally
4. Instructions to deploy on Vercel

Ensure the project can run with:

npm install
npm run dev

---

# Final Goal

The final website should feel like:

A builder's portfolio  
A systems architect's lab  
A glimpse into the future of AI-assisted engineering