'use client';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
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

const Grid = ({ children, justifyContent = 'justify-center', alignItems = 'items-start', classname }: Props) => {
  return <div className={`grid ${justifyContent} ${alignItems} ${classname}`}>{children}</div>;
};

export default Grid;
