export default function Login() {
    return (
        <>
            <div className='mx-20 mb-16 mt-5 flex h-full flex-col items-center justify-center rounded-3xl bg-transparent shadow-2xl backdrop-blur-3xl'>
                <div className='flex w-full justify-center text-6xl font-extrabold text-white'>
                    Login
                </div>
                <div className='mt-6 flex w-1/4 flex-col'>
                    <div className='flex items-center'>
                        <label className='my-2 text-xl font-semibold text-white'>
                            이름
                        </label>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={2}
                            stroke='currentColor'
                            className='text text-cy text-amber-50000 ml-2 h-6 w-6 text-yellow-200'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
                            />
                        </svg>
                    </div>
                    <input
                        type='text'
                        placeholder='홍길동'
                        className='h-12 rounded-xl border-2 border-white bg-white/30 pl-3 text-xl text-white placeholder:pl-0 placeholder:text-xl placeholder:font-normal placeholder:text-white'
                    />
                </div>
                <div className='my-4 flex w-1/4 flex-col'>
                    <label className='my-2 text-xl font-semibold text-white'>
                        이름
                    </label>
                    <input
                        type='text'
                        className='h-12 rounded-xl border-2 border-white bg-slate-400 outline-2'
                    />
                </div>
                <button className='mt-10 h-10 w-1/4 rounded-xl bg-white hover:-translate-y-1'>
                    sdfsd
                </button>
                <button className='... transform transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'>
                    Hover me
                </button>
                <div className='bg-slate-400 bg-violet-50 font-black'>asdf</div>
                <div className='flex flex-col items-center justify-center font-medium'></div>
            </div>
        </>
    )
}
