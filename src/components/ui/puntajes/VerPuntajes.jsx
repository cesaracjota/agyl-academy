import React, { useRef, useState } from 'react';
import {
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Select,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react';
import "@fontsource/fira-sans-condensed";
import DataTable, { createTheme } from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { data_puntajes } from '../../../_mock/puntajes';
import { customStyles } from '../../../helpers/customStyles';
import { areas_carreras } from '../../../_mock/carreras';
import { Search2Icon } from '@chakra-ui/icons';
import { BiReset } from 'react-icons/bi';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

const VerPuntajes = () => {

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    const themeTable = useColorModeValue('default', 'solarized');

    const initialState = {
        anio: "",
        proceso: "",
        area: "",
        carrera: "",
    }

    const [state, setstate] = useState(initialState);
    const [carreras, setCarreras] = useState([]);
    const [resultados, setResultados] = useState([]);
    const [isSuccess, setIsSuccess] = useState('initial');

    const anioRef = useRef();
    const procesoRef = useRef();
    const areaRef = useRef();
    const carrerasRef = useRef();

    // search or filter data

    const handleSearch = async (e) => {

        e.preventDefault();

        const data = await data_puntajes.filter((item) => {
            if (state.carrera) {
                return (item.anio === state.anio && item.proceso === state.proceso && item.area === state.area && item.carrera === state.carrera);
            } else {
                return (item.anio === state.anio && item.proceso === state.proceso && item.area === state.area);
            }
        });

        if (data.length > 0) {
            setResultados(data);
            setIsSuccess('true');
        } else {
            setResultados([]);
            setIsSuccess('false')
        }

    }

    const handleSelectArea = (e) => {
        setstate({ ...state, area: e.target.value });
        if (e.target.value !== state.area) {
            carrerasRef.current.value = "";
            setResultados([]);
        }
        const carreras = areas_carreras.filter((item) => item.area === e.target.value);
        setCarreras(carreras[0].carreras);
    }

    const handleReset = () => {
        setstate(initialState);
        carrerasRef.current.value = "";
        anioRef.current.value = "";
        procesoRef.current.value = "";
        areaRef.current.value = "";
        setResultados([]);
        setIsSuccess('initial');
    }

    const columns = [
        {
            name: 'AÑO',
            selector: 'anio',
            sortable: true,
        },
        {
            name: 'PROCESO',
            selector: row => row.proceso + ' ' + row.fase,
            sortable: true,
        },
        {
            name: 'AREA',
            selector: 'area',
            sortable: true,
        },
        {
            name: 'CARRERA',
            selector: 'carrera',
            sortable: true,
        },
        {
            name: 'PUNTAJE MINIMO',
            selector: 'puntaje_minimo',
            sortable: true,
            right: true,
        },
        {
            name: 'PUNTAJE MAXIMO',
            selector: 'puntaje_maximo',
            sortable: true,
            right: true,
        },
    ];

    const tableData = {
        columns: columns,
        data: resultados,
    }

    createTheme('solarized', {
        text: {
            primary: '#FFF',
            secondary: '#FFF',
            tertiary: '#FFF',
            error: '#FFF',
            warning: '#FFF',
        },
        background: {
            default: '##131516',
            hover: '##131516',
            active: '##131516'
        },
        context: {
            background: '##131516',
            text: '#FFF',
        },
        divider: {
            default: '#FFF opacity 92%',
        },
    });

    return (
        <Box mt={14}>

            <Heading fontWeight={'900'} as='h2' size={{ base: 'sm', lg: 'lg' }} textAlign={'center'}>CALCULA PUNTAJES MÁXIMOS Y MÍNIMOS</Heading>
            <Spacer my={2} />
            <Text as={'p'} fontSize={{ base: 'sm', lg: 'lg' }} textAlign={{ base: 'justify', lg: 'center' }}>
                Calcula Puntajes máximos y mínimos de cada carrera y admision de la Universidad Nacional San Agustin de Arequipa
            </Text>
            <Box
                mt={4}
                bg={'white'}
                _dark={{ bg: 'primary.800', borderWidth: '1px', borderColor: 'gray.1000' }}
                p={4}
                borderRadius={'lg'}
                boxShadow={'base'}
                fontFamily={`"Fira Sans Condensed", sans-serif`}
            >
                <form onSubmit={(e) => handleSearch(e)}>
                    <Stack direction={'column'} spacing={4}>
                        <Stack direction={{ base: 'column', lg: 'row' }} spacing={4}>
                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>Año</FormLabel>
                                <Select
                                    placeholder="Selecciona el Año"
                                    ref={anioRef}
                                    onChange={(e) => setstate({ ...state, anio: e.target.value })}
                                >
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                </Select>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel fontWeight={'bold'}>Proceso</FormLabel>
                                <Select
                                    placeholder="Selecciona Proceso"
                                    ref={procesoRef}
                                    onChange={(e) => setstate({ ...state, proceso: e.target.value })}
                                >
                                    <option value="ORDINARIO">ORDINARIO</option>
                                    <option value="CEPRUNSA">CEPRUNSA</option>
                                    <option value="CEPRUNSA_QUINTOS">CEPRUNSA QUINTOS</option>
                                    <option value="EXTRAORDINARIO">EXTRAORDINARIO</option>
                                </Select>
                            </FormControl>
                        </Stack>

                        <FormControl isRequired>
                            <FormLabel fontWeight={'bold'}>Area</FormLabel>
                            <Select
                                placeholder="Selecciona Area"
                                ref={areaRef}
                                onClick={handleSelectArea}
                            >
                                {
                                    areas_carreras.map((item, index) => (
                                        <option key={index} value={item.area}>{item.area}</option>
                                    ))
                                }
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel fontWeight={'bold'}>Carrera</FormLabel>
                            <Select
                                placeholder="Selecciona Carrera"
                                ref={carrerasRef}
                                onChange={(e) => setstate({ ...state, carrera: e.target.value })}
                            >
                                {
                                    carreras.map((item, index) => (
                                        <option key={index} value={item.carrera}>{item.carrera}</option>
                                    ))
                                }
                            </Select>
                        </FormControl>

                        <Divider my={2} />

                        <Stack direction={{ base: 'column', lg: 'row' }} spacing={4} w="full">
                            <Button
                                colorScheme={'orange'}
                                _dark={{
                                    bg: 'orange.600',
                                    color: 'white',
                                    _hover: {
                                        bg: 'orange.700',
                                    }
                                }}
                                variant={'solid'}
                                type={'submit'}
                                isDisabled={
                                    state.anio === '' ||
                                    state.proceso === '' ||
                                    state.area === ''
                                }
                                leftIcon={
                                    <Search2Icon />
                                }
                                w={'full'}
                            >
                                CONSULTAR
                            </Button>
                            <Button
                                colorScheme={'red'}
                                _dark={{
                                    bg: 'red.600',
                                    color: 'white',
                                    _hover: {
                                        bg: 'red.700',
                                    }
                                }}
                                variant={'solid'}
                                onClick={handleReset}
                                textColor={'white'}
                                leftIcon={
                                    <BiReset color={'white'} fontSize={24} />
                                }
                                w={'full'}
                            >
                                RESTABLECER SELECCIONES
                            </Button>
                        </Stack>

                    </Stack>
                </form>
            </Box>
            <Box
                mt={4}
                p={2}
                bg={'white'}
                _dark={{ bg: 'primary.800', borderWidth: '1px', borderColor: 'gray.1000' }}
                borderRadius={'lg'}
                boxShadow={'base'}
                fontFamily={`"Fira Sans Condensed", sans-serif`}
            >
                <Text
                    fontWeight={'900'}
                    as='h2'
                    fontSize={'xl'}
                    textColor={'orange.500'}
                    textAlign={'center'}
                >
                    RESULTADOS
                </Text>

                <Divider my={2} />

                {
                    resultados.length > 0 ? (
                        <Box borderRadius={'lg'} p={2}>
                            {
                                isDesktop ? (
                                    <DataTableExtensions
                                        {...tableData}
                                        print={false}
                                        exportHeaders={true}
                                        filterPlaceholder="BUSCAR"
                                        numberOfColumns={7}
                                        fileName={`PUNTAJES ${ new Date() }`}
                                    >
                                        <DataTable
                                            defaultSortField="createdAt"
                                            defaultSortAsc={false}
                                            defaultSortOrder="desc"
                                            pagination={true}
                                            paginationIconFirstPage={< Icon as={FiChevronsLeft} boxSize={6} _dark={{ color: "gray.300" }} />}
                                            paginationIconLastPage={< Icon as={FiChevronsRight} boxSize={6} _dark={{ color: "gray.300" }} />}
                                            paginationIconPrevious={< Icon as={FiChevronLeft} boxSize={6} _dark={{ color: "gray.300", _hover: { color: "white" } }} />}
                                            paginationIconNext={< Icon as={FiChevronRight} boxSize={6} _dark={{ color: "gray.300", _hover: { color: "white" } }} />}
                                            paginationRowsPerPageOptions={[5, 10, 25, 50]}
                                            paginationPerPage={10}
                                            paginationComponentOptions={{
                                                rowsPerPageText: 'Filas por pagina:',
                                                rangeSeparatorText: 'de',
                                                noRowsPerPage: false,
                                                selectAllRowsItem: true,
                                                selectAllRowsItemText: 'Todos',
                                            }}
                                            theme={themeTable}
                                            customStyles={customStyles}
                                            pointerOnHover={true}
                                            responsive={true}
                                            noDataComponent={<Text mb={4} fontSize="lg">NO HAY DATOS PARA MOSTRAR</Text>}
                                        />
                                    </DataTableExtensions>
                                ) : (
                                    <Stack direction={{ base: 'column', lg: 'row' }} w="full" justifyContent={'space-between'}>
                                        {
                                            resultados.map((item, index) => (
                                                <Box 
                                                    key={index}
                                                    p={5}
                                                    borderRadius={'lg'}
                                                    bg={'white'}
                                                    _dark={{ bg: 'primary.900', borderWidth:"1px", borderColor:"gray.1000" }}
                                                    boxShadow={'base'}
                                                    w="full"
                                                >
                                                    <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                                        <Text fontSize={'md'} fontWeight={'bold'}>AÑO</Text>
                                                        <Text fontSize={'sm'}>{item.anio}</Text>
                                                    </Stack>
                                                    <Divider my={2} />
                                                    <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                                        <Text fontSize={'md'} fontWeight={'bold'}>PROCESO</Text>
                                                        <Text fontSize={'sm'}>{item.proceso + ' ' + item.fase}</Text>
                                                    </Stack>
                                                    <Divider my={2} />
                                                    <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                                        <Text fontSize={'md'} fontWeight={'bold'}>CARRERA</Text>
                                                        <Text fontSize={'sm'}>{item.carrera}</Text>
                                                    </Stack>
                                                    <Divider my={2} />
                                                    <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                                        <Text fontSize={'md'} fontWeight={'bold'}>PUNTAJE MÍNIMO</Text>
                                                        <Text fontSize={'sm'}>{item.puntaje_minimo}</Text>
                                                    </Stack>
                                                    <Divider my={2} />
                                                    <Stack direction={{ base: 'row', lg: 'column' }} justifyContent={'space-between'}>
                                                        <Text fontSize={'md'} fontWeight={'bold'}>PUNTAJE MÁXIMO</Text>
                                                        <Text fontSize={'sm'}>{item.puntaje_maximo}</Text>
                                                    </Stack>
                                                </Box>
                                            ))
                                        }
                                    </Stack>
                                )
                            }
                        </Box>
                    ) : (
                        <Text textAlign={'center'}>
                            {
                                isSuccess === 'initial'
                                    ? 'Seleccione las opciones y presione el boton consultar'
                                    : isSuccess === 'false'
                                        ? 'No se encontraron resultados'
                                        : ''
                            }
                        </Text>
                    )
                }
            </Box>
        </Box>
    )
}

export default VerPuntajes;