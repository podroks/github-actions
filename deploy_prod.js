module.exports = async ({ github, context, core }) => {
  try {
    if (!context.ref.includes("master")) {
      console.log("Attend, mais tu n'est pas sur master ! Pas contant");

      throw new Error("Une mise en prode se fait qu'a partir de master !");
    }
    console.log("Wow c'est partie en prod !");
  } catch (e) {
    core.setFailed(e);
  }
};
