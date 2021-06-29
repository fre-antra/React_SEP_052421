const data = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, quis debet invenire ut pro',
    content: 'Affert nostrum laboramus ex vis, per id dolores sapientem. Cum dicat tempor dignissim ex, est ipsum iudicabit eloquentiam in. Nam an falli verear, duo novum dissentias et, nominati scripserit his ne. Et his maiorum signiferumque, fugit graeco oportere te nec. Quando saperet quo id, eu lobortis atomorum pericula duo. Affert nostrum laboramus ex vis, per id dolores sapientem. Cum dicat tempor dignissim ex, est ipsum iudicabit eloquentiam in. Nam an falli verear, duo novum dissentias et, nominati scripserit his ne. Et his maiorum signiferumque, fugit graeco oportere te nec. Quando saperet quo id, eu lobortis atomorum pericula duo.',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, quis debet invenire ut pro',
    content: 'Affert nostrum laboramus ex vis, per id dolores sapientem. Cum dicat tempor dignissim ex, est ipsum iudicabit eloquentiam in. Nam an falli verear, duo novum dissentias et, nominati scripserit his ne. Et his maiorum signiferumque, fugit graeco oportere te nec. Quando saperet quo id, eu lobortis atomorum pericula duo. Affert nostrum laboramus ex vis, per id dolores sapientem. Cum dicat tempor dignissim ex, est ipsum iudicabit eloquentiam in. Nam an falli verear, duo novum dissentias et, nominati scripserit his ne. Et his maiorum signiferumque, fugit graeco oportere te nec. Quando saperet quo id, eu lobortis atomorum pericula duo.',
    color: 'black'
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, quis debet invenire ut pro',
    content: 'Affert nostrum laboramus ex vis, per id dolores sapientem. Cum dicat tempor dignissim ex, est ipsum iudicabit eloquentiam in. Nam an falli verear, duo novum dissentias et, nominati scripserit his ne. Et his maiorum signiferumque, fugit graeco oportere te nec. Quando saperet quo id, eu lobortis atomorum pericula duo. Affert nostrum laboramus ex vis, per id dolores sapientem. Cum dicat tempor dignissim ex, est ipsum iudicabit eloquentiam in. Nam an falli verear, duo novum dissentias et, nominati scripserit his ne. Et his maiorum signiferumque, fugit graeco oportere te nec. Quando saperet quo id, eu lobortis atomorum pericula duo.',
    color: 'red'
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet, quis debet invenire ut pro',
    content: 'Affert nostrum laboramus ex vis, per id dolores sapientem. Cum dicat tempor dignissim ex, est ipsum iudicabit eloquentiam in. Nam an falli verear, duo novum dissentias et, nominati scripserit his ne. Et his maiorum signiferumque, fugit graeco oportere te nec. Quando saperet quo id, eu lobortis atomorum pericula duo. Affert nostrum laboramus ex vis, per id dolores sapientem. Cum dicat tempor dignissim ex, est ipsum iudicabit eloquentiam in. Nam an falli verear, duo novum dissentias et, nominati scripserit his ne. Et his maiorum signiferumque, fugit graeco oportere te nec. Quando saperet quo id, eu lobortis atomorum pericula duo.',
    color: 'green'
  }
];

const headerInfo = 'More than 900 may clinc staff members diagnosed with Coivd-19 in Midwest over 2 weeks';

export function getCards() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

export function getHeaderInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(headerInfo);
    }, 1000);
  });
}