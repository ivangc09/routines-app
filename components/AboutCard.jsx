export default function AboutCard() {
    return(
        <div className="flex p-20">
            <div>
                <img src="/gym.jpg" alt="fitness" className="w-full object-cover"/>
            </div>
            <div className="flex flex-col bg-[#ebb72d] justify-center gap-10 pl-10">
                <h1 className="font-bold text-3xl">About Us</h1>
                <p className="pr-10">FitPlex is a platform that helps you to create your own workout routines. 
                    You can choose from a variety of exercises and create your own routine. 
                    You can also see the exercises that other users have created and use them to create your own routine. 
                </p>
            </div>
        </div>
    )
}