import { FC } from 'react';
import { Button as BaseButton, ButtonProps } from '@chakra-ui/react';

export type IButton = ButtonProps;

const Button: FC<IButton> = ({ ...rest }) => {
  return (
    <div>
      <BaseButton {...rest} />
    </div>
  );
};

export default Button;
