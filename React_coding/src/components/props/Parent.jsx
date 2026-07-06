import PropsExamples from "./PropsExamples"

const Parent = () => {
    const user = {
        name:"Karan",
        age: 20
    }
  return (
    <div>
        <PropsExamples user={user}  />
    </div>
  )
}

export default Parent