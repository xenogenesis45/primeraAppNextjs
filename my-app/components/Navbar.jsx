import Link from 'next/link'

function Navbar() {
    return (
        <nav style={{
            background: "#2E94B9", marginBottom: "10rem", display: "flex",
            justifyContent: "space-between", height: 50,
            alignItems: "center",
            padding: 10,
            position: "fixed",
            width: "100%"
        }}>
            <Link href="/">
                Home
            </Link>

            <ul>
                <li>
                    <Link href="/about">
                        about asdasdas
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar