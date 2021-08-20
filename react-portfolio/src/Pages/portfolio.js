import React from 'react';
import { Card, Grid, Image, Icon } from 'semantic-ui-react';
import olMate from '../Assets/olMate.png';
import gamersHideout from '../Assets/gamersHideout.png';
import gql from '../Assets/gql.png';




function PortfolioCards(){

    return(
        <div className='layout'>
            <Grid columns={6}>
                <Grid.Row>
                <Grid.Column>
                    <Card>
                        <Image src={olMate} href='https://github.com/camball96/project-3-Ol-Mate'/>
                        <Card.Content>
                        <Card.Header href='https://github.com/camball96/project-3-Ol-Mate'>Ol' Mate</Card.Header>
                        <Card.Meta>
                            <span className='date'>Built in 2021</span>
                        </Card.Meta>
                        <Card.Description>
                            Ol' Mate is a social media platform aimed for the older generation!
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 users
                        </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Image src={gamersHideout} href='https://polar-castle-84176.herokuapp.com/' />
                        <Card.Content>
                        <Card.Header href='https://polar-castle-84176.herokuapp.com/'>Gamers Hideout</Card.Header>
                        <Card.Meta>
                            <span className='date'>Built in 2021</span>
                        </Card.Meta>
                        <Card.Description>
                            Gamers Hideout is a site dedicated to giving a range of reviews on video games from all platforms!
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            15 Users
                        </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Image src={gql} href='https://github.com/camball96/gql-express-apollo-server' />
                        <Card.Content>
                        <Card.Header href='https://github.com/camball96/gql-express-apollo-server'>Gql/Express/Apollo Server</Card.Header>
                        <Card.Meta>
                            <span className='date'>Built in 2021</span>
                        </Card.Meta>
                        <Card.Description>
                            The core code involved in creating a server with apollo. This uses Gql queries and MonogDB.
                        </Card.Description>
                        </Card.Content>
                        
                    </Card>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default PortfolioCards;