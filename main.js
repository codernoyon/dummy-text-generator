const dummyText = [
    'Chocolate cake sweet lollipop cookie sweet roll topping danish oat cake. Oat cake jujubes oat cake soufflé pie chocolate tootsie roll. Lemon drops ice cream cheesecake chocolate bar topping lollipop chupa chups sugar plum. Fruitcake oat cake cake danish marzipan sweet roll jujubes lollipop gingerbread.',
    'Tootsie roll tiramisu ice cream bear claw topping. Sweet dragée macaroon marshmallow muffin jelly-o pudding bear claw. Dessert cotton candy icing ice cream jelly-o tiramisu biscuit. Gummi bears halvah tiramisu marzipan chocolate soufflé chocolate.',
    'Powder sweet caramels caramels macaroon cake. Caramels cupcake cheesecake bear claw cake marshmallow dessert. Donut cake sesame snaps liquorice danish soufflé. Chupa chups dragée donut marzipan tootsie roll.',
    'Topping gummi bears topping pie sweet biscuit icing bonbon jujubes. Oat cake tootsie roll cookie wafer brownie icing candy. Caramels muffin wafer cookie carrot cake sweet marshmallow lollipop.',
    'Powder macaroon jelly-o jujubes soufflé. Fruitcake dragée halvah sugar plum tart. Sugar plum fruitcake sweet dessert soufflé fruitcake pudding tiramisu.',
    'Soufflé soufflé croissant cookie macaroon. Chocolate bar liquorice sweet apple pie sugar plum muffin. Cookie jujubes sweet shortbread liquorice cookie halvah lollipop chocolate bar. Liquorice pastry tiramisu tiramisu powder.',
    'Sugar plum pastry chupa chups tart pastry donut muffin. Oat cake cupcake dragée soufflé sweet roll marzipan gummies lollipop. Dragée lollipop toffee caramels cheesecake danish.',
    'Dragée wafer dessert jelly marshmallow powder jelly beans toffee brownie. Chocolate cake dragée cookie croissant ice cream bear claw topping sesame snaps. Halvah candy canes muffin muffin liquorice tiramisu biscuit.',
    'Sesame snaps liquorice icing jujubes powder soufflé. Caramels carrot cake pastry sugar plum cake candy toffee ice cream. Apple pie chocolate cake marzipan carrot cake gingerbread.'
];

// Selecting Elements

const form = document.querySelector('#form');
const paragraphAmount = document.querySelector('#paragraph-amount');
const result = document.querySelector('#result');

// Event Listener

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const value = parseInt(paragraphAmount.value);
    const random = Math.floor(Math.random() * dummyText.length);

    // for empty, negative and greter tna 9
    if (isNaN(value) || value <= 0 || value > 9){
    result.innerHTML = `<p>${dummyText[random]}</p>`;
    } else {
        const sliceArray = dummyText.slice(0, value);
        const finalArray = sliceArray.map(function (singleDummy) {
            return `<p>${singleDummy}</p>`;
        }).join('');

        // display final dummy text
        result.innerHTML = finalArray;
    }



});