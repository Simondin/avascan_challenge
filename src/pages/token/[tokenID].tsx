import { useState, useEffect } from 'react';
import { Box, Spinner, Text, Grid, Grommet } from 'grommet';
import { useContainer } from '@/hooks/useContainer';
import useQuery from '@/hooks/useQuery';
import TokenVisualizer from '@/components/TokenVisualizer';
import { TokenModel } from '@/models/TokenModel';
import TokenDetails from '@/components/TokenDetails';
import useSize from '@/hooks/useSize';
import { useRouter } from 'next/router'

const TokenPage = () => {
    const container = useContainer()
    const router = useRouter()
    const tokenID = router.query.tokenID as string
    const size = useSize()
    const [queryToken, isLoading] = useQuery(container.api.getTokenAPI)
    const [error, setError] = useState('')
    const [token, setToken] = useState<TokenModel | undefined>()


    useEffect(() => {
        if (!tokenID) {
            return
        }
        const loadData = async () => {
            return queryToken({ tokenID })
        }

        loadData()
            .then(data => setToken(data))
            .catch(e => setError(e.message))
    }, [tokenID])

    return (
        <Box align="center">
            {isLoading && <Spinner data-cy="spinner" size="medium" />}
            {error && <Text data-cy="error" color="status-error">{error}</Text>}
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
                        <TokenVisualizer data-cy="token-visualizer" imageSrc={token.uri1024} />
                        <TokenDetails data-cy="token-details" token={token} width='medium' />
                    </Grid>
                )}
            </Box>
        </Box>
    )
}

export default TokenPage;
