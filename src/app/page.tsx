import SelectBox from "@/app/components/SelectBox";

export default function Home() {
    return (
        <>
            <div className='flex h-full flex-col items-center justify-center bg-transparent'>
                <div className='flex h-1/2 w-full'>
                    <div className='m-5 w-full rounded-2xl bg-slate-200 p-5'>
                        asdf
                    </div>
                </div>
                <div className='flex h-full w-full snap-x overflow-x-scroll p-5'>
                    <SelectBox />
                    <SelectBox />
                    <SelectBox />
                </div>
                <div className='flex h-1/3 w-full items-center justify-center p-5'>
                    <button className='m-5 h-full w-full rounded-2xl bg-orange-500 text-white active:bg-purple-500'>
                        제출하기
                    </button>
                </div>
            </div>
        </>
    );
}
