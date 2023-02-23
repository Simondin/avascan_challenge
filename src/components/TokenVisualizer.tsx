import { useState } from 'react';
import { Image, Box, Layer, BoxExtendedProps , Text} from 'grommet';
import styles from './TokenVisualizer.module.css'
import { DocumentMissing } from 'grommet-icons';
import useSize from '@/hooks/useSize';

export interface ITokenVisualizerProps extends BoxExtendedProps {
    imageSrc: string
}

const TokenVisualizer = ({ imageSrc, ...rest } : ITokenVisualizerProps) => {
    const [showModal, setShowModal] = useState(false)
    const size = useSize()

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <Box align="center" justify='center' direction='row' margin='medium' {...rest}>
            {imageSrc
                ?
                    <Box className={styles.visualizer}>
                        <Image
                            src={imageSrc}
                            fit="cover"
                            onClick={() => setShowModal(true)}
                            data-cy="token-thumbnail"
                        />
                    </Box>
                :
                <Box align='center' justify='center' gap='medium' fill background={{ color: 'grey' }} round='medium'>
                        <DocumentMissing size='large' />
                        <Text>Token not found</Text>
                    </Box>
            }

            {showModal && (
                <Layer
                    onEsc={closeModal}
                    onClickOutside={closeModal}
                    animation='slide'
                    responsive={false}
                    full={size === 'small'}
                    data-cy="token-visualizer-layer"
                >
                    <Box
                        align="center"
                        width='large'
                        height='large'
                        fill={size === 'small'}
                    >
                        <Image src={imageSrc} fit="cover" className={styles.zoomVisualizer} onClick={(closeModal)}/>
                    </Box>
                </Layer>
            )}
        </Box>
    );
};

export default TokenVisualizer;
