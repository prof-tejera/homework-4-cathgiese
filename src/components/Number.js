import'./Number.css';

const Number = ({ value, handleNumberClick}) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  return (
    <div 
    onClick={() => {
      handleNumberClick(value);
    }}
    className='num-buttons'>
      {value}
    </div>
  );
};

export default Number;
