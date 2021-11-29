const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Engineer', '3', 'temail@gmail.com', 'https://github.com/Engie');

    expect(engineer.name).toBe('Engineer');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('temail@gmail.com');
    expect(engineer.github).toBe('https://github.com/Engie');
})