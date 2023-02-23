import React from 'react'
import TokenDetails from './TokenDetails'
import { TokenModel } from '@/models/TokenModel';

describe('TokenDetails component', () => {
    const token : TokenModel = {
        tokenId: '123',
        imageMd5: 'abc',
        bodyType: 'human',
        uriExternal: 'https://example.com',
        createdAt: new Date(),
        chainId: 'eth',
        txHash: '0x123',
        firstOwner: { id: 'owner1' },
        currentOwner: { id: 'owner2' },
        collection: {
            address: 'address',
            symbol: 'symbol',
            name: 'My Collection' ,
            detail: {
                alias: 'alias',
                checkmark: 1,
                icon: 'icon',
                owner: 'owner',
                supertype: 'supertype',
                type: 'type'
            }
        },
        blockNumber: 12345,
        body: 'body',
        id: '123',
        tokenAddress: 'tokenAddress',
        uri256: 'uri256',
        uri1024: 'uri1024'
    };

    beforeEach(() => {
        cy.mount(<TokenDetails token={token} />);
    });

    it('displays the title "Token Details"', () => {
        cy.contains('Token Details').should('be.visible');
    });

    it('displays a table with token details', () => {
        const expectedRows = [
            ['Token ID', token.tokenId],
            ['Image MD5', token.imageMd5],
            ['Body Type', token.bodyType],
            ['URI External', token.uriExternal],
            ['Created At', token.createdAt.toLocaleString()],
            ['Chain ID', token.chainId],
            ['Tx Hash', token.txHash],
            ['First Owner', token.firstOwner.id],
            ['Current Owner', token.currentOwner.id],
            ['Collection', token.collection.name],
            ['Block Number', token.blockNumber],
        ];

        cy.get('table').within(() => {
            cy.get('thead th').should('have.length', 2);
            cy.get('tbody tr').should('have.length', expectedRows.length);
            expectedRows.forEach((rowText, i) => {
                cy.get('tbody tr').eq(i).within(() => {
                    cy.get('th div').eq(0).should('have.text', rowText[0]);
                    cy.get('td div').eq(0).should('have.text', rowText[1]);
                });
            });
        });
    });
});
