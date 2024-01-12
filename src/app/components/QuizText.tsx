import { ReactNode } from "react";

interface QuizTextProps {
    difficulty: number;
    children: ReactNode;
}
export default function QuizText({ difficulty, children }: QuizTextProps) {
    // const difficulty: number = QuizTextProp
    return (
        <div className='mx-7 flex w-11/12 flex-col items-center'>
            <div className='my-2 flex w-full items-center justify-between'>
                <div className='text-4xl font-semibold text-white'>문제 1</div>
                <div className='rounded-full bg-amber-500 px-3 py-0.5 font-medium text-white shadow-lg shadow-amber-500/50'>
                    단답형
                </div>
            </div>
            <div className='my-2 flex w-full items-center justify-start'>
                <div className='flex items-center text-xl font-light text-white'>
                    난이도
                </div>
                <div className='ml-2 flex items-center text-yellow-300'>
                    {Array.from({ length: difficulty }, (_, index) => (
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='h-6 w-6'
                            key={index}
                        >
                            <path
                                fillRule='evenodd'
                                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                                clipRule='evenodd'
                            />
                        </svg>
                    ))}
                </div>
            </div>
            <div className='w-full text-start text-base text-white'>
                {children}
            </div>
        </div>
    );
}

QuizText.defaultProps = {
    difficulty: 0,
    children: "",
};
