import AnchorLink from "react-anchor-link-smooth-scroll";

function DotGroup({selected,setSelected})
{
    const selectedStyle=`relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full 
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%] before:z-[-1]`
    return(
        <div className="flex flex-col gap-6 fixed top-[60%] right-7">
        <AnchorLink className={`${selected==='home' ? selectedStyle:"bg-deep-grey"}
       w-3 h-3 rounded-full `}
        href="#home"
        onClick={()=>setSelected('home')}/>
        <AnchorLink className={`${selected==='skill' ? selectedStyle:"bg-deep-grey"}
       w-3 h-3 rounded-full `}
        href="#skill"
        onClick={()=>setselected('skill')}/>
        <AnchorLink className={`${selected==='project' ? selectedStyle:"bg-deep-grey"}
       w-3 h-3 rounded-full `}
        href="#project"
        onClick={()=>setselected('project')}/>
        <AnchorLink className={`${selected==='testimonial' ? selectedStyle:"bg-deep-grey"}
       w-3 h-3 rounded-full `}
        href="#testimonial"
        onClick={()=>setselected('testimonial')}/>
        <AnchorLink className={`${selected==='contact' ? selectedStyle:"bg-deep-grey"}
       w-3 h-3 rounded-full `}
        href="#contact"
        onClick={()=>setselected('contact')}/>
        </div>
    );
}
export default DotGroup;