import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'My Okr',
    url: '/my-okr',
    icon: 'icon-speedometer'
  },
  {
    name: 'Company Structure',
    url: '/structure',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Team',
        url: '/structure/team',
        icon: 'icon-puzzle'
      }, {
        name: 'User Role',
        url: '/structure/user-role',
        icon: 'icon-puzzle'
      }, {
        name: 'Employee',
        url: '/structure/employee',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Okr Of The Year',
    url: '/okr-of-the-year',
    icon: 'icon-drop'
  },
  {
    name: 'Okr Of The Quarter',
    url: '/okr-of-the-quarter',
    icon: 'icon-pencil'
  },
  {
    name: 'Analysis Statistics',
    url: '/analysis-statistics',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Okr Teaching',
    url: '/okr-teaching',
    icon: 'icon-calculator'
  }
];
