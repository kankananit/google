import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from '../Search.js';
function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className="home__headerLeft">
                    <Link to='/'>Home</Link>
                    <Link to='/store'>Store</Link>
                </div>

                <div className="home__headerRight">
                    <Link to='/about'>Gmail</Link>
                    <Link to='/about'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>

            </div>

            <div className='home__body'>
                <img
                    src="https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt=""
                />

                <div className="home__inputContainer">
                    {/* <Search /> */}
                    <Search hideButtons={false} />
                </div>

            </div>


        </div>
    )
}

export default Home;