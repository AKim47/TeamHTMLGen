// create employee card
const generateEmployee = content => {
    if (!content) {
        console.log('empty');
        return '';
    }
    else{
        let employees = ``;
        for (let i = 0; i < content.length; i++){

            if (content[i].role === "Engineer"){
                employees+= `
                <div class="container flex-row justify-space-between align-center py-3">
                <section class="my-3" id="employee">
                    <h2 class="text-dark bg-primary p-2 display-inline-block">Engineer</h2>
                    <h3>${content[i].name}</h3></br>
                    <p>#${content[i].id}</p></br>
                    <a href="mailto:${content[i].email}">Email Employee</a></br>
                    <a href = "${content[i].github}">Github Link</a></br>
                </section>
                </div></br>
                `;
            } else if (content[i].role === "Intern"){
                employees+=`
                <div class="container flex-row justify-space-between align-center py-3">
                <section class="my-3" id="employee">
                    <h2 class="text-dark bg-primary p-2 display-inline-block">Intern</h2>
                    <h3>${content[i].name}</h3></br>
                    <p>#${content[i].id}</p></br>
                    <a href="mailto:${content[i].email}">Email Employee</a></br>
                    <p>${content[i].school}</p></br>
                </section>
                </div></br>
                `;
            }
            else if (content[i].role === "Manager"){
                employees+=`
                <div class="container flex-row justify-space-between align-center py-3">
                    <section class="my-3" id="employee">
                        <h2 class="text-dark bg-primary p-2 display-inline-block">Manager</h2>
                        <h3>${content[i].name}</h3></br>
                        <p>#${content[i].id}</p></br>
                        <a href="mailto:${content[i].email}">Email Employee</a></br>
                        <p>Office Number: ${content[i].officeNumber}</p></br>
                    </section>
                </div></br>
                `;
            }
        };
        return employees;
    }
};

module.exports = templateData => {
    console.log(templateData);
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">Employees</h1>
        </div>
      </header>
      <main class="container my-5">
            ${generateEmployee(templateData)}
      </main>
    </body>
    </html>
    `;
  };