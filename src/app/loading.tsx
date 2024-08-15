import Style from './loader.module.css'
export default function Loading(){
    return(
        <main className=" h-screen bg-black text-white flex items-center justify-center">
            <div id={Style.GlowDiv} className=" flex rounded-full items-center justify-center relative  overflow-hidden bg-cyan-300 h-20 w-20 ">


                  <div id={Style.rotatedDiv} className=' z-0 absolute  h-full w-32'>
                   
                  </div>

                <div className=' h-16 w-16 bg-black overflow-hidden z-50 rounded-full'>

                </div>
            </div>
        </main>
    )
}