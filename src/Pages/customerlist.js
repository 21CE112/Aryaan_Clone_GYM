import React, { useEffect, useState } from "react";
import NavbarAd from "../components/adminnavbar";
import MUIDataTable from 'mui-datatables';


const List1 = ()=>{
    useEffect(()=>{
        data(); 
    },[])
    const [item,setItem] = useState([])
    const data =async ()=>{
        let result = await fetch("http://localhost:8000/register",{
            method:'post',
            body:JSON.stringify({}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json()
        let data = []
        result.map((it)=>{
            data.push([it.username,it.email,it.MobileNO,it.Gender,it.startDate,it.endDate])
        })
        console.log(data)
        setItem(data);
    }
    const columns = [
        {
          name: 'Username',
          options: {
            filter: true
          }
        },
        {
            name:'Email',
            options: {
                filter: true
              }
        },
        {
            name:'Mobile Number',
            options: {
                filter: true
              }
        },
        {
            name:'Gender',
            options: {
                filter: true
              }
        },
        {
            name:'startDate',
            options: {
                filter: true
              }
        },
        {
            name:'endDate',
            options: {
                filter: true
              }
        }
    ]    
    return(<>
            {/* <NavbarAd/>  */}
            <MUIDataTable
            title="Customer List"
            columns={columns}
            data={item}
            >

            </MUIDataTable>
                    
        
</>

    ) 


    

}
export default List1;

