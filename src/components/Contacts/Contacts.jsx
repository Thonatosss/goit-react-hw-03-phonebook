import { DeleteButton } from "./Contacts.styled";
import PropTypes from 'prop-types';
const Contacts = ({ data, deleteContact }) => {
  return (
    <div>
      <ul>
        {data.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name} : {number}
              <DeleteButton type="button" onClick={()=>(deleteContact(id))}>Delete Contact</DeleteButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export { Contacts };
