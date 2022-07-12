import React from 'react';
// eslint-disable-next-line 
import Footer from '../components/footer';
import { Wrapper } from '../components/footer/styles/footer';
import { Text } from '../components/footer/styles/footer';
import { Link } from '../components/footer/styles/footer';
/*import SocialIcons from '../components/social';*/

export function FooterContainer(){
    return(
        <Footer>
            <Wrapper>
                <Text>
                <p>Como podemos</p>
                <p>Ajudar?</p>
                </Text>
                
            </Wrapper>
            <Text>
                <p>Onde estamos</p>  
            </Text>
            <Link>
            </Link>
        <img src="" alt='credits-cards-images'></img>
        </Footer>
    )
}