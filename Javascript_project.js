
let statements = ['I like coding', 'I love studying', 'I like listening to music', 'I like jogging', 'I like playing MTG', 'I like playing WoW', 'I like pizza', 'I like daydreaming'];

function random_statement(array)
{
    console.log(array[Math.floor(Math.random * array.length)]);
}

const num = 10;
for (i = 0; i < num; i++)
{
    random_statement(statements);
}