import { Label, Input } from './Filter.styled';
import { setFilterValue } from '../../redux/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/Selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const filterInputHandler = event => {
    const inputValue = event.target.value;
    dispatch(setFilterValue(inputValue));
  };

  return (
    <div>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={filterInputHandler}
        title="Search field"
        required
      />
    </div>
  );
};

