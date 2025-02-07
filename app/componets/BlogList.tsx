"use client";
import React, { useState , useEffect} from "react";
import Link from "next/link";

interface DataProps{
    id: number,
    author: string,
    title: string,
    description: string,
    url: string,
    date:string,
}
export default function(){
    useEffect(()=>{
        try {
            const data = JSON.parse(localStorage.getItem('blog') || '[]');
            setFilteredData(data);
        } catch (error) {
            console.error('the data is not sent');
        }
    },[])
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredData, setFilteredData] = useState<DataProps[]>([]);

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
                        
                            <img src={item.url} alt="The Image"
                            />
                        
                        <div className="card-body">
                            <h5 className="card-title">
                                {item.title}
                            </h5>
                            <p className="card-text">
                            {item.description}
                            </p>
                        </div>
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
                            <Link href={`/blog/${item.id}`}>
                                <button className='btn btn-primary'>
                                    Read more
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    )
}