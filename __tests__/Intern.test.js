const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Intern', '4', 'femail@gmail.com', 'UT Austin');

    expect(intern.name).toBe('Intern');
    expect(intern.id).toBe('4');
    expect(intern.email).toBe('femail@gmail.com');
    expect(intern.school).toBe('UT Austin');
})