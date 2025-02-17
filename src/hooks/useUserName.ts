import useInput from './useInput';
import CONDITION from '../constants/Condition';

const { REG_EXP, lastNameAndFirstName } = CONDITION;

const useUserName = (defaultValue: string) => {
  const changeUpperCase = (value: string) => value.toUpperCase();

  const {
    value: userName,
    onChange: onChangeUserName,
    isError: isUserNameError,
    clear: resetUserName,
  } = useInput<string>(defaultValue, REG_EXP.userName, lastNameAndFirstName, changeUpperCase);

  return {
    userNameState: userName,
    onChangeUserName,
    isUserNameError,
    resetUserName,
  };
};

export default useUserName;
