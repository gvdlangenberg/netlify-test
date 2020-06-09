import { FC } from 'react';
import Link from 'next/link';

const Navigation: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/todo"><a>Todos</a></Link>
                </li>
                <li>
                    <Link href="/blog"><a>Blog</a></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
