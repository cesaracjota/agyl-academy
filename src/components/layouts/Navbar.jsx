import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    Heading,
    IconButton,
    Image,
    Stack,
    useBreakpointValue,
    Link,
    Divider
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi';
import { ColorModeSwitcher } from '../../theme/ColorModeSwitcher';
import LOGO from '../../assets/img/logo.svg';
import "@fontsource/fira-sans-condensed";

export const Navbar = () => {

    const isDesktop = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box
            as="nav"
            boxShadow="base"
            role="navigation"
            bg="white"
            _dark={{ bg: 'primary.1000', borderBottomWidth: '.5px', borderColor: 'gray.900' }}
            pos={{ base: "fixed", md: "fixed" }}
            zIndex="2"
            top="0"
            align="space-between"
            w="full"
        >
            <Container
                py={2}
                maxW={'8xl'}
            >
                <HStack spacing="10" justify="space-between">
                    {isDesktop ? (
                        <Flex justify="space-between" flex="1">
                            <Link href={'/'} alignSelf="center">
                                <Stack spacing={0} direction="row">
                                    <Image src={LOGO} maxW={10} alignSelf={'center'} alt={'Agyl Academy'} />
                                    <Stack direction={'row'} spacing={1}>
                                        <Heading alignSelf={'center'} as={'h2'} size={'sm'} fontWeight={'extrabold'}>AGYL</Heading>
                                        <Heading size={'xs'} alignSelf={'center'} fontWeight={'normal'}>academy</Heading>
                                    </Stack>
                                </Stack>
                            </Link>
                            <ButtonGroup variant="link" spacing="8" fontFamily={`"Fira Sans Condensed", sans-serif`}>
                                {['!NUEVOS CICLOS', 'BLOG', 'TUTORIALES', 'NOSOTROS', 'MAS INFORMACIÓN'].map((item) => (
                                    <Button key={item} textColor="gray.600" _dark={{ color: 'gray.200' }}>{item}</Button>
                                ))}
                            </ButtonGroup>
                            <HStack spacing="3">
                                <ColorModeSwitcher />
                                <Divider orientation='vertical' h={6} />
                                <Button variant="ghost" colorScheme="gray" textColor={'gray.600'} _dark={{ color: 'white' }} fontWeight="bold" fontFamily={`"Fira Sans Condensed", sans-serif`}>
                                    Iniciar Sesión
                                </Button>
                            </HStack>
                        </Flex>
                    ) : (
                        <Flex justify="space-between" flex="1">
                            <Link href={'/'} alignSelf="center">
                                <Stack spacing={1} direction="row">
                                    <Image src={LOGO} maxW={8} alt={'Agyl Academy'} />
                                    <Heading textAlign='center' alignSelf="center" as={'h2'} size={'sm'} fontWeight={'extrabold'}>AGYL</Heading>
                                    <Heading size={'xs'} alignSelf="center" fontWeight={'normal'}>academy</Heading>
                                </Stack>
                            </Link>
                            <Stack spacing={1} direction="row">
                                <ColorModeSwitcher />
                                <IconButton
                                    variant="ghost"
                                    icon={<FiMenu fontSize="1.25rem" />}
                                    size={'md'}
                                    rounded={'full'}
                                    aria-label="Open Menu"
                                />
                            </Stack>
                        </Flex>
                    )}
                </HStack>
            </Container>
        </Box>
    )
}
