import React from 'react';
import { Box, Icon, Image, useBreakpointValue } from '@chakra-ui/react';
import Carousel from 'nuka-carousel/lib/carousel';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import BannerUNI from '../../assets/img/banner-UNI-verano-repaso-2023-01.webp';
import BannerSanMarcos from '../../assets/img/banner-san-marcos-verano-repaso-2023-01.webp';
import BannerCatolica from '../../assets/img/banner-catolica-verano-repaso-2023-01.webp';
import BannerUNImobile from '../../assets/img/banner-UNI-verano-repaso-2023-01-MOBILE.webp';
import BannerSanMarcosmobile from '../../assets/img/banner-san-marcos-verano-repaso-2023-01-MOBILE.webp';
import BannerCatolicamobile from '../../assets/img/banner-catolica-verano-repaso-2023-01-MOBILE.webp';

const Carrousel = () => {

    const isDesktop = useBreakpointValue({
        base: false,
        sm: true,
        md: true,
        lg: true,
    });

    return (
        <Box mt={'57px'} mx={0}>
            {isDesktop ? (
                <Carousel
                    wrapAround={true}
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ff6334',
                    }}
                    autoplay={true}
                    animation='zoom'
                    defaultControlsConfig={{
                        Dots: {
                            display: 'none'
                        },
                        pagingDotsStyle: {
                            // display: 'none',
                            fill: 'white',
                            fillOpacity: 0.9,
                            stroke: 'none',
                            marginLeft: 10,
                            strokeWidth: 0,
                        },
                        nextButtonText: <Icon as={ChevronRightIcon} fontSize={'6rem'} _hover={{ textColor: 'gray.300' }} />,
                        prevButtonText: <Icon as={ChevronLeftIcon} fontSize={'6rem'} _hover={{ textColor: 'gray.300' }} />,
                        pagingDotsContainerClassName: 'paging-dots',
                        pagingDotsClassName: 'paging-dot',
                        nextButtonClassName: 'next-button',
                        prevButtonClassName: 'prev-button',
                        nextButtonStyle: {
                            border: 'none',
                            background: 'none',
                            color: 'white',
                            fontWeight: 'bold',
                            outline: 'none',
                            cursor: 'pointer',
                        },
                        prevButtonStyle: {
                            border: 'none',
                            background: 'none',
                            color: 'gray.200',
                            fontWeight: 'bold',
                            outline: 'none',
                            cursor: 'pointer',
                        },
                    }}
                    dragging={true}
                    pauseOnHover={true}
                    swiping={true}
                    emulateTouch={true}
                    autoFocus={true}
                    showArrows={true}
                    showStatus={true}
                    showIndicators={true}
                    showThumbs={true}
                >
                    <Image w={'full'} h={'full'} src={BannerUNI} alt="AGYL ACADEMY OFERTAS"/>
                    <Image w={'full'} h={'full'} src={BannerCatolica} alt="AGYL ACADEMY OFERTAS"/>
                    <Image w={'full'} h={'full'} src={BannerSanMarcos} alt="AGYL ACADEMY OFERTAS"/>
                </Carousel>
            ) : (
                <Carousel
                    wrapAround={true}
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ff6334',
                    }}
                    autoplay={true}
                    // animation='fade'
                    autoplayInterval={3000}
                    defaultControlsConfig={{
                        Dots: {
                            display: 'none'
                        },
                        pagingDotsStyle: {
                            display: 'none',
                            fill: 'white',
                            fillOpacity: 0.9,
                            stroke: 'none',
                            marginLeft: 10,
                            strokeWidth: 0,
                        },
                        nextButtonText: <Icon as={ChevronRightIcon} fontSize={'3rem'} _hover={{ textColor: 'gray.300' }} />,
                        prevButtonText: <Icon as={ChevronLeftIcon} fontSize={'3rem'} _hover={{ textColor: 'gray.300' }} />,
                        pagingDotsContainerClassName: 'paging-dots',
                        pagingDotsClassName: 'paging-dot',
                        nextButtonClassName: 'next-button',
                        prevButtonClassName: 'prev-button',
                        nextButtonStyle: {
                            border: 'none',
                            background: 'none',
                            color: 'white',
                            fontSize: '2em',
                            fontWeight: 'bold',
                            outline: 'none',
                            cursor: 'pointer',
                        },
                        prevButtonStyle: {
                            border: 'none',
                            background: 'none',
                            color: 'white',
                            fontSize: '2em',
                            fontWeight: 'bold',
                            outline: 'none',
                            cursor: 'pointer',
                        },
                    }}
                    dragging={true}
                    pauseOnHover={true}
                    swiping={true}
                    emulateTouch={true}
                    autoFocus={true}
                    showArrows={true}
                    showStatus={true}
                    showIndicators={true}
                    showThumbs={true}
                >
                    <Image w={'full'} h={'full'} src={BannerUNImobile} alt="AGYL ACADEMY OFERTAS"/>
                    <Image w={'full'} h={'full'} src={BannerCatolicamobile} alt="AGYL ACADEMY OFERTAS"/>
                    <Image w={'full'} h={'full'} src={BannerSanMarcosmobile} alt="AGYL ACADEMY OFERTAS"/>
                </Carousel>
            )}
        </Box>
    )
}

export default Carrousel;