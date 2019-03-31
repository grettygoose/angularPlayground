import {
  JobsInfo,
  ProjectsInfo,
  BioInfo,
  SchoolInfo,
  OnlineInfo,
  SkillInfo
} from './resumeInfo';

export const BIO: BioInfo[] = [
  {
    name: 'Gretchen Krenn',
    role: 'software engineer / project manager',
    moblie: '206-331-2720',
    email: 'gidget5169@gmail.com',
    github: '@grettygoose',
    location: 'seattle, wa',
    biopic: '/assets/gretty.jpeg',
    resume: ['/assets/GretchenResume.pdf'],
  }
];

export const SKILL: SkillInfo[] = [
  {
   me: 'data visualizer - caner researcher - dog lover - traveluster - cocktailer',
   tech:  'HTML5 - CSS (boostrap/material) - javascript - angularJS -  D3.js -  github -  CMS',
   management:  'cross-functional - end-to-end - organizational - agile - case study - scrum'
  }
];

export const JOBS: JobsInfo[] = [
  {
    employer: 'Fred Hutch',
    title: 'Software Development Engineer',
    location: 'Seattle, WA',
    dates: '2015- Current',
    url: 'https://www.fredhutch.org/en.html',
    // tslint:disable-next-line:max-line-length
    description: 'Research scientist and clinical project manager for internationally recognized translational medicine research group',
  },
  {
    employer: 'Fred Hutch',
    title: 'Program Manager',
    location: 'Seattle, WA',
    dates: '2013- 2015',
    url: 'https://www.fredhutch.org/en.html',
    // tslint:disable-next-line:max-line-length
    description: 'Research scientist and clinical project manager for internationally recognized translational medicine research group',
  },
  {
    employer: 'University of Washington',
    title: 'Research Scientist',
    location: 'Seattle, WA',
    dates: '2011- 2013',
    url: 'http://www.uwmedicine.org/',
    // tslint:disable-next-line:max-line-length
    description: 'Research scientist and clinical project manager for internationally recognized translational medicine research group. Collaborate with 40+ researchers, clinicians, and principal investigators across multiple major'
  }
];

export const PROJECTS: ProjectsInfo[] = [
  {
    title: 'Oncoscape',
    dates: '2015 -Current',
    // tslint:disable-next-line:max-line-length
    shortDescription: 'Seattle Tumor Translational Research (STTR) assists cancer researchers and clinicians to extract biological',
    description: '',
    contributions: '',
    Pubs: '',
    tech: '',
    images: ['assets/ChromatinStructure.png'],
    url: 'https://oncoscape.v3.sttrcancer.org/',
    id: 'oncoscape'

   },
    {
    title: 'Mouse Atlas',
    dates: '2019- Current',
    // tslint:disable-next-line:max-line-length
    shortDescription: '',
    description: '',
    contributions: '',
    Pubs: '',
    tech: '',
    images: ['assets/2.2MCells.png'],
    url: 'https://hicoriq.org/#/',
    id: 'mouse-atlas'

    },
   {
    title: 'STTRConnect',
    dates: '2015- Current',
    // tslint:disable-next-line:max-line-length
    shortDescription: 'An externally facing website for finding experts and resources within the ',
    description: '',
    contributions: '',
    Pubs: '',
    tech: '',
    images: ['assets/sttr.png'],
    url: 'http://resources.sttrcancer.org/member-connect',
    id: 'sttr'

  }

];
export const SCHOOLS: SchoolInfo[] = [
  {
    name: 'Saint Ambrose University',
    location: 'Davenport, IA',
    degree: 'Bachelors Science',
    majors: 'Cell Biology',
    dates: 'Completed 2007',
    url: 'http://www.sau.edu/'
  },
  {
    name: 'University of Washington',
    location: 'Seattle, WA',
    degree: 'CompSci Certification',
    majors: 'SQL Server Development',
    dates: 'Completed 2015',
    url: 'https://www.pce.uw.edu/courses/sql-server-essentials-for-developers'
  }
];
export const ONLINE: OnlineInfo[] = [
  {
    title: 'Front End Web Development',
    school: 'Udacity',
    dates: 'Completed 2017',
    url: 'https://confirm.udacity.com/CRKC5CPK'
  },
  {
    title: 'Various Courses',
    school: 'Udemy',
    dates: '2015-current',
    url: 'https://www.udemy.com/',

  }
];

