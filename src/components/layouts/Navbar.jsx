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
    Link
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi';
import { ColorModeSwitcher } from '../../theme/ColorModeSwitcher';
import LOGO from '../../assets/img/logo.svg';
import "@fontsource/fira-sans-condensed"

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
                            <Link href={'/'}>
                                <Stack spacing={2} direction="row">
                                    <Image src={LOGO} maxW={8} alignSelf={'center'} />
                                    <Stack direction={'row'}>
                                        <Heading alignSelf={'center'} as={'h2'} size={'lg'} fontWeight={'extrabold'}>AGYL</Heading>
                                        <Heading size={'sm'} alignSelf={'center'} fontWeight={'semibold'}>academy</Heading>
                                    </Stack>
                                </Stack>
                            </Link>
                            <ButtonGroup variant="link" spacing="8" fontFamily={`"Fira Sans Condensed", sans-serif`}>
                                {['!NUEVOS CICLOS', 'BLOG', 'TUTORIALES', 'NOSOTROS', 'MAS INFORMACIÓN'].map((item) => (
                                    <Button key={item}>{item}</Button>
                                ))}
                            </ButtonGroup>
                            <HStack spacing="3">
                                <ColorModeSwitcher />
                            </HStack>
                        </Flex>
                    ) : (
                        <Flex justify="space-between" flex="1">
                                <Stack spacing={2} direction="row">
                                    <IconButton
                                        variant="ghost"
                                        icon={<FiMenu fontSize="1.25rem" />}
                                        size={'md'}
                                        rounded={'full'}
                                        aria-label="Open Menu"
                                    />
                                    <Link href={'/'} alignSelf="center">
                                        <Stack spacing={1} direction="row">
                                            <Image src={LOGO} maxW={6} />
                                            <Heading textAlign='center' alignSelf="center" as={'h2'} size={'md'} fontWeight={'extrabold'}>AGYL</Heading>
                                            <Heading size={'sm'} alignSelf="center" fontWeight={'semibold'}>academy</Heading>
                                        </Stack>
                                    </Link>
                                </Stack>
                            <ColorModeSwitcher />
                        </Flex>
                    )}
                </HStack>
            </Container>
        </Box>
    )
}
