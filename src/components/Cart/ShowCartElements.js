const ShowCartElements=props=>{

    const showCartElemets=()=>{
           <div>
            <div>{props.title}</div>
            <div>{props.price}</div>
            <div>{props.imageUrl}</div>
            <div>{props.quantity}</div>
           </div>
    }
    return (
        <div>
            <button onClick={showCartElemets}>Cart</button>
        </div>
    );
}

export default ShowCartElements;