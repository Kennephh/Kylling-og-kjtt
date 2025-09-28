const ProductModule = (() => {

    const productList = [
        {
            id: 1,
            name: "Chipotle pølser",
            image: "chipotle-pølse.jpg",
            price: 49, /*In NOK*/
        },
        {
            id: 2,
            name: "Fårikålkjøtt",
            image: "faarikaalkjoett.jpg",
            price: 69, /*In NOK*/
        },
        {
            id: 3,
            name: "Grillpølser",
            image: "grillpoelser.jpg",
            price: 40, /*In NOK*/
        },
        {
            id: 4,
            name: "Karbonadedeig",
            image: "karbonadedeig.jpg",
            price: 75, /*In NOK*/
        },
        {
            id: 5,
            name: "Karbonader",
            image: "karbonader.jpg",
            price: 65, /*In NOK*/
        },
        {
            id: 6,
            name: "Kyllingkjøttdeig",
            image: "kyllingkjoettdeig.jpg",
            price: 70, /*In NOK*/
        },
        {
            id: 7,
            name: "Røkte Kjøttpølser",
            image: "roekte-kjoettpoelser.jpg",
            price: 55, /*In NOK*/
        },
        {
            id: 8,
            name: "Wienerpølser",
            image: "wienerpoelser.jpg",
            price: 40, /*In NOK*/
        }
    ];

    const getAll = () => {
        return structuredClone(productList);
    }

    const getById = (id) => {
        const productClicked = productList
        .find( product => product.id === id );
        return structuredClone(productClicked);
    }

    return{
        getAll,
        getById
    }
})();
export default ProductModule;