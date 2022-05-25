import React, { useCallback } from 'react';
import { FormProvider, useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { DEFAULT_FORM_CONFIG } from "./constants";

type Props = {
  children: JSX.Element | string;
  config?: UseFormProps;
  formMethods?: UseFormReturn;
  onSubmit?: (fields?: Record<string, any>, methods?: Record<string, any>) => void;
  [key: string]: any;
};

const Form: React.FC<Props> = ({
  children,
  config = {},
  formMethods,
  onSubmit = () => {},
  ...rest
}) => {
  const methods: UseFormReturn = useForm<UseFormProps>({...DEFAULT_FORM_CONFIG as UseFormProps, ...config});
  const formProviderMethods = formMethods ? formMethods : methods;
  const { handleSubmit } = methods;
  const submit = useCallback((fields: Record<string, any>, methods: any) => onSubmit(fields, methods), [
    onSubmit,
    methods
  ]);

  return (
    <FormProvider {...formProviderMethods}>
      <form onSubmit={handleSubmit(submit)} {...rest}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
