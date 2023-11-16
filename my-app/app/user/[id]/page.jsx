import Link from "next/link";

async function getUser(id) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json()
    return data;
}

async function UserPage({ params }) {
    const id = params.id
    const user = await getUser(id)

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15rem" }}>
            <div style={{ width: "450px", height: "350px", backgroundColor: "white", borderRadius: "13px", padding: 10 }}>
                <h1 style={{ color: "black" }}>Información de:</h1>

                <div style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                }}>

                    <h4 style={{ color: "black", marginTop: "25px" }}>
                        Nombre : {user.name}
                    </h4>

                    <img src={user.image}
                        style={{ borderRadius: "50%", width: "120px", height: "120px" }} />
                </div>
                <h4 style={{ color: "black", }}>
                    Estado : {user.status}
                </h4>
                <h4 style={{ color: "black", marginTop: "10px" }}>
                    Locación : {user.species}
                </h4>

                <h4 style={{ color: "black", marginTop: "10px" }}>
                    Especie : {user.location.name}
                </h4>


                <Link href='/' style={{ color: "black" }}> Atras </Link>

            </div>
        </div >
    )
}

export default UserPage