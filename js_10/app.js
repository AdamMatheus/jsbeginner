const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    citiesLived: ['New York', 'Paris', 'London'],
    location: {
      city: 'New York',
      temp: 92,
    },
    2021: 'Clarusway',
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    getFullName2() {
      return `${this.firstName} ${this.lastName}`;
    },
    aMethod: () => {
      return 'Hello';
    },
    printCitiesLived() {
      this.citiesLived.forEach(city => {
        console.log(this.firstName + ' has lived in ' + city);
      });
    },
  };
  // console.log(person.getFullName2());
  
  const print2 = person.printCitiesLived;
  // print();
  person.printCitiesLived();
  // console.log(this);
  // print2();

  class Pet {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    walk() {
      console.log('Im walking');
    }
    speak() {
      return 'I like humans';
    }
  }
  
  class Cat extends Pet {
    #weight = 5;
  
    get weight() {
      return this.#weight;
    }
  
    set weight(value) {
      if (value < 0) {
        this.weight = 3;
      } else {
        this.#weight = value;
      }
    }
    constructor(name, age, color) {
      super(name, age);
      this.color = color;
    }
    speak() {
      let result = super.speak();
      result += ' and I like to meow';
      return this.#weight;
    }
  }
  
  const muezza = new Cat('Müezza', 2, 'gri');
  // muezza.weight = 5;
  // console.log(muezza);
  console.log(muezza.speak());
  // muezza.walk();
  muezza.weight = -5;
  console.log(muezza.weight);
  console.log(object);