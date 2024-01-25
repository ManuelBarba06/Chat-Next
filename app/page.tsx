'use client'

import Image from 'next/image'
import { Button, Input, Link } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function Home() {
  
  const router = useRouter()
  
  const onClick = () => {
    router.push('/lobby')
  }
  
  return (
    <main className="flex min-h-screen flex-row items-center justify-center h-screen bg-gradient-to-b from-primaryColor">
      <div className='w-1/4 h-4/5 rounded-xl shadow-xl bg-background flex items-center flex-col p-10'>
          <div className=' bg-gradient-to-t from-availableColor w-2/5 h-1/4 justify-center flex items-center rounded-r-lg mt-10'>
            <Image
              alt='User image'
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              className='w-11/12 h-[90%] rounded-r-lg'
              width={0}
              height={0}
            />
          </div>
          <h1 className='text-primaryColor font-bold text-lg my-5'>Sign In</h1>
          <br/>
          <Input type= "email" label="Email"/>
          <br/>
          <Input type="password" label="Password"/>
          <br/>
          <Button color='primary' className='w-1/2' onClick={onClick}>
            Sign In
          </Button>
          <br/>
          <Link href='/signup' className='cursor-pointer'>
            You dont have an account? Sign in
          </Link>
        </div>
    </main>
  )
}
