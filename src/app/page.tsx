import Image from 'next/image'
import MultiChoice from "@/app/components/multi_choice";
import Login from "@/app/components/Login";

export default function Home() {
  return (
      <>
          {/*<div className="flex justify-center h-full items-center bg-slate-200 opacity-70 mx-16 mt-5 mb-16 rounded-3xl shadow-2xl">*/}
          {/*    <div className="text-6xl text-gray-600 font-light">무슨 생각 하셨나요?</div>*/}
          {/*</div>*/}
          <Login/>
      </>

  )
}
