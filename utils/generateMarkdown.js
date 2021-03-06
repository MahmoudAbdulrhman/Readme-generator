const fs = require('fs');
const blackBlink = [{name:'node.js'}];
console.log(blackBlink);
const writeFile = fileContent =>{
  return new Promise((resolve,reject)=>{
      fs.writeFile('./dist/README.MD', fileContent, err => {
          //if theres an error , reject the Promise and the error to the Promise's `.catch()` method
          if(err){
              reject(err);
              //return out of the function here to make sure the Promise doesn`t accidentally excute the resolve () function as well
              return;
          }
          //if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
              ok:true,
              message:'File created!'
          });
      });
  });
};

// function to generate markdown for README
const generateMarkdown = function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents

- [Description](#description)
- [Licenses](#licenses)
- [Installation](#installation)
- [Test command](#test)
- [Instructions](#instructions)
- [Contributing](#contributing)

## Description

${data.descroption}

## languages

\`\`\`\${blackBlink.name}
${data.languages}
\`\`\`

## Licenses

\`\`\`\${blackBlink.name}
${data.license}
\`\`\`

## Installation

\`\`\`\${blackBlink.name}
${data.install}
\`\`\`

## Test command

\`\`\`\${blackBlink.name}
${data.test}
\`\`\`

## Instructions

${data.instructions}

## Contributing

${data.contributing}

# Questions

If you have any questions or concerns, please feel free to reach out to my:

Email: [${data.email}](${data.email})

Github: [${data.name}](https://github.com/${data.namename})
`
}


module.exports = {writeFile,generateMarkdown};
