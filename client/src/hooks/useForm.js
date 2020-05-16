// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

export const useForm = (initialState, key, submitLogic) => {
  const [values, setValues] = useLocalStorage(initialState, key);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = () => {
    setValues(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogic();
  };

  return [values, handleChanges, clearForm, handleSubmit];
};