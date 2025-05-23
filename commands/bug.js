async function bug(message, client, texts, num) {

    const remoteJid = message.key.remoteJid;

    await client.sendMessage(remoteJid, {

        image: { url: `${num}.png` },

        caption: `> ${texts}`,

        contextInfo: {

            externalAdReply: {

                title: "Join Our WhatsApp Channel",

                body: "𝐂𝐀𝐁𝐑𝐈𝐍𝐎 𖣘 𝐊𝐈𝐋𝐋𝐔𝐀",

                mediaType: 1, // Image preview

                thumbnailUrl: `https://whatsapp.com/channel/0029VayrkbSAO7RNZKTCHK2U`,

                renderLargerThumbnail: false,

                mediaUrl: `${num}.png`,

                sourceUrl: `${num}.png`
            }
        }
    });
}

export default bug;
              
