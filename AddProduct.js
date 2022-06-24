import React ,{useState,useEffect} from "react"
import Header from "./Header"
function AddProduct()
{
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");

    function AddProduct()
    {
        console.warn(name,file,price,description)
        const formData =new FormData();
        formData.append('file',file);
        formData.append('price',price);
        formData.append('name',name);
        formData.append('description',description);
    }
    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
    <br />
            <input type="text" className="form-control" placeholder="name"
             onChange={(e)=>setName(e.target.value)} />
            <br />
            <input type="file"  className="form-control" placeholder="file"
             onChange={(e)=>setFile(e.target.value)} />
            <br />            
            <input type="text" className="form-control" placeholder="price" 
             onChange={(e)=>setPrice(e.target.value)}/>
            <br />
            <input type="text"  className="form-control" placeholder="description" 
             onChange={(e)=>setDescription(e.target.value)}/>

            <button className="btn btn-primary">AddProduct</button>
        </div>
        </div>
    )
}
export default AddProduct