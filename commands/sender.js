async function sender(message, client, texts) {

    const remoteJid = message.key.remoteJid;

    await client.sendMessage(remoteJid, {

        text: `> _*${texts}*_`,

    });
}

//243975074413@s.whatsapp.net

export default sender;
