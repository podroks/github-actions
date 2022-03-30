module.exports = async ({ github, context, core }) => {
    if (!context.ref.includes("master")) {
      console.log("Attend, mais tu n'est pas sur master ! Pas contant");
  
      core.setFailed("Une mise en prode se fait qu'a partir de master !");
    }
    console.log("Wow c'est partie en prod !");
  };
  