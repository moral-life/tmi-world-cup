export default function Home() {
    return (
        <>
            <div className='flex h-full flex-col items-center justify-center'>
                <div className='h-1/2  text-center text-white'>
                    <div className='text-2xl font-medium'>
                        제 1회 이민하 TMI고사
                    </div>
                    <div className='my-2 text-xl font-light'>
                        어디 한번 풀어보시지
                    </div>
                    <div className='mt-5'>
                        나는 이민하의 얼마나 <br />
                        쓰잘데기 없는 소리까지 들었을까?
                    </div>
                </div>
                <div className='flex h-1/2 w-full items-center justify-center px-5 '>
                    <button className='h-16 w-full bg-orange-100 shadow-2xl shadow-orange-100/30'>
                        <div className='flex items-center justify-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='currentColor'
                                className='h-6 w-6'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
                                    clipRule='evenodd'
                                />
                            </svg>
                            <p className='ml-5'>시작하기</p>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}
