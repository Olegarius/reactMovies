import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  isOnChangeValidation?: boolean;
  name: string;
};
const useOnChangeValidate = ({ name, isOnChangeValidation }: Props) => {
  const methods = useFormContext();
  const { watch, trigger } = methods;
  const fieldValue = watch(name);

  useEffect(() => {
    if (isOnChangeValidation && fieldValue) {
      (async () => await trigger([name]))();
    }
  }, [fieldValue, isOnChangeValidation]);
};

export default useOnChangeValidate;
