import Flex from '@/components/templates/flex';
import React from 'react';
import Text from '@/components/atoms/typography';
type Props = {
  headerText: string;
  classname?: string;
};

const ProductHeader = ({ headerText, classname }: Props) => {
  return (
    <Flex direction="flex-row" justifyContent="justify-center" alignItems="items-center" classname={classname}>
      <Text classname={'font-bold text-3xl block'} text={headerText} />
    </Flex>
  );
};

export default ProductHeader;
