describe( 'dnd on burger constructor', function () {
  before( function() {
   cy.visit( 'http://localhost:3000' );
  } );

 it( 'is dnd handle correct add ingredient', function() {
   cy.get( 'li[class^="IngredientItem_item"]' ).first()
     .trigger( 'dragstart' );

   cy.get( 'ul[class^="BurgerConstructor_item_list"]' )
     .trigger( 'dragenter' )
     .trigger( 'drop' );

   cy.get( '.constructor-element' ).should( 'be.exist' );
 } );
} );