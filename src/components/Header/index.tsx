import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'

import {Container, Top, Logo, Title} from './styles';

export default function styles() {
    return (
        <Container>
           <Top>
               <Logo source={require('../../assets/Nubank_Logo.png')} />
               <Title>Henrique</Title>
           </Top>
           <MaterialIcons name='keyboard-arrow-down' size={20} color='#FFF' />
        </Container>
    )
}
