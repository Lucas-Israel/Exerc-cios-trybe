const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  // escreva filterPeople abaixo

  const filterPeople = (A, B, C = 1) => A.filter(e => ({name, bornIn, nationality} = e, nationality === B && bornIn/100 < C))

  console.log(filterPeople(people, 'Australian', 20));
