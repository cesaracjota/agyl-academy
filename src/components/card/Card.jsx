import React from 'react';
import { Button, Card, CardBody, CardFooter, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import LogoUNSA from '../../assets/img/UNSA.webp';
import LogoPUCP from '../../assets/img/PUCP.webp';
import LogoESCOLAR from '../../assets/img/STUDENT.webp';
import { NavLink } from 'react-router-dom';

const CardComponent = () => {
    return (
        <SimpleGrid columns={{base: 1, sm: 1, lg: 3}} spacing={4}>
            <Card w={'full'} textAlign={'center'} _dark={{ bg: 'primary.1000', borderWidth: '1px', borderColor: 'primary.800' }}>
                <CardBody w="full" display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Image src={LogoUNSA} textAlign={'center'} alignSelf={'center'} w="full" h="full" maxW={60} alt='logo UNSA' />
                </CardBody>
                <CardFooter py={0} px={0} w="full">
                    <Button as={NavLink} to={'/unsa'} size='lg' borderRadius={'none'} borderBottomRadius={'md'} rightIcon={<ArrowRightIcon />} variant='ghost' bgGradient={'linear(to-r, red.600, red.800)'} _hover={{ bgGradient: 'linear(to-r, red.700, red.900)'}} w="full" justifyContent={'space-between'} color="white">
                        <Heading w="full" alignSelf={'center'} fontWeight={'black'} as={'h2'} size={'md'}>UNSA</Heading>
                    </Button>
                </CardFooter>
            </Card>
            <Card w={'full'} textAlign={'center'} _dark={{ bg: 'primary.1000', borderWidth: '1px', borderColor: 'primary.800' }}>
                <CardBody w="full" display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Image src={LogoPUCP} w="full" h="full" textAlign={'center'} alignSelf={'center'} maxW={60} alt='logo PUCP' />
                </CardBody>
                <CardFooter py={0} px={0} w="full">
                    <Button as={NavLink} to={'#'} size='lg' borderRadius={'none'} borderBottomRadius={'md'} rightIcon={<ArrowRightIcon />} variant='ghost' bgGradient={'linear(to-r, blue.600, blue.800)'} _hover={{ bgGradient: 'linear(to-r, blue.700, blue.900)'}} w="full" justifyContent={'space-between'} color="white">
                        <Heading w="full" alignSelf={'center'} fontWeight={'black'} as={'h2'} size={'md'}>CATÓLICA</Heading>
                    </Button>
                </CardFooter>
            </Card>
            <Card w={'full'} textAlign={'center'} _dark={{ bg: 'primary.1000', borderWidth: '1px', borderColor: 'primary.800' }}>
                <CardBody w="full" display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Image src={LogoESCOLAR} textAlign={'center'} alignSelf={'center'} w="full"  h="full" maxW={60} alt='logo ESCOLAR' />
                </CardBody>
                <CardFooter py={0} px={0} w="full">
                    <Button as={NavLink} to={'#'} size='lg' borderRadius={'none'} borderBottomRadius={'md'} rightIcon={<ArrowRightIcon />} variant='ghost' bgGradient={'linear(to-r, purple.600, purple.800)'} _hover={{ bgGradient: 'linear(to-r, purple.700, purple.900)'}} w="full" justifyContent={'space-between'} color="white">
                        <Heading w="full" alignSelf={'center'} fontWeight={'black'} as={'h2'} size={'md'}>ESCOLAR</Heading>
                    </Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
    )
}

export default CardComponent;