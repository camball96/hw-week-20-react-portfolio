import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



function MenuHeader(){
    
    return(
        <div>
        <Menu secondary>
            <Menu.Item
            name='home'
            //active={activeItem === 'home'}
            //onClick={this.handleItemClick}
            />
            <Menu.Item
            name='messages'
            //active={activeItem === 'messages'}
            //onClick={this.handleItemClick}
            />
            <Menu.Item
            name='friends'
            //active={activeItem === 'friends'}
            //onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
                name='logout'
                //active={activeItem === 'logout'}
                //onClick={this.handleItemClick}
            />
            </Menu.Menu>
        </Menu>
        </div>
    )
}

export default MenuHeader;