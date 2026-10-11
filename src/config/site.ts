export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Zachariah Hansen",
  description:
    "Full stack software engineer in Salt Lake City. I build MCP servers, AI tooling, and the systems behind them.",
  jobs: "Software Engineer | Full Stack Developer",
  url: "https://zachariahhansen.com",
  email: "zachariahjhansen@gmail.com",
  resumePdf: "/Hansen,Zachariah_BSSE.pdf",
  // Sections of the single page, in scroll order
  mainNav: [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
    { title: "Education", href: "#education" },
    { title: "Personal", href: "#personal" },
    { title: "Contact", href: "#contact" },
  ],
  links: {
    github: "https://github.com/ZachariahHansen",
    linkedin: "https://www.linkedin.com/in/zachariah-hansen/",
    discord: "https://discord.com/users/218216183181213696",
  },
}
