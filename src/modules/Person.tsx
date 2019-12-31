import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"

interface personProps
  extends RouteComponentProps<{
    id: number
  }> {}

const personComponent: React.FC<personProps> = ({ id = 1 }) => {
  const [person, setPerson] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchPerson(id)
    }, 50)
    return () => clearTimeout(timeOut)
  }, [id])

  const fetchPerson = async (id: number) => {
    setLoading(true)
    try {
      const fetchingPerson = await fetch(
        `https://randomuser.me/api?results=${id}`
      )
      const responsePerson = await fetchingPerson.json()
      const resultPerson = await responsePerson
      setLoading(false)
      setPerson(resultPerson)
      return resultPerson
    } catch (error) {
      setLoading(false)
      console.log(error.message, "error")
    }
  }

  return (
    <div>
      <pre>{loading ? "loading..." : JSON.stringify(person, null, 2)}</pre>
    </div>
  )
}

export default personComponent
