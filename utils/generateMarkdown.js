// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${generateDescription(data.description)}

  ## Table of Contents

  * [Installation]

  * [Usage]

  * [License]
  
  * [Contributing]

  * [Tests]

  * [Questions]

  ## Installation

  

`;
}

function generateDescription(description) {
  return `## Description

  ${description}`;
}

console.log(generateMarkdown({
  title: "Testing",
  description: "Testing description"
}));

// module.exports = generateMarkdown;
