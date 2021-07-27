const readline = require('readline');
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

const questions = [
  'What is your first name? ',
  'What sport is your favourite? ',
  'What is your favourite food? ',
  'What is the name of your best friend? ',
  'What is your superpower? In a few words, tell us what you are amazing at! ',
  'What music do you and you best friend enjoy listening to? '
];

let reply = [];

const nextQuestion = () => {
  rl.question(questions.shift(), answer => {
    reply.push(answer);
    if (questions.length === 0) {
      rl.close();
    } else {
      nextQuestion();
    }
  });
};

nextQuestion();

rl.on('close', () => {
  reply = {
    name : reply[0],
    sport : reply[1],
    food : reply[2],
    bestFriend : reply[3],
    super : reply[4],
    music : reply[5]
  };

  const paragraph = ` 
  ${reply.name} likes to play ${reply.sport}. ${reply.name} loves to eat ${reply.food}, and
  ${reply.bestFriend} is his best friend. They both love listening to ${reply.music}. 
  ${reply.name}'s superpower in real life is '${reply.super}'.
  `;

  process.stdout.write(paragraph);
});