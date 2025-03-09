import Link from "next/link";

export default function MainCard() {
    return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/fitness.jpg')" }}>
        <div className="flex items-center h-full text-left text-white pl-10">
            <div className="flex flex-col">
                <h1 className="text-[50px] font-bold">SHAPE IT UP!</h1>
                <h1 className="text-[50px] font-bold">GET FIT DON´T QUIT</h1>
                <p className="text-lg mt-4">Regardless of your goal, we are here to guide you and help you achieve it</p>
                <Link href="#routine-form" scroll={true}>
                    <button className="bg-[#ebb72d] text-black rounded-[20px] font-medium px-4 py-2 mt-4" >
                        Customize your routine
                    </button>
                </Link>
            </div>
        </div>
    </div>
    );
}