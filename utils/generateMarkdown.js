const fs = require('fs');
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
  // console.log(data);
  // console.log(data.title);
  return `# ${data.title}

`;
}

module.exports = {writeFile,generateMarkdown};
