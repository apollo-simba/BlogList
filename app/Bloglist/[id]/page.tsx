"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
interface DataProps{
    id: number,
    author: string,
    title: string,
    description: string,
    url: string,
    date: string,
}
export default function Blogdetails(){
    const [blogdetail, setBlogdetail] = useState<DataProps | null>(null); 
    const { id } = useParams(); 
    
        useEffect(() => {
            if (!id) return;//prevents the code inside useEffect from running if id is missing or undefined.
            
            const blogs: DataProps[] = JSON.parse(localStorage.getItem("blog") || "[]");
            const selectedData = blogs.find((each) => each.id === parseInt(id as string)); // Convert id safely
    
            setBlogdetail(selectedData || null); // Handle null case properly
            console.log(blogdetail);
        }, [id]);
       if(!blogdetail)
       {
        <div>
            <h1>...loading</h1>
        </div>
       }
  
    return(
        <>
        <div className="container bg-light" 
             style={{ marginTop: '5rem' }}>
            
            <div className="card mt-5">
                <img src={blogdetail?.url}
                    style={
                        {
                            maxWidth: '100%',
                            maxHeight: '300px'
                        }}
                    className="card-img-top" alt="Blog" />
                <div className="card-body">
                    <h1 className="card-title">{blogdetail?.title}</h1>
                    <p className="card-text">
                        {blogdetail?.description}
                    </p>
                    <p className="card-text">
                        Author: {blogdetail?.author}
                    </p>
                    <p className="card-text">Date: {blogdetail?.date}</p>
                </div>
            </div>
        </div>
        </>
    )
}