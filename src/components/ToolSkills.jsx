const Tool = ({nombre}) => {
    return (
        <>
            <div className="text-white font-light border-2 border-white rounded-full py-2 px-4 hover:bg-picton-blue hover:text-dark hover:border-none hover:font-bold">
                {nombre}
            </div>
        </>
    )
}

export default Tool