export type Project = {
  title: string
  shortTitle: string
  url: string
  category: string
  description: string
  details: string[]
  tech: string[]
  number: string
  year: string
  screenshot: string
  layout: 'left' | 'right' | 'wide' | 'offset'
}

export const projects: Project[] = [
  {
    title: 'Vertex Software', shortTitle: 'Vertex', url: 'https://vertexsoftware.in/',
    category: 'Software / ERP / Web', year: '2026', number: '01', layout: 'left',
    description: 'A technology company platform presenting software, ERP, AI, training and digital product services.',
    details: ['Responsive React interfaces', 'Reusable product architecture', 'Production-focused delivery'],
    tech: ['React', 'TypeScript', 'Responsive UI'], screenshot: '/projects/vertex-software.jpg',
  },
  {
    title: 'Rokon Al Shiuokh', shortTitle: 'Rokon', url: 'https://rokonalshiuokh.com/',
    category: 'E-commerce / Mobile', year: '2025', number: '02', layout: 'right',
    description: 'An Arabic-first commerce ecosystem spanning a responsive storefront, Android APK and native-quality iOS experience.',
    details: ['Flutter mobile applications', 'Flask API services', 'AWS production infrastructure'],
    tech: ['Flutter', 'Flask', 'AWS', 'Android', 'iOS'], screenshot: '/projects/rokon-al-shiuokh.jpg',
  },
  {
    title: 'Fabpodd', shortTitle: 'Fabpodd', url: 'https://fabpodd.com/',
    category: 'Commerce / Customisation', year: '2025', number: '03', layout: 'wide',
    description: 'A print-on-demand commerce experience that makes custom apparel and gifting feel clear, modern and approachable.',
    details: ['Reusable commerce UI', 'Typed frontend logic', 'Cross-device experience'],
    tech: ['React', 'TypeScript', 'Commerce'], screenshot: '/projects/fabpodd.jpg',
  },
  {
    title: 'Mysuru Bricks', shortTitle: 'Mysuru Bricks', url: 'https://mysurubricks.com/',
    category: 'Real Estate / Discovery', year: '2025', number: '04', layout: 'offset',
    description: 'A focused property discovery platform connecting buyers with relevant developments across Mysuru.',
    details: ['Property-oriented interfaces', 'Clear listing hierarchy', 'Responsive discovery flow'],
    tech: ['React', 'TypeScript', 'Responsive Design'], screenshot: '/projects/mysuru-bricks.jpg',
  },
  {
    title: 'True Teachers NEET Academy', shortTitle: 'True Teachers', url: 'https://trueteachersneetacademy.com/',
    category: 'Education / Admissions', year: '2026', number: '05', layout: 'left',
    description: 'An admissions-led education website helping students and parents understand programs, campus life and outcomes.',
    details: ['Education content system', 'Mobile-first journeys', 'Clear admissions hierarchy'],
    tech: ['React', 'TypeScript', 'Mobile-first UI'], screenshot: '/projects/true-teachers.jpg',
  },
  {
    title: 'Coral Bridge Global', shortTitle: 'Coral Bridge', url: 'https://coralbridgeglobal.com/',
    category: 'Global Trade / Supply Chain', year: '2026', number: '06', layout: 'right',
    description: 'An editorial corporate presence communicating international trade, sourcing and supply-chain capability.',
    details: ['Corporate frontend', 'Service storytelling', 'Global market positioning'],
    tech: ['React', 'TypeScript', 'Corporate UI'], screenshot: '/projects/coral-bridge-global.jpg',
  },
  {
    title: 'Fluidmech Solutions', shortTitle: 'Fluidmech', url: 'https://fluidmech.in/',
    category: 'Engineering / Enterprise', year: '2026', number: '07', layout: 'wide',
    description: 'A precise engineering platform translating complex technical capabilities into a clear enterprise story.',
    details: ['Technical service pages', 'Enterprise information design', 'Performance-led frontend'],
    tech: ['React', 'TypeScript', 'Web Development'], screenshot: '/projects/fluidmech-solutions.jpg',
  },
]

export const technologies = [
  ['React.js', 'Frontend systems'], ['TypeScript', 'Type-safe development'],
  ['JavaScript', 'Web engineering'], ['Flutter', 'Mobile applications'],
  ['Flask', 'Backend services'], ['Python', 'Automation & data'],
  ['REST APIs', 'Product integration'], ['Django', 'Backend development'],
  ['PostgreSQL', 'Database'], ['MySQL', 'Database'],
  ['AWS', 'Cloud infrastructure'], ['Power BI', 'Analytics'],
  ['Git & GitHub', 'Version control'], ['ERP Software', 'Business systems'],
]

export const experience = [
  { date: '2022 — NOW', role: 'Software Engineer', company: 'Dream Buzz Solution [Lets Pro]', location: 'Mysuru, India', copy: 'Building production software, business applications, data-connected systems and responsive digital products.' },
  { date: '2021', role: 'Associate Software Engineer', company: 'Dream Buzz Solution [Lets Pro]', location: 'Mysuru, India', copy: 'Developed Python data workflows, ETL processes and business-focused software solutions.' },
  { date: '2020 — 2021', role: 'Software Engineer Intern', company: 'Dream Buzz Solution [Lets Pro]', location: 'Mysuru, India', copy: 'Supported application development, reporting systems, SQL workflows and performance improvements.' },
]
