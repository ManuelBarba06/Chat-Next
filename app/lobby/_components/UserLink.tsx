import Link from 'next/link'
import { Image } from '@nextui-org/react'

const UserLink = () => {
  return (
    <li className='m-2'>
        <Link href={"/"}>
            <div className='flex flex-row'>
              <Image
                 alt='User image'
                 src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                 className='w-20 h-16 rounded-r-lg'
                 width={0}
                 height={0}
              />
              <div className='flex flex-col ml-3 border-b-secondaryColor border-b-1 w-full border-gray-500'>
                <span className='text-sm text-secondaryColor'>Name</span>
                <span className='text-sm text-secondaryColor'>Description</span>
              </div>
            </div>
        </Link>
    </li>
  )
}

export default UserLink