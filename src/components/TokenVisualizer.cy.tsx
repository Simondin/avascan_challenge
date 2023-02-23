import React from 'react'
import TokenVisualizer from './TokenVisualizer'


const url = 'https://imgproxy-mainnet.avascan.com/mSBH7lNXqMvjL7uLW3r3QeaqFlat0LsjOvmXBKT3UJA/thumb_1024/czM6Ly9hdmFzY2FuLW1haW5uZXQtbmZ0L2VyYzcyMS80MzExNC8wNS80MC9lNC9lZS8wYzVjZGJhMzQ3YzJmMGUwMTFhY2Y4NjUxYmI3MGViOS84MDA1LnBuZw'

describe('TokenVisualizer component', () => {
    it('Displays "Token not found" when imageSrc is null', () => {
        const props = { imageSrc: '' };
        cy.mount(<TokenVisualizer {...props} />);
        cy.contains('Token not found');
    });

    it('displays an image when imageSrc is provided', () => {
        const props = { imageSrc: url };
        cy.mount(<TokenVisualizer {...props} />);
        cy.get('img').should('have.attr', 'src', props.imageSrc);
    });

    it('opens a modal with a zoomed image when the image is clicked', () => {
        const props = { imageSrc: url };
        cy.mount(<TokenVisualizer {...props} />);
        cy.get('img').click();
        cy.get('[data-cy=token-visualizer-layer]').should('exist');
        cy.get('[data-cy=token-visualizer-layer] img').should('have.attr', 'src', props.imageSrc);
    });

    it('closes the modal when clicked outside or on the Esc key', () => {
        const props = { imageSrc: url };
        cy.mount(<TokenVisualizer {...props} />);
        cy.get('[data-cy=token-thumbnail]').click();
        cy.get('[data-cy=token-visualizer-layer]').click('topRight');
        cy.get('[data-cy=token-visualizer-layer]').should('not.exist');
        cy.get('[data-cy=token-thumbnail]').click();
        cy.get('body').type('{esc}');
        cy.get('[data-cy=token-visualizer-layer]').should('not.exist');
    });
});
