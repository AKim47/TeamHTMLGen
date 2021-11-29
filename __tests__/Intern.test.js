const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Intern', '4', 'femail@gmail.com', 'UT Austin');

    expect(intern.name).toBe('Intern');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('femail@gmail.com');
    expect(intern.school).toBe('UT Austin');
});

test('get name from intern object', () => {
    const intern = new Intern('Inhern', '4', 'femail@gmail.com', 'UT Austin');

    expect(intern.getName()).toBe('Inhern');
});

test('get id from intern object', () => {
    const intern = new Intern('Inhern', '4', 'femail@gmail.com', 'UT Austin');

    expect(intern.getId()).toBe('4');
});

test('get email from intern object', () => {
    const intern = new Intern('Inhern', '4', 'femail@gmail.com', 'UT Austin');

    expect(intern.getEmail()).toBe('femail@gmail.com');
});

test('get school from Intern object', () => {
    const intern = new Intern('Inhern', '4', 'femail@gmail.com', 'UT Austin');

    expect(intern.getSchool()).toBe('UT Austin');
});

test('get role from intern object', () => {
    const intern = new Intern('Inhern', '4', 'femail@gmail.com', 'UT Austin');

    expect(intern.getRole()).toBe('Intern');
});