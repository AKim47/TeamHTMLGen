const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Manager', '2', 'email@gmail.com', '420');

    expect(manager.name).toBe('Manager');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('email@gmail.com');
    expect(manager.officeNumber).toBe('420');
})