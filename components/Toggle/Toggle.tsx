const Toggle = (props:any)=>{
    return(
        <>
            <label htmlFor="toggle">
                <button type="button" id="toggle" role="switch" aria-checked="true">
                    <span>{props.option1}</span><span>{props.option2}</span>  
                </button>
            </label>
        </>
    )
}

export default Toggle 