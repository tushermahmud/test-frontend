import Image from 'next/image';

type Props = {
  url: string;
  altText: string;
  classname?: string;
};

const Images = ({ url, classname, altText }: Props) => {
  return (
    <Image
      src={`${url}`}
      className={classname}
      width={100}
      height={100}
      sizes="100vw"
      objectFit="contain"
      style={{ width: '100%', height: '100%' }}
      alt={altText}
    />
  );
};

export default Images;
