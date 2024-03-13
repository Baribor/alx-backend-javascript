export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent:Student = {
  firstName: 'James',
  lastName: 'Adams',
  age: 17,
  location: 'Washington'
}

const secondStudent:Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'Florida'
}

const students: Student[] = [
  firstStudent,
  secondStudent,
]