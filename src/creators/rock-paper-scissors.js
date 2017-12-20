import getTicketData from './../helpers/get-ticket-data';

const build = (ticketId) => {
    getTicketData(ticketId)
        .then(({ data }) => {
            const assetsPath = data.custom_field_234234;
            return getDefaultConfig();
        });
};

const getDefaultConfig = () => {
    return {
        "id": 123,
        "theme": {
            "fontFamily": "Cabin",
            "path": "http://cdn.opencanvas.co.uk/automatingwithnodejs/assets/rock-paper-scissors/fire-water-earth-cute"
        },
        "customStyles": [
            "https://fonts.googleapis.com/css?family=Cabin"
        ],
        "images": {
            "background": "background.png",
            "rock": "rock.png",
            "paper": "paper.png",
            "scissors": "scissors.png"
        },
        "labels": {
            "rock": "rock",
            "paper": "paper",
            "scissors": "scissors"
        },
        "screens": {
            "choice": {
                "title": "Rock Paper Scissors",
                "subtitle": "Make your choice"
            },
            "result": {
                "won": "you won!",
                "lost": "you lost!",
                "draw": "it's a draw",
                "replay": "replay",
                "feedback": {
                    "won": "{player} beats {cpu}",
                    "lost": "{cpu} beats {player}",
                    "draw": "Nobody won this time"
                }
            }
        }
    }
};