'use client';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  direction: 'flex-row' | 'flex-col';
  justifyContent?:
    | 'justify-center'
    | 'justify-start'
    | 'justify-end'
    | 'justify-evenly'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly'
    | 'justify-stretch';
  alignItems?: 'items-center' | 'items-start' | 'items-end' | 'items-stretch' | 'items-baseline';
  classname?: string;
};

const Flex = ({
  children,
  direction,
  justifyContent = 'justify-center',
  alignItems = 'items-center',
  classname,
}: Props) => {
  return <div className={`flex ${direction} ${justifyContent} ${alignItems} ${classname}`}>{children}</div>;
};

export default Flex;
