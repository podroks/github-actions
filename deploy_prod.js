module.exports = async ({ github, branch, core }) => {
    console.log(Object.keys(github));
    if (!branch || !branch.includes("master")) {
      console.log("Attend, mais tu n'est pas sur master ! Pas contant");
  
      core.setFailed(error.message);
    }
    console.log("Wow c'est partie en prod !");
  };
  