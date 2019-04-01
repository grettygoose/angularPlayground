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
    title: 'Software Development Engineer - Seattle Translational Tumor Research',
    location: 'Seattle, WA',
    dates: '2015- Current',
    url: 'https://www.fredhutch.org/en.html',
    // tslint:disable-next-line:max-line-length
    description: 'Oncoscape a data visualization and analysis platform for clincal and molecular data'
  },
  {
    employer: 'Fred Hutch',
    title: 'Program Manager - Breast Speciman Repository',
    location: 'Seattle, WA',
    dates: '2013- 2015',
    url: 'https://www.fredhutch.org/en.html',
    // tslint:disable-next-line:max-line-length
    description: 'BSR, impacts research and treatment of breast cancer by providing high-quality, data-rich samples that meet the strict requirements of research',
  },
  {
    employer: 'University of Washington' ,
    title: 'Research Scientist - Cancer Immunotherapy Trials Network',
    location: 'Seattle, WA',
    dates: '2011- 2013',
    url: 'http://www.uwmedicine.org/',
    // tslint:disable-next-line:max-line-length
    description: 'Research scientist and clinical project manager for internationally recognized translational medicine research group.'
  }
];

export const PROJECTS: ProjectsInfo[] = [
  {
    title: 'Oncoscape',
    dates: '2015 -Current',
    shortDescription: 'Seattle Tumor Translational Research (STTR) assists cancer researchers and clinicians to extract biological',
    description: '',
    contributions: '',
    pubTitle: 'Nature: The single-cell transcriptional landscape of mammalian organogenesis',
    pubs: '',
    tech: 'AngularJS, plotygot storage (AWS S3, dynamo), WebGL, D3.js, ',
    images: ['assets/ChromatinStructure.png'],
    url: 'https://oncoscape.v3.sttrcancer.org/',
    id: 'oncoscape'

   },
    {
    title: 'Mouse Atlas',
    dates: '2019- Current',
    shortDescription: '',
    description: '',
    contributions: 'light coding mainly project managenge between serveral UW labs and fred hutch data viz group',
    pubTitle: 'Nature: The single-cell transcriptional landscape of mammalian organogenesis',
    pubs: 'https://www.nature.com/articles/s41586-019-0969-x',
    tech: 'Protobuf, WebGl, AngularJS, AWS',
    images: ['assets/2.2MCells.png'],
    url: 'https://oncoscape.v3.sttrcancer.org/atlas.gs.washington.edu.mouse.rna/landing',
    id: 'mouse-atlas'

    },
   {
    title: 'STTR Connect',
    dates: '2015- Current',
    shortDescription: 'An externally facing website for finding experts and resources within the ',
    description: '',
    contributions: '',
    pubTitle: 'Nature: The single-cell transcriptional landscape of mammalian organogenesis',
    pubs: '',
    tech: 'CraftCMS, Javascript',
    images: ['assets/sttr.jpg'],
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

