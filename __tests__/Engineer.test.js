const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Engineer', '3', 'temail@gmail.com', 'https://github.com/Engie');

    expect(engineer.name).toBe('Engineer');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('temail@gmail.com');
    expect(engineer.github).toBe('https://github.com/Engie');
});

test('get name from engineer object', () => {
    const engineer = new Engineer('Mengineer', '3', 'temail@gmail.com', 'https://github.com/Engie');

    expect(engineer.getName()).toBe('Mengineer');
});

test('get id from engineer object', () => {
    const engineer = new Engineer('Mengineer', '3', 'temail@gmail.com', 'https://github.com/Engie');

    expect(engineer.getId()).toBe('3');
});

test('get email from engineer object', () => {
    const engineer = new Engineer('Mengineer', '3', 'temail@gmail.com', 'https://github.com/Engie');

    expect(engineer.getEmail()).toBe('temail@gmail.com');
});

test('get github from engineer object', () => {
    const engineer = new Engineer('Mengineer', '3', 'temail@gmail.com', 'https://github.com/Engie');

    expect(engineer.getGithub()).toBe('https://github.com/Engie');
});

test('get role from engineer object', () => {
    const engineer = new Engineer('Mengineer', '3', 'temail@gmail.com', 'https://github.com/Engie');

    expect(engineer.getRole()).toBe('Engineer');
});