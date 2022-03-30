module.exports = async ({ github, branch, context, core }) => {
    console.log(Object.keys(github));
    console.log(Object.keys(context));
    console.log(branch);
    if (!branch || !branch.includes("master")) {
      console.log("Attend, mais tu n'est pas sur master ! Pas contant");
  
      core.setFailed(error.message);
    }
    console.log("Wow c'est partie en prod !");
  };
  