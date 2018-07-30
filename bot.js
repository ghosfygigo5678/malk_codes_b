const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("Welcome Again !");
 
 A7MD.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
سلام عليكم يا قلبي 
لو سمحت طالبكــ طلب تــكفـــا ادخل السيرفر
                               [ https://discord.gg/wFeyH3 ] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**)
}).catch(console.error)

})
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
**
سلام عليكم يا قلبي 
لو سمحت طالبكــ... طلب تكفا ادخل السيرفر
                               [ https://discord.gg/wFeyH3 ] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**) 
}).catch(console.error)
});
A7MD.login('NDczNjAyOTI0NTIyNTA0MTky.DkEy9w.eT1EOVK4QwNDKpuOnjDKC_Gl2YU');
