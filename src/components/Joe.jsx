export default function Joe({name,color}) {
  return (
    <>
        <h3>Username: {name}</h3>
        <h3 style={{
            background:color
        }}>favColor: {color}</h3>
        <hr />
    </>
  )
}
