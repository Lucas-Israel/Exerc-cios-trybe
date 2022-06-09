const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = (a) => {
//   const nome = a.name;
//   const phone = a.phoneNumber;
//   const rua = a.address.street;
//   const nCasa = a.address.number;
//   const ap = a.address.apartment;
//   const entregador = a.order.delivery.deliveryPerson;
//   console.log(`Olá ${entregador}, entrega para: ${nome}, Telefone: ${phone}, ${rua}, Nº: ${nCasa}, AP: ${ap}`);
// }

// customerInfo(order);

// Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

order.name = 'Luiz Silva';
order.disconto = 5;

const orderModifier = (a) => {
  const nome = a.name;
  const com = Object.keys(a.order.pizza);
  const com1 = Object.values(a.order.pizza);
  const drink = a.order.drinks.coke.type;
  const drinkPrice = a.order.drinks.coke.price;
  const disconto = a.disconto;
  const prices = drinkPrice + com1[0].price + com1[1].price - disconto;
  console.log(`Olá ${nome}, o total do seu pedido de ${com[0]}, ${com[1]} e ${drink} é de R$ ${prices} `);
}

orderModifier(order);