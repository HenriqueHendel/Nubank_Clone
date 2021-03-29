import React from 'react'
import {  } from 'react-native'

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Menu from '../components/Menu';

import {MaterialIcons} from '@expo/vector-icons';

import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles'

export default function Home() {
    return (
        <Container>
            <Header />

            <Content>
                <Menu />
                
                <Card>
                    <CardHeader>
                        <MaterialIcons name='attach-money' size={28} color='#666' /> 
                        <MaterialIcons name='visibility-off' size={28} color='#666' /> 
                    </CardHeader>

                    <CardContent>
                        <Title>Saldo Disponível</Title>
                        <Description>R$ 197.611,65</Description>
                    </CardContent>

                    <CardFooter>
                        <Annotation>Transferência de R$ 100,00 recebida de Henrique Hendel Santos Lopes hoje às 17:00h</Annotation>
                    </CardFooter>
                </Card>
            </Content>

            <Tabs />
        </Container>
    )
}
