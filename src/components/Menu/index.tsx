import React from 'react'
import {Animated} from 'react-native'
import QRCode from 'react-native-qrcode-svg';

import {MaterialIcons} from '@expo/vector-icons'

import {Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles';


interface MenuProps {
    translateY: Animated.Value
}

const Menu: React.FC<MenuProps> = ({translateY}) => {
    return (
        <Container
            style={{
                opacity: translateY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, 1]
                })
            }}
        >
            <Code>
                <QRCode 
                    value='https://rocketseat.com.br'
                    size={80}
                    color='#FFF'
                    backgroundColor='#8B10AE'
                />
            </Code>

            <Nav>
                <NavItem>
                    <MaterialIcons name='help-outline' size={20} color='#FFF' />
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name='person-outline' size={20} color='#FFF' />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name='credit-card' size={20} color='#FFF' />
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <MaterialIcons name='smartphone' size={20} color='#FFF' />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButton>
                <SignOutButtonText>
                    Sair do app
                </SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}

export default Menu