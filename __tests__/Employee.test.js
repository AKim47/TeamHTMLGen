const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Himployee', '1', 'email@gmail.com');

    expect(employee.name).toBe('Himployee');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('email@gmail.com');
});

test('get name from employee object', () => {
    const employee = new Employee('Himployee', '1', 'email@gmail.com');

    expect(employee.getName()).toBe('Himployee');
});

test('get id from employee object', () => {
    const employee = new Employee('Himployee', '1', 'email@gmail.com');

    expect(employee.getId()).toBe('1');
});

test('get email from employee object', () => {
    const employee = new Employee('Himployee', '1', 'email@gmail.com');

    expect(employee.getEmail()).toBe('email@gmail.com');
});

test('get role from employee object', () => {
    const employee = new Employee('Himployee', '1', 'email@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});