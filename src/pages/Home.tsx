import React from 'react'
import {  } from 'react-native'

import Header from '../components/Header';
import Tabs from '../components/Tabs';

import {Container} from './styles'

export default function Home() {
    return (
        <Container>
            <Header />
            <Tabs />
        </Container>
    )
}
