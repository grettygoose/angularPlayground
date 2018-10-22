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
    'role': 'Software Dev Engineer',
    'moblie': '206-331-2720',
    'email': 'gidget5169@gmail.com',
    'github': '@grettygoose',
    'location': 'Seattle, WA',
    'message': ['Cancer Researcher, Front-End-Developer, Dog Lover, Traveluster'],
    'skills': ['HTML', 'CSS (Scss)', 'Bootstrap', 'CraftCMS', 'GitHub', 'JavaScript', 'Angular'],
    'biopic': '/assets/gretty.jpeg',
  }
];

export const JOBS: JobsInfo[] = [
  {
    employer: 'Fred Hutch',
    title: 'Software Development Engineer II',
    location: 'Seattle, WA',
    dates: '2016- Current',
    url: 'https://www.fredhutch.org/en.html',
    description: ''
  },
  {
    employer: 'Fred Hutch',
    title: 'System Analyst/Programmer II',
    location: 'Seattle, WA',
    dates: '2015- Current',
    url: 'https://www.fredhutch.org/en.html',
    description: ''
  },
  {
    employer: 'Fred Hutch',
    title: 'Program Manager',
    location: 'Seattle, WA',
    dates: '2013- 2015',
    url: 'https://www.fredhutch.org/en.html',
    description: ''
  },
  {
    employer: 'University of Washington',
    title: 'Research Scientist',
    location: 'Seattle, WA',
    dates: '2011- 2013',
    url: 'http://www.uwmedicine.org/',
    description: ''
  }
];

export const PROJECTS: ProjectsInfo[] = [
  {
    'title': 'Oncoscape',
    'dates': '2015 -Current',
    // tslint:disable-next-line:max-line-length
    'description': 'Seattle Tumor Translational Research (STTR) assists cancer researchers and clinicians to extract biological meaning through the development of custom software solutions. The rapid growth of both public datasets and analytic methods presents challenges and opportunities. To maximize impact researchers often need to enlist the support of biostatisticians, data scientists and software engineers that specialize in cloud technologies. To help mitigate these challenges, STTR has built a cloud-based platform called Oncoscape.  Our solution allows users to upload clinical and molecular data; leverage industry standard analytic libraries; augment with NCI sponsored datasets and visualize with dozens of novel online interactive tools. Our mission is to accelerate your science.',
    'images': ['images/resourcesOncoscape.png'],
    'url': 'https://oncoscape.v3.sttrcancer.org/'

}, {
    'title': 'Hicor-IQ',
    'dates': '2017- Current',
        // tslint:disable-next-line:max-line-length
    'description': 'A single resource to be used by payers, providers, and researchers for information about what matters in cancer care: quality and cost.',
    'images': ['images/hicor.png'],
    'url': 'https://hicoriq.org/#/'

}, {
    'title': 'STTRConnect',
    'dates': '2015- Current',
        // tslint:disable-next-line:max-line-length
    'description': 'An externally facing website for finding experts and resources within the computational, biological, or clinical fields of biomedical research.',
    'images': ['http://resources.sttrcancer.org/photos/member.jpg', 'http://resources.sttrcancer.org/photos/resources.jpg'],
    'url': 'http://resources.sttrcancer.org/member-connect'

}

];
export const SCHOOLS: SchoolInfo[] = [
  {
    'name': 'Saint Ambrose University',
    'location': 'Davenport, IA',
    'degree': 'BS',
    'majors': 'Cell Biology',
    'dates': 'Graduated 2007',
    'url': 'http://www.sau.edu/'
}, {
    'name': 'University of Washington',
    'location': 'Seattle, WA',
    'degree': 'CompSci Certification',
    'majors': 'SQL Server Development',
    'dates': 'Graduated 2015',
    'url': 'https://www.pce.uw.edu/certificates/sql-server-development'
}
];
export const ONLINE: OnlineInfo[] = [
  {
    'title': 'Front End Web Development',
    'school': 'Udacity',
    'dates': '2017-2017',
    'url': 'https://confirm.udacity.com/CRKC5CPK'
},
{
    'title': 'Udemy (various-frontend)',
    'school': 'Udemy.com',
    'dates': '2015-current',
    'url': 'https://www.udemy.com/',

}
];

