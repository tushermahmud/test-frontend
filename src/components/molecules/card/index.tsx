import React, { ReactNode } from 'react';
import Flex from '@/components/templates/flex';
type Props = {
  children: ReactNode;
  classname?: string;
};

const Card = ({ children, classname }: Props) => {
  return (
    <Flex direction="flex-row" justifyContent="justify-center" alignItems="items-start" classname={`${classname}`}>
      {children}
    </Flex>
  );
};

export default Card;
