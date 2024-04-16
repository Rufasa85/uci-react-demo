import Joe from "./components/Joe"

function App() {
const people=[
  {
    id:1,
    name:"Joe",
    color:"#bada55"
  },
  {
    id:2,
    name:"Bahamut",
    color:"orange"
  },
  {
    id:3,
    name:"Eric",
    color:"honeydew"
  },
  {
    id:4,
    name:"David",
    color:"goldenrod"
  }
]
  return (
    <>
      <h1>Hello {Math.floor(Math.random()*10)}</h1>
      <h2>World</h2>
     {people.map(person=><Joe key={person.id} name={person.name} color={person.color}/>)}
    </>
  )
}

export default App
