// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.title);
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
