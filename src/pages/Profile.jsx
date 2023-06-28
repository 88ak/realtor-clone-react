import React, { useState } from 'react';
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
export default function Profile() {
  const auth = getAuth();
  const Navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const {name, email} = formData;
  function onLogout(){
    auth.signOut();
    Navigate("/");

  }
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  async function onSubmit(){
    try {
      if(auth.currentUser.displayName !== name){
      //update details in firebase authentication 
      await updateProfile(auth.currentUser,{
        displayName: name,
      });
      //update name in firestore
      const docRef = doc(db, "users", auth.currentUser.uid)
      await updateDoc(docRef, {
        name,
      });
    }
    toast.success('profile details updated')
    } catch (error) {
      toast.error("could not update the profile details")
    }
  }
  return (
    <>
    <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'>
        <form>
          {/*Name Input*/}

          <input type="text" id="name" value={name} disabled={!changeDetail}
          onChange={onChange}
           className={`mb-6 w-full px-4 py-2 text-xl text-gary-700 bg-white border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200" }` }/>

          {/*Email Input*/}

          <input type="email" id="email" value={email} disabled
           className='w-full px-4 py-2 text-xl text-gary-700 bg-white border-gray-300 rounded transition ease-in-out mb-6 '/>

          <div className='flex justify-between whitespace-nowrap'>
            <p>Do you want to change your Name? <span onClick={()=>{
              changeDetail && onSubmit()
              setChangeDetail((prevState)=>!prevState)
            }} className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer'>{changeDetail ? "Apply Change" : "Edit"}</span></p>
            <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transtion duration-200 ease-in-out cursor-pointer'>Sign-out</p>
          </div>
        </form>
      </div>
    </section>
    
    </>
  )
}
