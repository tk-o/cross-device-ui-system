import * as React from "react";
import { Button as RnButton } from 'react-native';

export function Button({ onClick, children }) {
  if (typeof children !== 'string') {
    throw Error('Children prop must be of a string type')
  }

  return <RnButton onPress={onClick} title={children} />;
}
