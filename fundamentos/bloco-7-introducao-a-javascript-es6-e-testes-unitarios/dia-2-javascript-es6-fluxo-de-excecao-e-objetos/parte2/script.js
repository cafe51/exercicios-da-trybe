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

  
  let nome = order.name;
  const telefone = order.phoneNumber;
  const endereco = `${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
  const margerita = Object.keys(order.order.pizza)[0];
  const pepperoni = Object.keys(order.order.pizza)[1];
  const CocaColaZero = order.order.drinks.coke.type;
  let total = order.payment.total;

  console.log(total)

  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá Ana Silveira, entrega para ${nome}, Telefone: ${telefone}, ${endereco}`); 
  }
  
  customerInfo(order)
  
  
  const orderModifier = (order) => {
      nome = 'Luiz Silva';
      total = 50;
      console.log(`Olá, ${nome}, o total do seu pedido de ${margerita}, ${pepperoni}, e ${CocaColaZero} é R$ ${total},00`)
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);

