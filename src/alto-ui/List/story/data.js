export const people = [
  {
    id: '1',
    name: 'Sherry Franklin',
    job: 'Head of Group Accounting',
    url: '#',
    config: { active: true },
    domain: 'Finance',
    bio:
      'Non esse aliqua anim qui eu sint dolore esse aliquip laboris minim laboris officia consectetur.',
    img: 'http://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Kenneth Daughtry',
    job: 'Head of Group Tax',
    domain: 'Finance',
    url: '#',
    config: { active: true },
    bio: 'Ad nostrud dolore mollit sunt ex ipsum quis et.',
    img: 'http://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Carl Mattson',
    job: 'Head of Group Treasury',
    domain: 'Finance',
    url: '#',
    config: { active: false },
    bio: 'Nostrud ex cupidatat officia aliquip culpa incididunt ad qui.',
    img: 'http://i.pravatar.cc/150?img=3',
  },
  {
    id: '4',
    name: 'Erin Jackson',
    job: 'Group HR Services Manager',
    domain: 'Human Ressources',
    url: '#',
    config: { active: false },
    bio:
      'Tempor ea veniam veniam aliquip ea magna exercitation ipsum ullamco proident sint exercitation in.',
    img: 'http://i.pravatar.cc/150?img=4',
  },
  {
    id: '5',
    name: 'Bart Simpson',
    job: 'I have no image ¯\\_(ツ)_/¯',
    url: '#',
    domain: '- NONE -',
    config: { active: true },
    bio: 'Sunt voluptate cupidatat aliqua mollit non in fugiat nulla.',
    img: 'none',
  },
  {
    id: '6',
    name: 'Elizabeth Taylor',
    job: 'Head of Compensation & Benefits',
    domain: 'Human Ressources',
    url: '#',
    config: { active: false },
    bio: 'Ea et dolore id elit in amet adipisicing velit eu eiusmod.',
    img: 'http://i.pravatar.cc/150?img=6',
  },
  {
    id: '7',
    name: 'Gladys Moreno',
    job: 'Head of HR Talent Management',
    domain: 'Human Ressources',
    url: '#',
    config: { active: true },
    bio: 'Voluptate deserunt aute elit sunt est dolore cupidatat in eiusmod quis id.',
    img: 'http://i.pravatar.cc/150?img=7',
  },
  {
    id: '8',
    name: 'Kyle Huffman',
    job: 'Head of IT',
    domain: 'Product',
    url: '#',
    config: { active: false },
    bio: 'Elit ex quis reprehenderit Lorem anim exercitation.',
    img: 'http://i.pravatar.cc/150?img=8',
  },
];

export const tickets = [
  {
    id: '1',
    type: 'story',
    title: 'Sit labore minim incididunt commodo nostrud aliqua magna.',
    labels: ['Frontend'],
    points: 3,
    assignee: people[0],
    priority: 1,
  },
  {
    id: '2',
    type: 'story',
    title:
      'Esse voluptate ad duis irure culpa commodo in occaecat nulla anim irure exercitation commodo.',
    labels: ['Backend'],
    points: 8,
    assignee: people[2],
    priority: 1,
  },
  {
    id: '3',
    type: 'bug',
    title: 'Fugiat dolore eiusmod labore occaecat labore.',
    labels: ['Frontend', 'Backend'],
    points: 5,
    assignee: people[1],
    priority: 2,
  },
  {
    id: '4',
    type: 'story',
    title: 'Tempor ad irure et consectetur ut ut amet Lorem.',
    labels: ['Design'],
    points: null,
    assignee: people[0],
    priority: 2,
  },
  {
    id: '5',
    type: 'task',
    title: 'Commodo minim reprehenderit exercitation ad.',
    labels: [],
    points: 2,
    assignee: people[0],
    priority: 2,
  },
  {
    id: '6',
    type: 'bug',
    title: 'Ipsum exercitation pariatur excepteur ex occaecat et enim aute.',
    labels: ['Frontend'],
    points: 2,
    assignee: people[2],
    priority: 3,
  },
  {
    id: '7',
    type: 'story',
    title: 'Adipisicing elit ad consequat veniam aliqua cillum anim magna.',
    labels: ['Backend'],
    points: 3,
    assignee: people[6],
    priority: 4,
  },
  {
    id: '8',
    type: 'task',
    title: 'Ullamco anim ex aliqua reprehenderit.',
    labels: ['QA'],
    points: 5,
    assignee: null,
    priority: 4,
  },
];