export default function IconBtn({text, onclick, children, disabled, outline = false, customClasses, type,}){
     

    return (

      <button disabled = {disabled} onClick = {onclick} className = {`flex items-center cursor-pointer gap-x-2 rounded-md py-2 px-4 font-semibold text-white
              ${outline ? "border border-[#4880ff] text-black bg-transparent" : "bg-[#4880ff]" } ${customClasses}`} type = {type} >
        
        { children ? ( <>
                        <span className={`${outline && "text-yellow-50"}`}> {text} </span>
                        {children}
                      </>
                     ) : (text)  
          }

      </button>
    

)}