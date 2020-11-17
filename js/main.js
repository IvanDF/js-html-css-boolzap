/**
 * Boolzapp Vue
 */
const bollzap = new Vue({
    el: '#boolzap',
    data: {

        // RESET INDEX
        indexUser: 0,
        // RESET MESSAGES SENT
        messageSent: '',
        // FILTER USERS
        filter: '',

        // User Account
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },

        // Contacts
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                lastAccess: 10.35,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'recived'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                lastAccess: 10.35,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'recived'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'recived'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                lastAccess: 10.35,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'recived'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'recived'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                lastAccess: 10.35,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'recived'
                    }
                ],
            },
            {
                name: 'Lucio',
                avatar: '_5',
                visible: true,
                lastAccess: 10.35,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'recived'
                    }
                ],
            },
            {
                name: 'Luciano',
                avatar: '_6',
                visible: true,
                lastAccess: 10.35,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'recived'
                    }
                ],
            },
            {
                name: 'Ajeje',
                avatar: '_7',
                visible: true,
                lastAccess: 10.35,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'recived'
                    }
                ],
            },
            {
                name: 'Brambilla',
                avatar: '_8',
                visible: true,
                lastAccess: 10.35,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'recived'
                    }
                ],
            },
        ],
    },
    
    // METHODS
    methods: {
        activeUser(index) {

            // SET IDEXUSER DYNAMICALLY ON CLICK
            this.indexUser = index;
            
        },
        // SEND MESSAGES & RECIVE AUTO REPLY
        sendMessage() {
            
            if (this.messageSent !== '') {

                this.contacts[this.indexUser].messages.push({
                    date: dayjs().format( 'DD/MM/YYYY HH:mm:ss' ),
                    message: this.messageSent,
                    status: 'sent'
                })
                
                setTimeout(() => {
                    this.scrollDown();
                }, 50)

                // SENT AUDIO
                let sent = ("./audio/sent.wav")
                this.messageAudio(sent)

                // RESET INPUT TEXT
                this.messageSent = '';
    
                // AUTO REPLY FUNCTION
                setTimeout(() => {
                    this.contacts[this.indexUser].messages.push({
                        date: dayjs().format( 'DD/MM/YYYY HH:mm:ss' ),
                        message: 'oke',
                        status: 'recived',
                    })

                    // ADD LAST ACCESS
                    this.contacts[this.indexUser].lastAccess = dayjs().format('HH.mm');

                    setTimeout(() => {
                        this.scrollDown();
                    }, 50)

                    // RECIVED AUDIO
                    let recived = ("./audio/recived.wav")
                    this.messageAudio(recived) 

                }, 1000);
            }
        },
        messageAudio( sent ) {
            const snd = new Audio(sent);
            return snd.play();
        },
        scrollDown() {
            const elem = document.getElementsByClassName('chat-scrollable')[0];
            elem.scrollTop = elem.scrollHeight;
        },

        // USERS FILTER
        searchUser() {

            this.contacts.forEach( el => {
                if ( el.name.toLowerCase().includes(this.filter.toLowerCase()) ) {
                    el.visible = true
                } else {
                    el.visible = false
                }
            });
        
        },
        lastMessage(index) {
            return (this.contacts[index].messages.slice(-1).pop().message);
        },
    },
});