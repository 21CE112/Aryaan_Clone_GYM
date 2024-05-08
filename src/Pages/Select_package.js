import React, { useState } from 'react';
import { packages } from '../data'; // Import your data file
//import './SelectPackage.css'; // Import your CSS file if needed
import {Toaster,toast} from 'react-hot-toast'
const SelectPackage = () => {
  const [selectedPackage, setSelectedPackage] = useState({});
  let index = 0;

  const getId = () => {
    index = index + 1;
    console.log(index);
    return index;
  };

  const checkoutHandler = async (packageId, amount,time) => {
    console.log(time)
    if (selectedPackage[packageId] === 'without') {
      console.log(`Buying Without Personal Trainer. Amount:`, amount);
    } else if (selectedPackage[packageId] === 'with') {
      console.log(`Buying With Personal Trainer. Amount:`, amount);
    } else {
      console.log('Please select a package');
      return toast.error("Please select a package"); // Don't proceed with payment if no package is selected
    }

    try {
      let userId = localStorage.getItem('user')
      let ti = {
        "1 month":1,
        "3 month":3,
        "6 month":6,
        "1 year":12
      }
      userId = JSON.parse(userId)
      console.log(userId)
      let startDate = `${new Date().getDate()}/${(new Date().getMonth()+1)%12}/${new Date().getFullYear()}`
      // startDate = startDate.toString()
      console.log("StartDate is ",typeof(startDate))
      let obj = {
        userId:userId.result,
      }
      // Make a POST request to your server to initiate the payment
      const response = await fetch('http://localhost:8000/checkout', {
        method: 'POST',
        body: JSON.stringify({ amount: amount
           ,_id:userId.result}),
        headers: {
          'Content-Type': 'application/json',
        }
      });
        const data = await response.json();
        console.log("Status is ",data.success)
          // Payment initiation successful, open Razorpay checkout
          if(data.success)
          {
            console.log("Status is ",data.success)
          }
          console.log("Data is ",data.order.id)
          const options = {
            key: 'rzp_test_UbPmU5malWnsEz', 
            amount: data.order.amount, 
            currency: "INR",
            name: 'Gym Management System',
            description: 'Test Transaction',
            order_id: data.order.id, 
            callback_url: `http://localhost:8000/paymentverification/${JSON.stringify(obj)}/${JSON.stringify(ti[time])}`,
            prefill: {
              name: 'Gaurav Kumar',
              email: 'gaurav.kumar@example.com',
              contact: '9000090000',
            },
            theme: {
              color: '#3399cc',
            },
          };

          const razorpay = new window.Razorpay(options);
          razorpay.open();
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <div className="py-24 space-y-12 font-oswald tracking-wider">
    <Toaster></Toaster>
      {packages.map((ind) => (
        <div key={ind.id} className="w-[40%] p-8 m-auto text-grey-40 bg-[#3f3f3f] drop-shadow-xl">
          <div className="text-3xl uppercase text-orange-400">{ind.title}</div>
          <div className="flex space-x-40 mt-5 justify-between">
            <div className="pt-1">Without personal trainer</div>
            <div>
              <span className="text-xl text-orange-400">₹{ind.price1}</span> /{ind.time}
              <input
                key={ind.id}
                type="radio"
                name={`package-${ind.id}`}
                checked={selectedPackage[ind.id] === 'without'}
                onChange={() => {setSelectedPackage({ ...selectedPackage, [ind.id]: 'without' })
                }}
              />
            </div>
          </div>
          <div className="flex space-x-40 mt-2 justify-between">
            <div>Personal trainer</div>
            <div>
              <span className="text-xl text-orange-400">₹{ind.price2}</span> /{ind.time}
              <input
                key={ind.id}
                type="radio"
                name={`package-${ind.id}`}
                checked={selectedPackage[ind.id] === 'with'}
                onChange={() => setSelectedPackage({ ...selectedPackage, [ind.id]: 'with' })}
              />
            </div>
          </div>
          <button
            className="bg-orange-400 p-2 mt-4 w-28 ml-auto rounded-sm text-xl text-center uppercase"
            onClick={() => {
              checkoutHandler(ind.id, selectedPackage[ind.id] === 'without' ? ind.price1 : ind.price2,ind.time);
            }}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectPackage;
