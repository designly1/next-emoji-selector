import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import GitHubButton from './GitHubButton';

import logo from '@/svg/designly-logo-white.svg'

const LOGO_WIDTH = 300;
const ASPECT_RATIO = 175 / 500;

export default function Header() {
    const logoDims = {
        width: LOGO_WIDTH,
        height: LOGO_WIDTH * ASPECT_RATIO
    };

    return (
        <div className="bg-slate-800">
            <GitHubButton />
            <Link href="https://blog.designly.biz" target='_blank' rel='noopener noreferrer'>
                <Image src={logo} width={logoDims.width} height={logoDims.height} alt="Designly" />
            </Link>
        </div>
    )
}
