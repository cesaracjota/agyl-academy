import React from 'react';
import { Button, Card, CardBody, CardFooter, Heading, Image, SimpleGrid, Link } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

const CardComponent = () => {
    return (
        <SimpleGrid columns={{base: 1, sm: 1, lg: 3}} spacing={4}>
            <Card w={'full'} textAlign={'center'} _dark={{ bg: 'primary.1000', borderWidth: '1px', borderColor: 'primary.800' }} boxShadow={'base'}>
                <CardBody w="full" display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Image src='https://vra.unsa.edu.pe/wp-content/themes/vra/img/escudo.svg' textAlign={'center'} alignSelf={'center'} maxW={60} alt='logo UNSAAC' />
                </CardBody>
                <CardFooter py={0} px={0} w="full">
                    <Button as={Link} href={'/unsa'} size='lg' borderRadius={'none'} borderBottomRadius={'md'} rightIcon={<ArrowRightIcon />} variant='ghost' bgGradient={'linear(to-r, red.600, red.800)'} _hover={{ bgGradient: 'linear(to-r, red.700, red.900)'}} w="full" justifyContent={'space-between'} color="white">
                        <Heading w="full" alignSelf={'center'} fontWeight={'black'} as={'h2'} size={'md'}>UNSA</Heading>
                    </Button>
                </CardFooter>
            </Card>
            <Card w={'full'} textAlign={'center'} _dark={{ bg: 'primary.1000', borderWidth: '1px', borderColor: 'primary.800' }} boxShadow={'base'}>
                <CardBody w="full" display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Image src='https://escueladerecho.pucp.edu.pe/wp-content/themes/PUCP/assets/img/decorations/logo-footer.svg' textAlign={'center'} alignSelf={'center'} maxW={60} alt='logo unsa' />
                </CardBody>
                <CardFooter py={0} px={0} w="full">
                    <Button as={Link} to={'/catolica'} size='lg' borderRadius={'none'} borderBottomRadius={'md'} rightIcon={<ArrowRightIcon />} variant='ghost' bgGradient={'linear(to-r, blue.600, blue.800)'} _hover={{ bgGradient: 'linear(to-r, blue.700, blue.900)'}} w="full" justifyContent={'space-between'} color="white">
                        <Heading w="full" alignSelf={'center'} fontWeight={'black'} as={'h2'} size={'md'}>CATÓLICA</Heading>
                    </Button>
                </CardFooter>
            </Card>
            <Card w={'full'} textAlign={'center'} _dark={{ bg: 'primary.1000', borderWidth: '1px', borderColor: 'primary.800' }} boxShadow={'base'}>
                <CardBody w="full" display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Image src='https://img.icons8.com/fluency/256/student-male.png' textAlign={'center'} alignSelf={'center'} maxW={60} alt='logo unsa' />
                </CardBody>
                <CardFooter py={0} px={0} w="full">
                    <Button as={Link} href={'/escolar'} size='lg' borderRadius={'none'} borderBottomRadius={'md'} rightIcon={<ArrowRightIcon />} variant='ghost' bgGradient={'linear(to-r, purple.600, purple.800)'} _hover={{ bgGradient: 'linear(to-r, purple.700, purple.900)'}} w="full" justifyContent={'space-between'} color="white">
                        <Heading w="full" alignSelf={'center'} fontWeight={'black'} as={'h2'} size={'md'}>ESCOLAR</Heading>
                    </Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
    )
}

export default CardComponent;