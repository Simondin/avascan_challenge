import { useState } from 'react';
import { Image, Box, Layer } from 'grommet';
import styles from './TokenVisualizer.module.css'

export interface ITokenVisualizerProps {
    imageSrc: string
}

const TokenVisualizer = ({ imageSrc } : ITokenVisualizerProps) => {
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <Box align="center" margin='medium' className={styles.visualizer}>
            {imageSrc && (
                <>
                    <Image  src={imageSrc} fit="contain" onClick={() => setShowModal(true)} />
                    {showModal && (
                        <Layer
                            onEsc={closeModal}
                            onClickOutside={closeModal}
                            animation='slide'
                            responsive={false}
                        >
                            <Box
                                align="center"
                                width='large'
                                height='large'
                            >
                                <Image src={imageSrc} fit="cover" className={styles.zoomVisualizer} onClick={(closeModal)}/>
                            </Box>
                        </Layer>
                    )}
                </>
            )}
        </Box>
    );
};

export default TokenVisualizer;
