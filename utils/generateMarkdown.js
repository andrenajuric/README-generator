// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## Description 
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  *[Demo](#demo)

  * [License](#license)

  * [Contributors](#contributors)

  * [Tests](#tests)

  * [Contact](#contact)

  ## Installation
  
  ${data.installation}

  ## Location

  * [GitHub Repository](https://github.com/${data.username}/readme-generator)

  ## Demo

  ## License

  ## Contributors
  
  ${data.contributors}

  ## Tests

  ${data.tests}

  ## Contact Info

  If you have any questions, you can email me at: ${data.email}. Or, you can connect with me on GitHub. My username is ${data.username}.

  `;
}

module.exports = generateMarkdown;
