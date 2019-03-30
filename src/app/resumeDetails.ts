import {
  JobsInfo,
  ProjectsInfo,
  BioInfo,
  SchoolInfo,
  OnlineInfo
} from './resumeInfo';

export const BIO: BioInfo[] = [
  {
    'name': 'Gretchen Krenn',
    'role': 'software engineer / project manager',
    'moblie': '206-331-2720',
    'email': 'gidget5169@gmail.com',
    'github': '@grettygoose',
    'location': 'seattle, wa',
    'biopic': '/assets/gretty.jpeg',
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
    description: 'Research scientist and clinical project manager for internationally recognized translational medicine research group. Collaborate with 40+ researchers, clinicians, and principal investigators across multiple major'
  },
  {
    employer: 'Fred Hutch',
    title: 'Program Manager',
    location: 'Seattle, WA',
    dates: '2013- 2015',
    url: 'https://www.fredhutch.org/en.html',
    // tslint:disable-next-line:max-line-length
    description: 'Research scientist and clinical project manager for internationally recognized translational medicine research group. Collaborate with 40+ researchers, clinicians, and principal investigators across multiple major'
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
    'title': 'Oncoscape',
    'dates': '2015 -Current',
    // tslint:disable-next-line:max-line-length
    'description': 'Seattle Tumor Translational Research (STTR) assists cancer researchers and clinicians to extract biological meaning through the development of custom software solutions. The rapid growth of both public datasets and analytic methods presents challenges and opportunities. To maximize impact researchers often need to enlist the support of biostatisticians, data scientists and software engineers that specialize in cloud technologies. To help mitigate these challenges, STTR has built a cloud-based platform called Oncoscape.  Our solution allows users to upload clinical and molecular data; leverage industry standard analytic libraries; augment with NCI sponsored datasets and visualize with dozens of novel online interactive tools. Our mission is to accelerate your science.',
    'images': ['assets/2.2MCells.png'],
    'url': 'https://oncoscape.v3.sttrcancer.org/'

   },
  //     {
  //   'title': 'Mouse Atlas',
  //   'dates': '2019- Current',
  //   // tslint:disable-next-line:max-line-length
  //   'description': '',
  //   'images': ['images/hicor.png'],
  //   'url': 'https://hicoriq.org/#/'

  // },


   // {
  //   'title': 'Hicor-IQ',
  //   'dates': '2017- Current',
  //   // tslint:disable-next-line:max-line-length
  //   'description': 'A single resource to be used by payers, providers, and researchers for information about what matters in cancer care: quality and cost.',
  //   'images': ['images/hicor.png'],
  //   'url': 'https://hicoriq.org/#/'

  // },
   {
    'title': 'STTRConnect',
    'dates': '2015- Current',
    // tslint:disable-next-line:max-line-length
    'description': 'An externally facing website for finding experts and resources within the computational, biological, or clinical fields of biomedical research.',
    'images': ['assets/2.2MCells.png'],
    'url': 'http://resources.sttrcancer.org/member-connect'

  }

];
export const SCHOOLS: SchoolInfo[] = [
  {
    'name': 'University of Washington',
    'location': 'Seattle, WA',
    'degree': 'CompSci Certification',
    'majors': 'SQL Server Development',
    'dates': 'Completed 2015',
    'url': 'https://www.pce.uw.edu/courses/sql-server-essentials-for-developers'
  },
  {
    'name': 'Saint Ambrose University',
    'location': 'Davenport, IA',
    'degree': 'BS',
    'majors': 'Cell Biology',
    'dates': 'Completed 2007',
    'url': 'http://www.sau.edu/'
  },
];
export const ONLINE: OnlineInfo[] = [
  {
    'title': 'Front End Web Development',
    'school': 'Udacity',
    'dates': 'Completed 2017',
    'url': 'https://confirm.udacity.com/CRKC5CPK'
  },
  {
    'title': 'Udemy (various courses)',
    'school': 'Udemy.com',
    'dates': '2015-current',
    'url': 'https://www.udemy.com/',

  }
];

