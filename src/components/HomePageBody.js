import React, { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { FcSearch } from "react-icons/fc";
import { HiOutlineClock } from "react-icons/hi";
import { BsChatLeftDots } from "react-icons/bs";
import { Link } from 'react-router-dom';

const HomePageBody = ({ postsData }) => {

    const [search,setSearch] = useState('');
    postsData = postsData.filter((post)=>post.title.includes(search) || post.body.includes(search));
    
    return (
        <div className='main-box'>
            <div id='search-box'>
                {/*ICON*/}
                {/*INPUT TAG*/}
                <FcSearch id='search-icon' size={20}/>
                <div style={{ marginLeft:'5px' }}>
                    <input id="search-text" type="text" placeholder="Search Posts" onChange={(e)=>setSearch(e.target.value)}  />
                </div>         
                        
            </div>
            <div className='cards-container'>
                {/*Generate boxes*/}
                {(postsData.map((item)=>(
                    <li key={item._id} style={{ listStyleType: "none" }}>
                        <div className='card-box'>
                            <Link to={`/home/${item._id}`} style={{ textDecoration:'none' }}><div className='box-header'>
                                {item.title.length<=18 ? item.title : `${item.title.slice(0,15)}...`}
                            </div></Link>
                            <div className='box-content'>
                                <p className='body-title'>Body</p>
                                <p className='body-text'>
                                    {item.body.length<280 ? item.body : `${item.body.slice(0,275)}...`}
                                </p>
                                <div className='card-info-box'>
                                    <div className='card-info'>
                                        <div className='card-info-title'>
                                            {/*ICON*/}
                                            <AiOutlineUser size={14}/>
                                            <p className='card-info-title-text'>Author</p>
                                        </div>
                                        <p className='card-info-text'>{item.username.length <= 15 ? item.username : `${item.username.slice(0,12)}...`}</p>
                                    </div>
                                    <div className='card-info'>
                                        <div className='card-info-title'>
                                            {/*ICON*/}
                                            <HiOutlineClock size={14}/>
                                            <p className='card-info-title-text'>Date</p>
                                        </div>
                                        <p className='card-info-text'>{new Date(item.date).toLocaleDateString("en-US")}</p>
                                    </div>
                                    <div className='card-info'>
                                        <div className='card-info-title'>
                                            {/*ICON*/}
                                            <BsChatLeftDots size={12} />
                                            <p className='card-info-title-text'>Comments</p>
                                        </div>
                                        <p className='card-info-text'>{item.comments.length}</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </li>
                )))
                }
            </div>   
        </div>
    )
}

export default HomePageBody