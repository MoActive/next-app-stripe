import Link from 'next/link'

const Navigation = () => {
    return (
        <div>
            <ul>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </ul>
        </div>
     );
}

export default Navigation;