import './ItemBox.css';

function ItemBox(props) {
  return (
    <div className="ItemBox">
      <div className='title'>{props.Title}</div>
      <div className='area'>{props.Area}</div>
      <div className='description'>{props.Description}</div>
    </div>
  );
}

export default ItemBox;