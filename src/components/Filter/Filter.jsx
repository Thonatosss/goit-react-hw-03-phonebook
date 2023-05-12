import PropTypes from 'prop-types';
import { FilterInput } from "components/Form/Form.styled";

const Filter = ({ value, filterChange }) => {
  return (
      <FilterInput type="text" value={value} onChange={filterChange} />
  );
};


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};
export { Filter };
