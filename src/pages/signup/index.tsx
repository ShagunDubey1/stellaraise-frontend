import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function __signup() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className=" w-full relative flex justify-center items-center h-full">
      <div className=' px-4'>
        <h3 className=" uppercase text-lg font-medium">Join for free</h3>
        <h2 className=' text-3xl font-semibold'>
          Empower NGOs and NPOs <br /> in Web 3.0 with our cutting-edge <br />
          <span>crowdfunding donation app!</span>
        </h2>
      </div>

      <div>
        <h2 className=" text-5xl font-semibold mb-6">
          Create <br /> new account<span className=" text-primary">.</span>
        </h2>

        <form action="" className=" w-full flex flex-col justify-center gap-4">
          <div className=" w-full flex items-center justify-center gap-4">
            <Input
              type="text"
              label="First Name"
              variant="bordered"
              radius="lg"
              color="primary"
              classNames={{
                innerWrapper: ['px-2'],
                label: ['px-2', 'text-default-400'],
              }}
              endContent={
                <FaUser className="text-xl self-center text-default-400 pointer-events-none " />
              }
            />
            <Input
              type="text"
              label="Last Name"
              variant="bordered"
              radius="lg"
              color="primary"
              classNames={{
                innerWrapper: ['px-2'],
                label: ['px-2', 'text-default-400'],
              }}
              endContent={
                <FaUser className="text-xl self-center text-default-400 pointer-events-none " />
              }
            />
          </div>
          <Input
            type="text"
            label="Email"
            variant="bordered"
            radius="lg"
            color="primary"
            classNames={{
              innerWrapper: ['px-2'],
              label: ['px-2', 'text-default-400'],
            }}
            endContent={
              <MdEmail className="text-2xl self-center text-default-400 pointer-events-none " />
            }
          />
          <Input
            label="First Name"
            variant="bordered"
            radius="lg"
            color="primary"
            classNames={{
              innerWrapper: ['px-2'],
              label: ['px-2', 'text-default-400'],
            }}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <IoEye className="text-2xl text-default-400 pointer-events-none self-center" />
                ) : (
                  <IoEyeOff className="text-2xl text-default-400 pointer-events-none self-center" />
                )}
              </button>
            }
            type={isVisible ? 'text' : 'password'}
          />

          <p className=" font-bold text-white self-end">
            Already a Member?{' '}
            <Link to={'/login'} className=" text-primary">
              Log in
            </Link>
          </p>

          <Button
            color="primary"
            variant="shadow"
            size="lg"
            className=" text-base font-semibold mt-4"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  )
}
