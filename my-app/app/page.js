import User from "@/components/User";

async function fechtUser() {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data = await res.json();
  return data.results
}

async function HomePage() {

  const users = await fechtUser();

  return (
    <div >
      {/* {user.map(item => (
        <div key={item.id} style={{
          display: "flex", alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between", width: "550px"
          }}>
            <h2>{item.name}</h2>
            <div >
              <img src={item.image}
                style={{ borderRadius: "50%", width: "80px", height: "80px" }} />
            </div>
          </div>
        </div>
      ))} */} 
      <User users={users} />
    </div>
  )
}

export default HomePage