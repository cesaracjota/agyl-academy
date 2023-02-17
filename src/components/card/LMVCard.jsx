import React from 'react';
import { Heading, Image, Link, SimpleGrid, Stack } from '@chakra-ui/react';
import { CursoMasVistos } from '../../_mock/data';
import { NavLink } from 'react-router-dom';
import { lightenDarkenColor } from '../../theme/setting';

const LMVCard = () => {
    return (
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={4}>
            {CursoMasVistos.map((data, index) => (
                <Link
                    key={index}
                    as={NavLink}
                    to={data?.path}
                    style={{ textDecoration: 'none' }}
                >
                    <Stack
                        direction={'row'}
                        bg={data?.brand_color}
                        color="white"
                        _dark={{
                            _hover: { 
                                bg: lightenDarkenColor(`${data?.brand_color}`, +30),
                            },
                        }}
                        _hover={{ 
                            bg: lightenDarkenColor(`${data?.brand_color}`, -60),
                        }}
                        py={{ base: 1, lg: 3 }}
                        px={4}
                        borderRadius={'lg'}
                        borderTop ={`3px solid ${lightenDarkenColor(`${data?.brand_color}`, +50)}`}
                        boxShadow={'base'}
                    >
                        <Image boxSize={{ base: 16, lg: 20 }} src={data?.image} alt={data?.titulo} />
                        <Stack alignSelf={'center'}>
                            <Heading
                                as={'h2'}
                                fontSize={{ base: 'xs', sm: 'sm', md: 'sm', lg: 'sm' }}
                            >
                                {data?.titulo}
                            </Heading>
                        </Stack>
                    </Stack>
                </Link>
            ))}
        </SimpleGrid>
    );
};

export default LMVCard;
