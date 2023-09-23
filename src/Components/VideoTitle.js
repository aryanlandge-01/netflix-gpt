

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[25%]  px-24 absolute text-white bg-gradient-to-r from-black" >
            <h1 className="text-6xl font-bold" > {title} </h1>
            <p className="py-6 text-lg w-2/4" > {overview} </p>
            <div  >
                <button className="px-8 py-3 text-lg font-bold  bg-white text-black rounded-xl mr-2  hover:bg-opacity-80" >▶️ Play</button>
                <button className="px-8 py-3 text-lg font-bold  bg-gray-400 text-white rounded-xl ml-2 bg-opacity-75"   >ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle