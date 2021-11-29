function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;

    this.getName = function() {
        return this.name;
    };

    this.getId = function() {
        return this.id;
    };

    this.getEmail = function() {
        return this.email;
    };

    this.getSchool = function() {
        return this.school;
    };

    this.getRole = function() {
        return "Intern";
    };
};


module.exports = Intern;