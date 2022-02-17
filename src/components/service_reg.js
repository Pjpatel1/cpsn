import  React, {useState} from 'react';
function Form1 ()
{
    const [data,setData] = useState(null);
    function getData1(val)
    {
        setData(val.target.value)
        console.warn(val.target.value)
    }
    const [data1,setData1] = useState(null);
    function getData2(val)
    {
        setData1(val.target.value)
        console.warn(val.target.value)
    }
    return(
        <div className="form1">
            <div className="background_image">
                    <div className="form-heading">
                        This heading is for those who whant to uplod their services
                    </div>
                    <div className="inputs">
                        <div className='inputs'>
                            <label className="label">First Name</label>
                            <input type="text" id="fname" name="fname" onChange={getData1}></input>
                        </div>
                        <div className='inputs'>
                            <label className="label">Last Name</label>
                            <input type="text" id="Lname" name="Lname" onChange={getData2}></input>
                        </div>
                        <div className='inputs'>
                            <label className="label">Eneter hone number</label>
                            <input 
                            type="tel"
                            id="phone" 
                            name="phone" 
                            placeholder="123-45-678"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            onChange={getData2}></input>
                        </div>
                        <input type="submit"></input>
                     </div>
            </div>
        </div>
    )
}
export default Form1;