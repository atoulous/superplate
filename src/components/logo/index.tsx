import { FC } from 'react';
import Image from 'next/image';

const Logo: FC = () => <Image data-test='icon' src='/icons/nextjs-icon.svg' alt='nextjs' width='96' height='58' />;

export default Logo;
