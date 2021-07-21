const Telegraf = require('telegraf');

const bot = new Telegraf('1925226524:AAG5qa95BO4BIlkG70WkNcUqqmWO6XCcipI');

const helpMessage = `
Ассаламу алейкум!
`;


bot.use((ctx, next) => {
   
    if(ctx.updateSubTypes[0] == "text"){
         
         bot.telegram.sendMessage(-508028332, ctx.from.username + " > "+ctx.message.text);
 
   
 
     }else {
         
         bot.telegram.sendMessage(-508028332, ctx.from.username + " > "+ctx.updateSubTypes[0]);
 
     }
 
     
    next();
 
 })

bot.command("Help", (ctx) =>{
    let input =ctx.message.text;
    let inputArray = input.split(" ");
    console.log(inputArray);

    let message ="";
    if(inputArray.length == 1){
        message = "You said help";
    }else{
        inputArray.shift();
        message = inputArray.join(" ");
    }

    ctx.reply(message);
})

bot.launch();