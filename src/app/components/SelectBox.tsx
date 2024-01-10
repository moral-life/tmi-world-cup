export default function SelectBox() {
    return (
        <div className='m-3 flex w-11/12 flex-none snap-center items-center justify-center'>
            <div className='flex h-full w-full rounded-3xl bg-purple-500 bg-cover shadow-2xl'>
                <input type='checkbox' />
                <div className='flex flex-col-reverse p-6 text-5xl font-bold text-white'>
                    NewJeans
                </div>
            </div>
        </div>
    );
}
