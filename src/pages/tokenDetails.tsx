import { useState, useEffect } from 'react';
import { Image, Box, Layer, Spinner, Text } from 'grommet';
import { useContainer } from '@/hooks/useContainer';
import useQuery from '@/hooks/useQuery';
import TokenVisualizer from '@/components/TokenVisualizer';
import { TokenModel } from '@/models/TokenModel';

const TokenDetails = () => {
    const container = useContainer()
    const [queryToken, isLoading] = useQuery(container.api.getTokenAPI)
    const [error, setError] = useState()
    const [token, setToken] = useState<TokenModel | undefined>()

    useEffect(() => {
        const loadData = async () => {
            return queryToken()
        }

        loadData()
            .then(data => setToken(data))
            .catch(e => setError(e))
    }, [])

    return (
        <Box align="center" pad="medium">
            {isLoading && <Spinner size="medium" />}
            {error && <Text color="status-error">{error}</Text>}
            {token && <TokenVisualizer imageSrc={token.uri1024} />}
        </Box>
    );
};

export default TokenDetails;
