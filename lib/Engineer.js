function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;

    this.getName = function() {
        return this.name;
    };

    this.getId = function() {
        return this.id;
    };

    this.getEmail = function() {
        return this.email;
    };

    this.getGithub = function() {
        return this.github;
    };

    this.getRole = function() {
        return "Engineer";
    };
};

module.exports = Engineer;