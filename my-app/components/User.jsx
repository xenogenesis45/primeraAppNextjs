'use client'
import Link from "next/link";

function User({ users }) {
    return (
        <div>

            {users.map(item => (
                <Link key={item.id} href={`/user/${item.id}`}>
                    <div style={{
                        display: "flex", alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <div style={{
                            display: "flex", alignItems: "center",
                            justifyContent: "space-between", width: "550px"
                        }}>
                            <div>
                                <h2>{item.name}</h2 >
                            </div>
                            <div >
                                <img src={item.image}
                                    style={{ borderRadius: "50%", width: "80px", height: "80px" }} />
                            </div>
                        </div>
                    </div>
                </Link>

            ))}
        </div>
    )
}

export default User