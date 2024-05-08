import React, { useEffect, useState } from "react";
import NavbarAd from "../components/adminnavbar";
import MUIDataTable from 'mui-datatables';
import { useNavigate } from "react-router-dom";

const List1 = ()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        try{
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        if(!(user && user.result.role==='Admin'))
        {
            navigate('/')
        }
        data(); 
    }
    catch(e)
    {
        navigate('/')
    }
    },[])
    const [item,setItem] = useState([])
    const data =async ()=>{
        let result = await fetch("http://localhost:8000/getTransactionList",{
            method:'get',
           
        });
        result = await result.json()
        console.log(result)
        let data = []
        result.map((it)=>{
            data.push([it.razorpay_order_id,it.razorpay_payment_id,it.razorpay_signature])
        })
        // console.log(data)
        setItem(data);
    }
    const columns = [
        {
            name:'Order ID',
            options: {
                filter: true
              }
        },
        {
            name:'Transaction ID    ',
            options: {
                filter: true
              }
        },
        {
            name:'Signature',
            options: {
                filter: true
              }
        }
    ]    
    return(<>
            {/* <NavbarAd/>  */}
            <MUIDataTable
            title="Transaction List"
            columns={columns}
            data={item}
            >

            </MUIDataTable>
                    
        
</>

    ) 


    

}
export default List1;

