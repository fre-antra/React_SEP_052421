import '../style/TodoItem.css';

function TodoItem(props) {
  const { title, id } = props.item;
  // console.log('item render!!');
  return (
    <li className='item'>
      <span className='item-title'>{title}</span>
      <button
        className='item-btn'
        id={id}
        onClick={() => props.handleClick(id)}
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
