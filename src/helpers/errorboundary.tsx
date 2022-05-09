import React from "react";
import styles from '../App.module.css';

type ErrorHandler = (error: Error, info: React.ErrorInfo) => void;
type ErrorHandlingComponent<Props> = (props: Props, error?: Error) => React.ReactNode;

type ErrorState = { error?: Error };

function Catch<Props extends unknown>(
  component: ErrorHandlingComponent<Props>,
  errorHandler?: ErrorHandler
): React.ComponentType<Props> {
  return class extends React.Component<Props, ErrorState> {
    state: ErrorState = {
      error: undefined,
    };

    static getDerivedStateFromError(error: Error) {
      return { error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
      if (errorHandler) {
        errorHandler(error, info);
      }
    }

    render() {
      return component(this.props, this.state.error);
    }
  };
}

type Props = {
  children: React.ReactNode;
};

export const ErrorBoundaryFunc = Catch(function MyErrorBoundary(props: Props, error?: Error) {
  if (error) {
    return <div className={styles.errorWrapper}>{error.message}</div>;
  } else {
    return <>{props.children}</>;
  }
});
