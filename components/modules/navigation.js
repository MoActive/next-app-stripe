import Link from 'next/link'

const Navigation = () => {
    return (
        <div>
            <ul>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
                <Link href='/products'>
                    <a>Products</a>
                </Link>
            </ul>
        </div>
     );
}
 
export default Navigation;