import React, { FC, ReactNode } from "react";
import { Alert } from "@chakra-ui/react";

type AlertProps = {
  title: string;
  description: string | ReactNode;
};

const AlertError: FC<AlertProps> = ({ title, description }) => {
  return (
    <Alert.Root status="error">
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>{title}</Alert.Title>
        <Alert.Description>{description}</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  );
};

export default AlertError;
