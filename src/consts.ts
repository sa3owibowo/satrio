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
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
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

