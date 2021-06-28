const cards = [{
  cardTitle: 'Wisconsin Democratic election official: Don\'t water Trump\'s plant of felony',
  cardContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  cardColor: 'blue'
}, {
  cardTitle: 'Wisconsin Democratic election official: Don\'t water Trump\'s plant of felony',
  cardContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  cardColor: 'black'
}, {
  cardTitle: 'Wisconsin Democratic election official: Don\'t water Trump\'s plant of felony',
  cardContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  cardColor: 'red'
}, {
  cardTitle: 'Wisconsin Democratic election official: Don\'t water Trump\'s plant of felony',
  cardContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  cardColor: 'green'
}];

export default function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(cards)
    }, 2000)
  })
}