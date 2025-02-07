"use client";
import { useState,useEffect } from "react";


interface DataProps {
    id: number
    author: string,
    title: string,
    description: string,
    url: string,
    date: string,
}
export default function Createblog(){
    const [author, setAuthor] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [data, setData] = useState<DataProps[]>([]);
    const handleData =()=>{
        if(!author.trim() || !title.trim() || !description.trim() || !url.trim()){
            console.error('the data is missed');
            return;
        }
        const currentDate = new Date().toLocaleDateString();
        const existingData:DataProps[] = JSON.parse(
            localStorage.getItem('blog') || '[]');

        console.log(existingData);

        const newData: DataProps ={
            id: existingData.length + 1,
            author: author,
            title: title,
            description: description,
            url:url,
            date:currentDate,
        }

        console.log(newData);

        const updatedData = [...existingData,newData];
        localStorage.setItem('blog',JSON.stringify(updatedData));
        console.log(updatedData);
        setAuthor('');
        setDescription('');
        setTitle('');
        setUrl('');
    }
    return(
        <>
           <div className="container bg-light" 
                 style={{ marginTop: '5rem' }}>
                <div className="row">
                    <div className="col"></div>
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Author"
                        value={author}
                        onChange={(e)=>setAuthor(e.target.value)}
                    />
                    <input 
                        type="text"
                        className="form-control mb-2"
                        placeholder="Title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <textarea
                        
                        className="form-control mb-2"
                        placeholder="Description"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                    <input 
                        type="text"
                        className="form-control mb-2"
                        placeholder="Image URL"
                        value={url}
                        onChange={(e)=>setUrl(e.target.value)}
                    />
                    <button
                        className="btn btn-primary mb-2"
                        onClick={handleData}
                        >
                        Add Data
                    </button>
                </div>   
            </div>
        </>
    )
}