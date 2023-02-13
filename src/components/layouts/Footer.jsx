import { Box, Container, ButtonGroup, IconButton, Stack, Text, Image } from '@chakra-ui/react';
import { FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import LOGO from '../../assets/img/logo.svg';

export const Footer = (props) => {
    return (
        <Box as="footer" role="contentinfo" bg="primary.800" color="white" _dark={{ bg: 'primary.800', color: 'white' }} {...props}>
            <Container
                maxW={'8xl'}
                py={{
                    base: '4',
                    lg: '5',
                }}
            >
                <Stack
                    spacing={{
                        base: '4',
                        md: '5',
                    }}
                >
                    <Stack justify="space-between" direction="row" align="center">
                        <Image src={LOGO} boxSize={20} />
                        <ButtonGroup>
                            <IconButton
                                as="a"
                                href="#"
                                aria-label="LinkedIn"
                                icon={<FaLinkedin fontSize="1.25rem" />}
                                colorScheme='linkedin'
                                variant="ghost"
                            />
                            <IconButton
                                as="a"
                                href="#"
                                aria-label="WhatsApp"
                                icon={<FaWhatsapp fontSize="1.25rem" />}
                                colorScheme='whatsapp'
                                variant="ghost"
                            />
                            <IconButton
                                as="a"
                                href="#"
                                aria-label="Twitter"
                                icon={<FaTwitter fontSize="1.25rem" />}
                                colorScheme='twitter'
                                variant="ghost"
                            />
                        </ButtonGroup>
                    </Stack>
                    <Text fontSize="sm" color="subtle">
                        &copy; {new Date().getFullYear()} AgylCode, Inc. All rights reserved.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}