import React from 'react'

function DisplayComponents(props){

    function renderRest({restData}){
        if(restData){
            console.log(restData)
            return restData.map((item)=>{
                return(<div key={item._id}>
                    {item.restaurant_name}
                </div>)
            })
        }

    }
    // const renderRest = ()

return(
    <>
    <center>
    <h1>Restaurants List</h1>
    {renderRest(props)}
    </center>
    </>
)
}

export default DisplayComponents