export const cards = reactive([
  {
    id: 1,
    title: 'Chicken Hell',
    status: {
      id: 1,
      name: 'On The Way',
    },
    img: '/_nuxt/assets/images/Purchases/product1.png',
    time: '3:09',
  },
  {
    id: 2,
    title: 'Swe Dish',
    status: {
      id: 2,
      name: 'Delivered',
    },
    img: '/_nuxt/assets/images/Purchases/product2.png',
    time: 'Yesterday',
  },
  {
    id: 3,
    title: 'Fish Hell Veg',
    status: {
      id: 3,
      name: 'Cancelled',
    },
    img: '/_nuxt/assets/images/Purchases/product3.png',
    time: 'Yesterday',
  },
]);

export const info = reactive([
  {
    id: 1,
    title: 'Expense',
    description: 'Increased By 10%',
    img: '/_nuxt/assets/images/Purchases/Info/expense.png',
    data: [
      {
        id: 1,
        name: 'January',
        date: 'Tue Jan 31 2023 21:11:13 GMT+0300 (Москва, стандартное время)',
        amountMoney: 900,
      },
      {
        id: 2,
        name: 'February',
        date: 'Tue Feb 28 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 650,
      },
      {
        id: 3,
        name: 'March',
        date: 'Fri Mar 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 650,
      },
      {
        id: 4,
        name: 'April',
        date: 'Sun Apr 30 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 820,
      },
      {
        id: 5,
        name: 'May',
        date: 'Wed May 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 730,
      },
      {
        id: 6,
        name: 'June',
        date: 'Fri Jun 30 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 940,
      },
      {
        id: 7,
        name: 'July',
        date: 'Mon Jul 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 500,
      },
      {
        id: 8,
        name: 'August',
        date: 'Thu Aug 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 1000,
      },
      {
        id: 9,
        name: 'September',
        date: 'Sat Sep 30 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 910,
      },
      {
        id: 10,
        name: 'October',
        date: 'Tue Oct 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 920,
      },
      {
        id: 11,
        name: 'November',
        date: 'Thu Nov 30 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 890,
      },
      {
        id: 12,
        name: 'December',
        date: 'Sun Dec 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 950,
      },
    ],
  },
  {
    id: 1,
    title: 'Vocher Usage',
    description: 'Increased By 5%',
    img: '/_nuxt/assets/images/Purchases/Info/vocher.png',
    data: [
      {
        id: 1,
        name: 'January',
        date: 'Tue Jan 31 2023 21:11:13 GMT+0300 (Москва, стандартное время)',
        amountMoney: 900,
      },
      {
        id: 2,
        name: 'February',
        date: 'Tue Feb 28 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 650,
      },
      {
        id: 3,
        name: 'March',
        date: 'Fri Mar 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 650,
      },
      {
        id: 4,
        name: 'April',
        date: 'Sun Apr 30 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 820,
      },
      {
        id: 5,
        name: 'May',
        date: 'Wed May 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 730,
      },
      {
        id: 6,
        name: 'June',
        date: 'Fri Jun 30 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 940,
      },
      {
        id: 7,
        name: 'July',
        date: 'Mon Jul 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 500,
      },
      {
        id: 8,
        name: 'August',
        date: 'Thu Aug 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 1000,
      },
      {
        id: 9,
        name: 'September',
        date: 'Sat Sep 30 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 910,
      },
      {
        id: 10,
        name: 'October',
        date: 'Tue Oct 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 920,
      },
      {
        id: 11,
        name: 'November',
        date: 'Thu Nov 30 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 890,
      },
      {
        id: 12,
        name: 'December',
        date: 'Sun Dec 31 2023 00:00:00 GMT+0300 (Москва, стандартное время)',
        amountMoney: 950,
      },
    ],
  },
]);

export const time = reactive([
  { name: 'Month', code: '1' },
  { name: 'Half a year', code: '2' },
  { name: 'Year', code: '3' },
]);
