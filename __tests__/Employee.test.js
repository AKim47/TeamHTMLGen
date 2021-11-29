const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Employee', '1', 'email@gmail.com');

    expect(employee.name).toBe('Employee');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('email@gmail.com');
})