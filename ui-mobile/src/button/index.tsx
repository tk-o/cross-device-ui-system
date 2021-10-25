import * as React from "react";
import { Button as RnButton } from 'react-native';

export function Button({ onClick, children }) {
  return <RnButton on={onClick}>{children}</button>;
}
