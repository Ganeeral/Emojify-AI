import React from 'react'
import Image from 'next/image'
import { LoadIcon } from '@/ui/icons'

const ResultSection = () => {
  return (
    <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col gap-y-6">
            <Image src="/face.webp" height={401} width={401} alt=''></Image>
            <div className="flex justify-center items-center gap-x-3">
                <span className='px-14 py-4 bg-[#1A1A1A] rounded-xl text-2xl text-[#BEBEBE] Inter font-bold'>Смех</span>
                <div className="px-6 py-6 rounded-xl bg-[#1A1A1A] cursor-pointer">
                    <LoadIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResultSection