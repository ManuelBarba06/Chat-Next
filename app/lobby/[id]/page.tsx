import { Button, Input } from "@nextui-org/react"
import {IoIosSend} from 'react-icons/io'
import Message from "./_components/Message"

const page = () => {
  return (
    <div className="w-full h-screen">
        <div className="w-full h-[93%] p-5 flex flex-col-reverse items-end">
            <Message/>
            <Message/>
            <Message/>
        </div>
        <div className="flex flex-row items-center p-1 bg-secondaryColor">
            <Input variant="faded" color="default"/>
            <Button className="rounded-full ml-2 bg-primaryColor" isIconOnly>
                <IoIosSend
                    className="text-xl text-white"
                />
            </Button>
        </div>
    </div>
  )
}

export default page