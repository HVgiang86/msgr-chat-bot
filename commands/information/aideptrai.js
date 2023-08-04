const { Client, Message } = require('messenger-api.js')

module.exports = {
    name: 'aideptrai',
    category: 'information',
    /**
     * @arg {Client<true>} client 
     * @arg {Message} message 
     * @arg {string[]} args 
     */
    run: (client, message, args) => {
        message.thread.send(`Anh Giang đẹp trai nhất.😘😘`)
    }
}