import React from 'react';
import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import CardComponent from '../card/Card';
import Carrousel from '../carrousel/Carrusel';
import { Footer } from '../layouts/Footer';
import { Navbar } from '../layouts/Navbar';

const Home = () => {

    return (
        <>
            <Flex direction="column" flex="1" bg="primary.200" _dark={{ bg: 'primary.900' }} w="full">
                <Navbar />
                <Carrousel />
                <Flex as="main" role="main" direction="column" flex="1" py="5" mt={4}>
                    <Container flex="1" maxW={'8xl'} minH="lg">
                        <Stack spacing={4} direction={'column'} w="full">
                            <Stack direction={'column'}>
                                <Heading fontWeight={'900'} as='h2'>Inicios</Heading>
                                <Text as={'p'} fontSize={'lg'}>Elige la preparación preuniversitaria exclusiva que estás buscando, en la mejor academia de Arequipa.</Text>
                            </Stack>
                            <CardComponent />
                        </Stack>
                    </Container>
                </Flex>
                <Footer />
            </Flex>
        </>
    )
}

export default Home;