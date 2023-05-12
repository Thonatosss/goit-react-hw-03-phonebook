import styled from '@emotion/styled';
import { Field } from 'formik';

const PhonebookWrapper = styled.div`
  display: flex;
  justify-content: centr;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const FilterButton = styled.button`
  padding: 10px;
  margin-top: 15px;
`;

const FormInput = styled(Field)`
  padding: 10px;
`;
const FilterInput = styled.input`
  padding: 10px;
`;
export { PhonebookWrapper, FormLabel, FilterButton, FormInput, FilterInput };
