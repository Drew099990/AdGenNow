"use client"
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react'
const Workspace = ({children}) => {

const newUserMutation = useMutation(api.users.newUser)
const {user} = useUser()



const createUser = async() => {
    const result = await newUserMutation({
        name:user?.fullName(),
        email:user?.primaryEmailAddress?.emailAddress(),
        picture:user?.imageUrl(),
    

    });

}
useEffect(user&&createUser(),[user])


    

  


  return (
    <Workspace>{children}</Workspace>
  ) 
}

export default Workspace