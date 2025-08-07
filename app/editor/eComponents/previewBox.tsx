export default function PreviewBox () {
    return (
        <>
        <section className="bg-white w-full h-screen h-full hidden md:flex lg:flex items-center justify-center " >
         <div className="shadow-md rounded-md w-[80%] h-[80%] p-2 duration-300 transition-all ease-in-out p-4 rounded-lg hover:bg-zinc-50 hover:scale-[1.02]" >
           <p>You're seeing this TypeScript error:

Binding element 'children' implicitly has an 'any' type.

This happens because you're not explicitly typing the children prop in your function component.</p>
        </div>
        </section>
      
      
        </>
    )
}