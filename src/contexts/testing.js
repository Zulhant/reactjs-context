import React, { createContext, useState, useEffect } from "react"
import { withRouter } from "react-router-dom"

// import {  withRouter } from  "react-router-dom"


export const testingContext = createContext()



const  TestingContextCotainer = (props) => {

    const [count, setCount] = useState(0)

    const [name, setName] = useState("")

    const [age, setAge] = useState(0)

    const [list, setList] = useState([
        {
            name: "ahmad",
            age : 20
        },
        {
            name: "Saipul",
            age : 20
        }
    ])

    const saveForm = () => {
      let newList = list.concat({
          name,
          age
      })
      setList(newList)
      setName("")
      setAge("")

      props.history.push("/")
    }


    const getListById = (id) => {
        let newList = list.filter((item, i) => i==id)
        setName(newList[0].name)
        setAge(newList[0].age)
    }

    const clearForm = () => {
        setName("")
        setAge("")
    }

    
    return (
        <testingContext.Provider value={{
            count,
            setCount,
            list,
            setList,
            name,
            setName,
            age,
            setAge,
            saveForm,
            getListById,
            clearForm
        }}>
                {props.children}
        </testingContext.Provider>
    )

}


export default withRouter(TestingContextCotainer)