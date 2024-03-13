export const cpp:Subjects.Cpp = new Subjects.Cpp();
export const java:Subjects.Java = new Subjects.Java();
export const react:Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.setTeacher(cTeacher));

console.log('Java');
console.log(java.getRequirements());
console.log(java.setTeacher(cTeacher));

console.log('React');
console.log(react.getRequirements());
console.log(react.setTeacher(cTeacher));
