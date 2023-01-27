import { useState } from 'react'
const Forms = () => {
    
    const [userInput, setUserInput] = useState({ name: "", department: "", rating: "" })

    const [newUserInput, setnewUserInput] = useState([])

    let { name, department, rating } = userInput

    const handleOnChange = (event) => {
        let { name, value } = event.target
        setUserInput({ ...userInput, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setnewUserInput([...newUserInput, {name, department, rating}])
        console.log(newUserInput)
        setUserInput({ name: "", department: "", rating: "" })
        console.log(userInput)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>Name
                    <input
                        type="text"
                        value={userInput.name}
                        placeholder="Type name"
                        name="name"
                        onChange={handleOnChange}
                        autoComplete ="off"/>
                </label><br />


                <label>Department
                    <input
                        type="text"
                        name="department"
                        value={userInput.department}
                        placeholder="Type department"
                        onChange={handleOnChange}
                        autoComplete ="off"
                    />
                </label><br />


                <label>Rating
                    <input
                        type="number"
                        name="rating"
                        value={userInput.rating}
                        placeholder="Type rating"
                        onChange={handleOnChange}
                        autoComplete ="off"
                    />
                </label><br />


                <input type="submit" value="submit" />

            </form>
 
            <div id="display"> {
                 newUserInput.map((info, ind) => {
                    console.log(info)
                    console.log(ind)
                    // const[name,department,rating] =  info
                    
                    return (
                        <div key={ind} className="output">
                            <p >Name:{info.name} | Department : {info.department} | Rating : {info.rating}</p>
                        </div>
                    )
        
                })

            }
            </div>

        </>)
}
export default Forms


