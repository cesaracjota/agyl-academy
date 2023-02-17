import React from 'react';
import { Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import CardComponent from '../card/Card';
import LMVCard from '../card/LMVCard';

const Home = () => {

    return (
        <Stack spacing={4} direction={'column'} w="full">
            <Stack direction={'column'}>
                <Heading fontWeight={'900'} as='h2' >Tu decides a donde quieres llegar</Heading>
                <Text as={'p'} textAlign={'justify'} fontSize={'lg'}>Elige la preparación preuniversitaria exclusiva que estás buscando, en la mejor academia de Arequipa.</Text>
            </Stack>
            <CardComponent />
            <Spacer my={2} />
            <Stack direction={'column'}>
                <Heading fontWeight={'900'} as='h2' size="lg">Lo mas visto de Agyl Academy</Heading>
                <Text as={'p'} textAlign={'justify'} fontSize={'lg'}>Aprende y desarrolla las habilidades que necesitas para potenciar tu profesión, ¡toma las primeras clases del curso que tú elijas sin costo!</Text>
            </Stack>
            <LMVCard />
        </Stack>
    )
}

export default Home;