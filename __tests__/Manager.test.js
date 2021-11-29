const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Menager', '2', 'email@gmail.com', '420');

    expect(manager.name).toBe('Menager');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('email@gmail.com');
    expect(manager.officeNumber).toBe('420');
});

test('get name from manager object', () => {
    const manager = new Manager('Menager', '2', 'email@gmail.com', '420');

    expect(manager.getName()).toBe('Menager');
});

test('get id from manager object', () => {
    const manager = new Manager('Menager', '2', 'email@gmail.com', '420');

    expect(manager.getId()).toBe('2');
});

test('get email from manager object', () => {
    const manager = new Manager('Menager', '2', 'email@gmail.com', '420');

    expect(manager.getEmail()).toBe('email@gmail.com');
});

test('get office number from manager object', () => {
    const manager = new Manager('Menager', '2', 'email@gmail.com', '420');

    expect(manager.getOfficeNumber()).toBe('420');
});

test('get role from manager object', () => {
    const manager = new Manager('Menager', '2', 'email@gmail.com', '420');

    expect(manager.getRole()).toBe('Manager');
});