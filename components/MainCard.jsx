export default function MainCard() {
    return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/fitness.jpg')" }}>
        <div className="flex items-center h-full text-left text-white pl-10">
            <div className="flex flex-col">
                <h1 className="text-[50px] font-bold">SHAPE IT UP!</h1>
                <h1 className="text-[50px] font-bold">GET FIT DON´T QUIT</h1>
                <p className="text-lg mt-4">Este es un ejemplo de un texto que está dentro de una imagen de fondo.</p>
            </div>
        </div>
    </div>
    );
}