const readline = require("readline");
const { rootCertificates } = require("tls");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", (name) => {
  console.log(`Thank you : ${name}`);
  rl.question("What's an activity you like doing?", (act) => {
    rl.question("What do you listen to while doing that?", (song) => {
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        (meal) => {
          rl.question(
            "What's your favourite thing to eat for that meal?",
            (food) => {
              rl.question(
                "Which sport is your absolute favourite?",
                (sport) => {
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!",
                    (superpower) => {
                      console.log(
                        `Thank you : ${name}, ${act}, ${meal}, ${food}, ${song}, ${sport}, ${superpower}`
                      );
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
