import React, { FC } from "react";

export function withDefaultProps<P = {}>(defaultProps?: Partial<P>) {
  return function (Component: FC) {
    const WrappedComponent: React.FC<P> = (props) => {
      return React.createElement(Component, {
        ...defaultProps!,
        ...props,
      });
    };

    WrappedComponent.displayName = `withDefaultProps(${
      Component.displayName || Component.name || "Component"
    })`;

    return WrappedComponent;
  };
}
