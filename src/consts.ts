import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Satrio Wibowo",
  DESCRIPTION: "I Am Nobody.",
  AUTHOR: "Satrio Wibowo",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Tempat yang pernah saya kerjakan.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Menulis tentang topik yang saya minati.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Projects terbaru yang telah saya kerjakan.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Cari semua postingan dan projects berdasarkan kata kunci.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "me@satrio.net",
    HREF: "mailto:me@satrio.net",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "Satrio Wibowo",
    HREF: "https://github.com/sa3owibowo"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Satrio Wibowo",
    HREF: "https://www.linkedin.com/in/sa3owibowo/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "Satrio Wibowo",
    HREF: "https://twitter.com/sa3owibowo",
  },
]

