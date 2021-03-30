import React from 'react'
import { Animated } from 'react-native'
import {PanGestureHandler, State, PanGestureHandlerStateChangeEvent } from 'react-native-gesture-handler'

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Menu from '../components/Menu';

import {MaterialIcons} from '@expo/vector-icons';

import {Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles'

export default function Home() {
    let offset = 0;
    const translateY = new Animated.Value(0)

    const AnimatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY
                }
            }
        ],
        {useNativeDriver: true}
    )

    function onHandlerStateChange(event: PanGestureHandlerStateChangeEvent) {
        if(event.nativeEvent.oldState === State.ACTIVE){
            let opened = false;
            const {translationY} = event.nativeEvent;

            offset += translationY;

            if(translationY >= 100) {
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset: 0;
            }


            Animated.timing(translateY, {
                toValue: opened ? 380 : 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                offset = opened ? 380 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0)
            })

            translateY.setOffset(offset)
            translateY.setValue(0)
        }
    }

    return (
        <Container>
            <Header />

            <Content>
                <Menu translateY={translateY} />

                <PanGestureHandler
                    onGestureEvent={AnimatedEvent}
                    onHandlerStateChange={onHandlerStateChange}
                >
                
                    <Card
                        style={{
                            transform: [{
                                translateY: translateY.interpolate({
                                    inputRange: [-350, 0, 380],
                                    outputRange: [-50, 0, 380],
                                    extrapolate: 'clamp'
                                }),
                            }]
                        }}
                    >
                        <CardHeader>
                            <MaterialIcons name='attach-money' size={28} color='#666' /> 
                            <MaterialIcons name='visibility-off' size={28} color='#666' /> 
                        </CardHeader>

                        <CardContent>
                            <Title>Saldo Disponível</Title>
                            <Description>R$ 212.986,72</Description>
                        </CardContent>

                        <CardFooter>
                            <Annotation>Transferência de R$ 100,00 recebida de Henrique Hendel Santos Lopes hoje às 17:00h</Annotation>
                        </CardFooter>
                    </Card>

                </PanGestureHandler>
            </Content>

            <Tabs translateY={translateY} />
        </Container>
    )
}
