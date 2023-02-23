import { useState, useEffect } from 'react';
import { Box, Spinner, Text, Grid, Grommet } from 'grommet';
import { useContainer } from '@/hooks/useContainer';
import useQuery from '@/hooks/useQuery';
import TokenVisualizer from '@/components/TokenVisualizer';
import { TokenModel } from '@/models/TokenModel';
import TokenDetails from '@/components/TokenDetails';
import useSize from '@/hooks/useSize';

const TokenPage = () => {
    const container = useContainer()
    const size = useSize()
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
        <Box align="center">
            {isLoading && <Spinner size="medium" />}
            {error && <Text color="status-error">{error}</Text>}
            <Box fill direction='row' justify='between'>
                {token && (
                    <Grid
                        columns={{
                            count: size !== 'large' ? 1:2,
                            size: 'auto',
                        }}
                        gap="small"
                        width={{ min: 'medium' }}
                    >
                        <TokenVisualizer imageSrc={token.uri1024} />
                        <TokenDetails token={token} width='medium' />
                    </Grid>
                )}
            </Box>
        </Box>
    )
}

export default TokenPage;
