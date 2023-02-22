import { useState } from 'react';
import { Image, Box, Layer } from 'grommet';
import styles from './TokenVisualizer.module.css'

export interface ITokenVisualizerProps {
    imageSrc: string
}

const TokenVisualizer = ({ imageSrc } : ITokenVisualizerProps) => {
    const [showModal, setShowModal] = useState(false)

    const handleImageClick = () => {
        setShowModal(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }

    return (
        <Box align="center" pad="medium" className={styles.visualizer}>
            {imageSrc && (
                <>
                    <Image src={imageSrc} fit="contain" onClick={handleImageClick} />
                    {showModal && (
                        <Layer
                            onEsc={handleModalClose}
                            onClickOutside={handleModalClose}
                            animation={true}
                            responsive={false}
                            style={{ cursor: 'zoomOut' }}
                        >
                            <Box align="center" width='large' height='large'>
                                <Image src={imageSrc} fit="cover" />
                            </Box>
                        </Layer>
                    )}
                </>
            )}
        </Box>
    );
};

export default TokenVisualizer;
