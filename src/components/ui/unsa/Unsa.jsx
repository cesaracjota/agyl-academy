import React from 'react'
import { Stack, Tab, TabList, TabPanel, TabPanels, Table, Tabs, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';

const Unsa = () => {
    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    const textColor = useColorModeValue('primary.1000', 'white');

    return (
        <>
            <Stack direction={'row'} w={'full'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={'4xl'} color={'primary.100'} fontWeight={'bold'}>Nuevos Inicios</Text>
            </Stack>
            <Stack w="full" justifyContent={'space-around'} alignItems={'center'} mt={6}>
                <Tabs variant='unstyled' isFitted w="full">
                    <TabList flexDirection={{ base: 'column', lg: 'row' }}>
                        <Tab py={3} mr={4} boxShadow={'rgba(17, 17, 26, 0.1) 0px 2px 0px'} _selected={{ color: 'white', bg: 'primary.100', fontWeight: 'bold' }} _hover={{ color: 'white', bg: 'primary.100', fontWeight: 'bold' }}>INTENSIVO UNSA</Tab>
                        <Tab py={3} mr={4} boxShadow={'rgba(17, 17, 26, 0.1) 0px 2px 0px'} _selected={{ color: 'white', bg: 'primary.100', fontWeight: 'bold' }} _hover={{ color: 'white', bg: 'primary.100', fontWeight: 'bold' }}>ANUAL UNSA</Tab>
                        <Tab py={3} mr={4} boxShadow={'rgba(17, 17, 26, 0.1) 0px 2px 0px'} _selected={{ color: 'white', bg: 'primary.100', fontWeight: 'bold' }} _hover={{ color: 'white', bg: 'primary.100', fontWeight: 'bold' }}>SEMESTRAL UNSA</Tab>
                        <Tab py={3} mr={4} boxShadow={'rgba(17, 17, 26, 0.1) 0px 2px 0px'} _selected={{ color: 'white', bg: 'primary.100', fontWeight: 'bold' }} _hover={{ color: 'white', bg: 'primary.100', fontWeight: 'bold' }}>ESCOLAR UNSA</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            {
                                isDesktop ? (
                                    <Table variant='simple' mt={4}>
                                        <Thead>
                                            <Tr alignSelf={'center'} justifyContent={'space-around'} alignItems={'center'}>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Inicio</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Fin</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Pago mensual[Presencial]</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Pago mensual[Virtual]</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Turno</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr alignSelf={'center'}>
                                                <Td textAlign={'center'}>02/02/2023</Td>
                                                <Td textAlign={'center'}>09/04/2022</Td>
                                                <Td textAlign={'center'}>S/ 380.00</Td>
                                                <Td textAlign={'center'}>-</Td>
                                                <Td textAlign={'center'}>Mañana</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                ) : (
                                    <Stack direction={{ base: 'column', lg: 'row' }} w="full" justifyContent={'space-between'}>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Inicio</Text>
                                            <Text fontSize={'sm'}>02/02/2023</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Fin</Text>
                                            <Text fontSize={'sm'}>09/04/2022</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Pago mensual[Presencial]</Text>
                                            <Text fontSize={'sm'}>S/ 380.00</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Pago mensual[Virtual]</Text>
                                            <Text fontSize={'sm'}>-</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Turno</Text>
                                            <Text fontSize={'sm'}>Mañana</Text>
                                        </Stack>
                                    </Stack>
                                )
                            }
                        </TabPanel>
                        <TabPanel>
                        {
                                isDesktop ? (
                                    <Table variant='simple' mt={4}>
                                        <Thead>
                                            <Tr alignSelf={'center'} justifyContent={'space-around'} alignItems={'center'}>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Inicio</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Fin</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Pago mensual[Presencial]</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Pago mensual[Virtual]</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Turno</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr alignSelf={'center'}>
                                                <Td textAlign={'center'}>02/02/2023</Td>
                                                <Td textAlign={'center'}>09/04/2022</Td>
                                                <Td textAlign={'center'}>S/ 380.00</Td>
                                                <Td textAlign={'center'}>S/ 170.00</Td>
                                                <Td textAlign={'center'}>Mañana</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                ) : (
                                    <Stack direction={{ base: 'column', lg: 'row' }} w="full" justifyContent={'space-between'}>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Inicio</Text>
                                            <Text fontSize={'sm'}>02/02/2023</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Fin</Text>
                                            <Text fontSize={'sm'}>09/04/2022</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Pago mensual[Presencial]</Text>
                                            <Text fontSize={'sm'}>S/ 380.00</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Pago mensual[Virtual]</Text>
                                            <Text fontSize={'sm'}>S/ 170.00</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Turno</Text>
                                            <Text fontSize={'sm'}>Mañana</Text>
                                        </Stack>
                                    </Stack>
                                )
                            }
                        </TabPanel>
                        <TabPanel>
                        {
                                isDesktop ? (
                                    <Table variant='simple' mt={4}>
                                        <Thead>
                                            <Tr alignSelf={'center'} justifyContent={'space-around'} alignItems={'center'}>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Inicio</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Fin</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Pago mensual[Presencial]</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Pago mensual[Virtual]</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Turno</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr alignSelf={'center'}>
                                                <Td textAlign={'center'}>02/02/2023</Td>
                                                <Td textAlign={'center'}>09/04/2022</Td>
                                                <Td textAlign={'center'}>S/ 380.00</Td>
                                                <Td textAlign={'center'}>S/ 170.00</Td>
                                                <Td textAlign={'center'}>Mañana</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                ) : (
                                    <Stack direction={{ base: 'column', lg: 'row' }} w="full" justifyContent={'space-between'}>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Inicio</Text>
                                            <Text fontSize={'sm'}>02/02/2023</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Fin</Text>
                                            <Text fontSize={'sm'}>09/04/2022</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Pago mensual[Presencial]</Text>
                                            <Text fontSize={'sm'}>S/ 380.00</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Pago mensual[Virtual]</Text>
                                            <Text fontSize={'sm'}>S/ 170.00</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Turno</Text>
                                            <Text fontSize={'sm'}>Mañana</Text>
                                        </Stack>
                                    </Stack>
                                )
                            }
                        </TabPanel>
                        <TabPanel>
                        {
                                isDesktop ? (
                                    <Table variant='simple' mt={4}>
                                        <Thead>
                                            <Tr alignSelf={'center'} justifyContent={'space-around'} alignItems={'center'}>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Inicio</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Fin</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Pago mensual[Presencial]</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Pago mensual[Virtual]</Th>
                                                <Th fontSize={'sm'} color={textColor} textAlign={'center'}>Turno</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr alignSelf={'center'}>
                                                <Td textAlign={'center'}>02/02/2023</Td>
                                                <Td textAlign={'center'}>09/04/2022</Td>
                                                <Td textAlign={'center'}>S/ 380.00</Td>
                                                <Td textAlign={'center'}>S/ 170.00</Td>
                                                <Td textAlign={'center'}>Mañana</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                ) : (
                                    <Stack direction={{ base: 'column', lg: 'row' }} w="full" justifyContent={'space-between'}>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Inicio</Text>
                                            <Text fontSize={'sm'}>02/02/2023</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Fin</Text>
                                            <Text fontSize={'sm'}>09/04/2022</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Pago mensual[Presencial]</Text>
                                            <Text fontSize={'sm'}>S/ 380.00</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Pago mensual[Virtual]</Text>
                                            <Text fontSize={'sm'}>S/ 170.00</Text>
                                        </Stack>
                                        <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                            <Text fontSize={'md'} fontWeight={'bold'}>Turno</Text>
                                            <Text fontSize={'sm'}>Mañana</Text>
                                        </Stack>
                                    </Stack>
                                )
                            }
                        </TabPanel>
                    </TabPanels >
                </Tabs >
            </Stack >
        </>
    )
}

export default Unsa