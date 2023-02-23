import { TokenModel } from '@/models/TokenModel';
import { Box, BoxExtendedProps, DataTable, Text } from 'grommet';
import * as React from 'react';

export interface ITokenDetailsProps extends BoxExtendedProps {
    token: TokenModel
}

const TokenDetails = ({ token, ...rest }: ITokenDetailsProps) => {

    const columns = [
        { property: 'property' },
        { property: 'value' },
    ];

    const data = [
        { property: <Text>{'Token ID'}</Text>, value: <Text>{token.tokenId}</Text> },
        { property: <Text>{'Image MD5'}</Text>, value: <Text>{token.imageMd5}</Text> },
        { property: <Text>{'Body Type'}</Text>, value: <Text>{token.bodyType}</Text> },
        { property: <Text>{'URI External'}</Text>, value: <Text>{token.uriExternal}</Text> },
        { property: <Text>{'Created At'}</Text>, value: <Text>{token.createdAt.toLocaleString()}</Text> },
        { property: <Text>{'Chain ID'}</Text>, value: <Text>{token.chainId}</Text> },
        { property: <Text>{'Tx Hash'}</Text>, value: <Text>{token.txHash}</Text> },
        { property: <Text>{'First Owner'}</Text>, value: <Text>{token.firstOwner.id}</Text> },
        { property: <Text>{'Current Owner'}</Text>, value: <Text>{token.currentOwner.id}</Text> },
        { property: <Text>{'Collection'}</Text>, value: <Text>{token.collection.name}</Text> },
        { property: <Text>{'Block Number'}</Text>, value: <Text>{token.blockNumber}</Text> },
    ];

    return (
        <Box pad="medium" align='center' gap="medium" fill {...rest}>
            <Text size="large" weight="bold">
                Token Details
            </Text>
            <Box overflow='scroll'>
                <DataTable columns={columns} data={data} />
            </Box>
        </Box>
  )
}

export default TokenDetails
