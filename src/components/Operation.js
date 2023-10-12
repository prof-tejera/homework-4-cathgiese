import './Operation.css'

const Operation = ({ value, handleOperationClick }) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? */
  return (
    <div
      onClick={() => {
        handleOperationClick(value);
      }}
      className='op-buttons'
    >
      {value}
    </div>
  );
};

export default Operation;
