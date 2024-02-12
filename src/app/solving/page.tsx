"use client";

import SelectBox from "@/app/components/SelectBox";
import QuizText from "@/app/components/QuizText";

export default function Home() {
    return (
        <>
            <div className='flex h-full flex-col items-center justify-center lg:w-[30rem]'>
                <div className='mt-6 flex w-full justify-center'>
                    <QuizText difficulty={1}>
                        이중 내가 가장 좋아하는 걸그룹은?
                    </QuizText>
                </div>
                <div className='flex h-full w-full snap-x overflow-x-scroll p-5'>
                    <SelectBox
                        name='NewJeans'
                        background="bg-[url('/NewJeans.jpg')]"
                    />
                    <SelectBox
                        name='LE SSERAFIM'
                        background="bg-[url('/PerfectNight.webp')]"
                    />
                    <SelectBox name='Red Velvet' />
                    <SelectBox name='TWICE' />
                    <SelectBox />
                </div>
                <div className='h-28 w-11/12 pt-3'>
                    <div className='flex h-3 w-full rounded-full bg-white'>
                        <div className='w-[50%] rounded-l-full bg-amber-300'></div>
                    </div>
                    <div className='mb-6 mt-3 text-center text-white'>
                        10/20
                    </div>
                </div>
            </div>
        </>
    );
}
