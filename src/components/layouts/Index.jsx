import { Container, Flex } from '@chakra-ui/react'
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const Index = ({ componente: Component }) => {
    return (
        <Flex direction="column" flex="1" _dark={{ bg: 'primary.1000' }}>
            <Navbar />
            <Flex as="main" role="main" direction="column" flex="1" py="5">
                <Container flex="1" maxW={'8xl'} minH="lg">
                    {Component}
                </Container>
            </Flex>
            <Footer />
        </Flex>
    )
}

export default Index