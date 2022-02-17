describe('Characters app test', () => {
	const TOTAL_CHARACTERS = 18;
	it('Can open the app', () => {
		cy.visit('http://localhost:8080/');
		cy.wait(2000);
	});

	it('can find a list of 18 characters', () => {
		cy.get('.card').should('have.length', TOTAL_CHARACTERS);
	});

	it('Can enter a query in the search bar', () => {
		const searchInput = cy.get('input[type=search]');

		searchInput.type('Iron man').should('have.value', 'Iron man');
		cy.get('[type="search"]').clear();
	});

	it('Should search typed character on click button', () => {
		const searchInput = cy.get('input[type=search]');

		searchInput.type('Iron man');

		const searchButton = cy.get('.search .button');

		searchButton.click();

		cy.wait(3000);

		cy.get('.card').should('have.length', 1);

		cy.get('[type="search"]').clear();
	});

	it('Should get No results', () => {
		const searchInput = cy.get('input[type=search]').type('characterNotExist');

		searchInput.type('characterNotExist');

		const searchButton = cy.get('.search .button');

		searchButton.click();

		cy.wait(3000);

		cy.get('.noData').should('have.text', 'No results :(');
	});
});
