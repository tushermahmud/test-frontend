import React from 'react';

type Props = {
  text: string;
  classname?: string;
};

const Text = ({ classname, text }: Props) => {
  return <span className={`${classname} text-black`}>{text}</span>;
};

export default Text;
