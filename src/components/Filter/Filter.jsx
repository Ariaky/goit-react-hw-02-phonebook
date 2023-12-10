export const Filter = ({ filter, onChangeFilter }) => (
    <label>
      Find contacts by name:
      <input type="text" value={filter} onChange={(e) => onChangeFilter(e.target.value)} />
    </label>
  );
  /*
  Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
  };
  */