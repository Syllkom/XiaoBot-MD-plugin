import baileys from '@whiskeysockets/baileys';
const { generateWAMessageFromContent } = baileys;

const help = `╭◯ DOWNLOAD 
╷play
╷yts
╷ytmp3
╷ytmp4
╰◯`;

const command = {
    command: ['menu', 'help', 'menú', 'manu'],
    categoria: ['main']
};

command.script = async (m, { conn }) => {
    await conn.sendButton(m.chat, help, ['document-false', null, { 
        fileLength: 1024 * 1024 * 1024, 
        fileName: ' ', 
        jpegThumbnail: await m.bot.photo()
    }], [{ 
        name: 'reminder', 
        button: ['Programar recordatorio', 'message'] 
    }], m, { 
        mentionedJid: m.chat.participants.map(a => a.id), 
        externalAdReply: { 
            title: 'XiaoBot-MD', 
            body: 'Powered by @Syllkom', 
            thumbnailUrl: await m.bot.photo(),
            mediaType: 1 
        } 
    });
};

export default command;
