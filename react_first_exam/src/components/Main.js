import '../style/Main.css';
import Card from './Card';

const title =
  'Dolore nostrud et ut ut ex anim exercitation sunt sit excepteur commodo.';

const content =
  'Do proident fugiat voluptate est consectetur. Proident excepteur cupidatat enim aliquip pariatur elit culpa esse. Duis magna magna elit commodo eiusmod do aliquip nulla deserunt. Exercitation occaecat adipisicing culpa duis consectetur. Tempor voluptate non excepteur elit. Officia culpa esse sunt nulla id non ullamco. Sit eu reprehenderit veniam quis veniam.';

const colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'pink',
  'lightblue',
  'coral',
  'lightgreen',
];

export default function Main() {
  return (
    <div className='main'>
      {colors.map((color, idx) => (
        <Card
          key={idx}
          color={color}
          title={title}
          content={content}
          idx={idx}
        />
      ))}
    </div>
  );
}
