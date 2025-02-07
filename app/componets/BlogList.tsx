"use client";
import React, { useState , useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
interface DataProps{
    id: number,
    author: string,
    title: string,
    description: string,
    url: string,
    date:string,
}
export default function BlogList () {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredData, setFilteredData] = useState<DataProps[]>([]);
    const [expandedId, setExpandedId] = useState<number | null>(null);
    // useEffect(()=>{
    //     try {
    //         console.log('1111111111111111111');
    //         const data = JSON.parse(localStorage.getItem('blog') || '[]');
    //         setFilteredData(data);
    //         console.log(filteredData);
    //     } catch (error) {
    //         console.error('the data is not sent');
    //     }
    // },[])

    useEffect(() => {
        try {
            const data = JSON.parse(localStorage.getItem("blog") || "[]");
            setFilteredData(data);
        } catch (error) {
            console.error("The data is not sent", error);
        }
    }, []);
    
    // Log data after state updates
    useEffect(() => {
        console.log("Updated filteredData:", filteredData);
    }, [filteredData]);
    return(
        <>
            <div className="container bg-light"
                style={{ marginTop: '5rem' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="form-control mb-2"
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                />
            </div>
            <div className="row">
                {filteredData.map((item)=>
                <div key={item.id} className="col-md-4">
                     <div className="card mb-3">
                        <img
                            src={item.url} 
                            className="card-img-top"
                            alt={item.title}
                            
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {item.title}
                            </h5>
                            <p className="card-text">
                                {
                                    expandedId ===
                                        item.id ?
                                        item.description :
                                        `${item.description.substring(0, 50)}...`
                                }
                            </p>
                        
                        <div className="d-flex justify-content-between 
                            align-items-center row">
                            <div>
                                <p className="m-0 small col">
                                    {"posted by "}
                                    {item.author}
                                </p>
                                <small className="text-muted">
                                    {item.date}
                                </small>
                            </div>
                            <Link href={`/Bloglist/${item.id}`}>
                                <button className='btn btn-primary'>
                                    Read more
                                </button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    )
}