interface SelectBoxProps {
    name: string;
    background: string;
}
export default function SelectBox({ name, background }: SelectBoxProps) {
    return (
        <div
            className={`mx-2 flex w-10/12 flex-none snap-center items-center justify-center rounded-3xl bg-cover shadow-xl ${background}`}
        >
            <div className='bg-faded flex h-full  w-full rounded-3xl'>
                <div className='flex flex-col-reverse p-6 text-3xl font-bold text-white'>
                    {name}
                </div>
            </div>
        </div>
    );
}

SelectBox.defaultProps = {
    name: "No name",
    background: "bg-purple-400",
};
