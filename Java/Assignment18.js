const orders = [
    { id: 1, customer: "Ali", items: ["Laptop", "Mouse"], total: 125000, paid: true, rating: 4.5 },
    { id: 2, customer: "Sara", items: ["Shirt"], total: 2500, paid: false, rating: 3.8 },
    { id: 3, customer: "Bilal", items: ["Phone", "Case"], total: 82000, paid: true, rating: 4.7 }
];
console.log("First Customer:", orders[0].customer);
orders[1].total = 3000;
console.log("Updated Total:", orders[1].total);

orders.pop();
console.log("After Removing Last Order:", orders);

let findOrder = orders.find(order => order.id === 1);
console.log("Order by ID:", findOrder);

let unpaidOrder = orders.find(order => order.paid === false);
console.log("First Unpaid Order:", unpaidOrder);

let checkTotal = orders.some(order => order.total > 100000);
console.log("Any Order Above 100000:", checkTotal);

let names = orders.map(order => order.customer);
console.log("Customer Names:", names);

orders.forEach(order => {
    console.log("Order:", order);
});

let paidOrders = orders.filter(order => order.paid === true);
console.log("Paid Orders:", paidOrders);

let revenue = paidOrders.reduce((sum, order) => sum + order.total, 0);
console.log("Total Revenue:", revenue);

let oneOrder = orders[0];

console.log("Object Keys:", Object.keys(oneOrder));
console.log("Object Values:", Object.values(oneOrder));
console.log("Object Entries:", Object.entries(oneOrder));

function orderSummary(orders) {

    let totalOrders = orders.length;

    let totalRevenue = orders
        .filter(order => order.paid === true)
        .reduce((sum, order) => sum + order.total, 0);

    let topRated = orders.reduce((top, order) =>
        order.rating > top.rating ? order : top
    );

    let unpaid = orders.filter(order => order.paid === false);

    return {
        totalOrders,
        totalRevenue,
        topRated,
        unpaid
    };
}

console.log("Order Summary:", orderSummary(orders));