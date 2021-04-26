import React, { useEffect, useState } from 'react'
import { TableItem } from './common'
import './index.css'
import axios from 'axios'


export default function GetData() {

    const [data, setData] = useState([]);
    const [idascSort, setIdascSort] = useState(true)
    const [fnameascSort, setFnameascSort] = useState(false)
    const [lnameascSort, setLnameascSort] = useState(false)
    const [emailascSort, setEmailascSort] = useState(false)
    const [idSort, setIdSort] = useState(false)
    const [fnameSort, setFnameSort] = useState(false)
    const [lnameSort, setLnameSort] = useState(false)
    const [emailSort, setEmailSort] = useState(false)
    const [asc, setAsc] = useState(false)
    const [desc, setDesc] = useState(true)

    useEffect(() => {
        console.log("running useeffect sort")
        if(idascSort == true) {
            let newData = [...data].sort((a, b) => (a.id > b.id ? 1 : -1))
            setData(newData)
        }else if(idSort == true) {
            let newData = [...data].sort((a, b) => (a.id < b.id ? 1 : -1))
            setData(newData)
        }else if(fnameascSort == true) {
            let newData = [...data].sort((a, b) => (a.first_name > b.first_name ? 1 : -1))
            setData(newData)
        }else if(fnameSort == true) {
            let newData = [...data].sort((a, b) => (a.first_name < b.first_name ? 1 : -1))
            setData(newData)
        }else if(lnameascSort == true) {
            let newData = [...data].sort((a, b) => (a.last_name > b.last_name ? 1 : -1))
            setData(newData)
        }else if(lnameSort == true) {
            let newData = [...data].sort((a, b) => (a.last_name < b.last_name ? 1 : -1))
            setData(newData)
        }else if(emailascSort == true) {
            let newData = [...data].sort((a, b) => (a.email > b.email ? 1 : -1))
            setData(newData)
        }else if(emailSort == true) {
            let newData = [...data].sort((a, b) => (a.email < b.email ? 1 : -1))
            setData(newData)
        }
    }, [idSort, fnameSort, lnameSort, emailSort, idascSort, fnameascSort, lnameascSort, emailascSort])


    useEffect(() => {
        console.log("change in the data")
        console.log(data)
    }, [data])

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=1").then(res => {
            setData(res.data.data)
        })
    }, [])

     const userIdSort = () => {
        setIdSort(!desc)
        setIdascSort(!asc)
        setEmailSort(false)
        setEmailascSort(false)
        setFnameSort(false)
        setFnameascSort(false)
        setLnameSort(false)
        setLnameascSort(false)
        setAsc(!asc)
        setDesc(!desc)
     }

    const userEmailSort = () => {
       setIdSort(false)
       setIdascSort(false)
       setEmailSort(!asc)
       setEmailascSort(!desc)
       setFnameSort(false)
       setFnameascSort(false)
       setLnameSort(false)
       setLnameascSort(false)
       setAsc(!asc)
        setDesc(!desc)
    }

    const userFnameSort = () => {
        setIdSort(false)
        setIdascSort(false)
        setEmailSort(false)
        setEmailascSort(false)
        setFnameSort(!asc)
        setFnameascSort(!desc)
        setLnameSort(false)
        setLnameascSort(false)
        setAsc(!asc)
        setDesc(!desc)
     }

     const userLnameSort = () => {
        setIdSort(false)
        setIdascSort(false)
        setEmailSort(false)
        setEmailascSort(false)
        setFnameSort(false)
        setFnameascSort(false)
        setLnameSort(!asc)
        setLnameascSort(!desc)
        setAsc(!asc)
        setDesc(!desc)
     }
    return (
        <div>
            <h1>Here we are rendering random users</h1>
            <div className="user_row" style={{backgroundColor: 'black', color:"white"}}>
                <div className="user_avtar" style={{cursor: 'pointer'}}>
                   Avtar
                </div>
                <div className="user_id" style={{cursor: 'pointer'}} onClick={userIdSort}>
                    ID
                </div>
                <div className="user_fname" style={{cursor: 'pointer'}} onClick={userFnameSort}>
                    First Name
                </div>
                <div className="user_lname" style={{cursor: 'pointer'}} onClick={userLnameSort}>
                    Last Name 
                </div>
                <div className="user_email" style={{cursor: 'pointer'}} onClick={userEmailSort}>
                    Email
                </div>
            </div>
            {
                data.map(item => <TableItem key={item.id} avtar={item.avatar} id={item.id} fname={item.first_name} lname={item.last_name} email={item.email} />)
            }
            {/* <TableItem avtar="https://reqres.in/img/faces/7-image.jpg" id="3" fname="Veronica" lname="Parker" email="veronicaparker@gmail.com" /> */}
        </div>
    )
}
