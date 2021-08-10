import React, { Component, useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



function MenuHeader(){

    const pathname = window.location.pathname;
    const path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = useState(path);
    const handleItemClick = (e, { name }) => setActiveItem(name);
    
    return(
        <div>
        <Menu secondary>
            <Menu.Item
            name='about Me'
            active={activeItem === 'about me'}
            onClick={handleItemClick}
            as={Link}
            to="/"
            />
            <Menu.Item
            name='Portfolio'
            active={activeItem === 'portfolio'}
            onClick={handleItemClick}
            as={Link}
            to="/portfolio"
            />
            <Menu.Item
            name='resume'
            active={activeItem === 'resume'}
            onClick={handleItemClick}
            as={Link}
            to="/resume"
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    name='contact'
                    active={activeItem === 'contact'}
                    onClick={handleItemClick}
                    as={Link}
                    to="/contact"
                    />
                </Menu.Menu>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
            
        </Menu>
        </div>
    )
}

export default MenuHeader;