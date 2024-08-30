Feature: Product page,order product

    Background: Navigate to the Website
        Given I navigate to the Website
        When I navigate to the product page

    Scenario: Verify All Products and product detail page
        And I verify that details is visible

    Scenario: Verify a single product
        When I navigate to a single product
        And I verify the product is available
        And I add the item to cart
        Then I search for an item
        
    Scenario: Place and order on a product
        When I navigate to a single product
        And I add the item to my cart
        Then I view my cart
        And I verify my item can be deleted from cart
        Then I readd the item to my cart
        And I proceed to checkout
