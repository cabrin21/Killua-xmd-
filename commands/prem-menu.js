
export async function prem(message, client) {

    const remoteJid = message.key.remoteJid;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

    const owner = "𖣘𝐊𝐢𝐥𝐥𝐮𝐚𖣘";

    const username = message.pushName || "Unknown";

    const t = ` 
╭─────────────────╮
    🍷𝛫𝛪𝐿𝐿𝑈𝛥 .  .ᴮᴺᴷ🍷
╰─────────────────╯
╭─────────────────╮
│ Prefix : .
│ User : ${username}  
│ Day : ${currentDay}
│ Date : ${currentDate}/${currentMonth}/${currentYear} 
│ Version : 3
│ Plugins : 2
│ Type : MD 
╰─────────────────╯

╭────[ PREMIUM CMDS ]─────╮
│      
│ ⬢ connect 243xxxxx
│ ⬢ reconnect 243xxxxx            
│ ⬢ disconnect 243xxxxx        
╰─────────────────╯        

made by Killua 🍷
    `
;

    await client.sendMessage(remoteJid, {

        image: { url: "menu.jpg" },

        caption: t,

        contextInfo: {

            participant: '0@s.whatsapp.net',

            remoteJid: 'status@broadcast',

            quotedMessage: { conversation:"𝐂𝐀𝐁𝐑𝐈𝐍𝐎 𖣘 𝐊𝐈𝐋𝐋𝐔𝐀"}, 

            isForwarded: true,
        },


    });
}   

export default prem;
