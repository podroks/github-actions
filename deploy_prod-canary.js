export default async ({ github, core }) => {
    if (!github.ref.includes("master")) {
      console.log("Attend, mais tu n'est pas sur master ! Pas contant");
  
      core.setFailed(error.message);
    }
    console.log("Wow c'est partie en prod !");
  };
  