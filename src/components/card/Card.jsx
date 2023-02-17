import React from 'react';
import { Heading, Image, Link, SimpleGrid, Stack } from '@chakra-ui/react';
import { Escuelas } from '../../_mock/data'
import { NavLink } from 'react-router-dom';
import { lightenDarkenColor } from '../../theme/setting';

const CardComponent = () => {

    return (
        <SimpleGrid columns={{base: 1, sm: 1, md: 3, lg: 4}} spacing={4}>
            { Escuelas.map((data, index) => (
                <Link 
                    key={index} 
                    as={NavLink} 
                    to={data?.path} 
                    style={{textDecoration:'none'}}>
                    <Stack 
                        direction={'row'} 
                        bg={data?.brand_color} 
                        _hover={{bg: lightenDarkenColor(`${data?.brand_color}`, -30)}}
                        _selected={{
                            bg: lightenDarkenColor(`${data?.brand_color}`, -30),
                            color: 'white',

                        }}
                        py={{ base: 1, lg: 3}} 
                        px={4} 
                        borderRadius={'lg'}
                        borderRight ={`3px solid ${lightenDarkenColor(`${data?.brand_color}`, -50)}`}
                        boxShadow={'base'}
                    >
                        <Image boxSize={{base: 16, lg: 20}} src={data?.image} alt={data?.titulo}/>
                        <Stack alignSelf={'center'} textColor={'primary.900'}>
                            <Heading as={'h4'} fontSize={{base: 'xs', sm: 'sm', md: 'sm', lg: 'sm'}} fontWeight="normal">Universidad de</Heading>
                            <Heading as={'h2'} fontSize={{base: 'xs', sm: 'sm', md: 'sm', lg: 'sm'}}>{data?.titulo}</Heading>
                        </Stack>
                    </Stack>
                </Link>
            ))}
        </SimpleGrid>
    )
}

export default CardComponent;