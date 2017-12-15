'use strict';

const VENTURES = require('../../config/ventures');

class VenturePick {

    constructor() {
        this.ventures = [
            VENTURES.BETHOTSHOT,
            VENTURES.BOTEMANIA,
            VENTURES.HEART,
            VENTURES.JACKPOTJOY,
            VENTURES.MONOPOLY_CASINO,
            VENTURES.STARSPINS,
            VENTURES.JACKPOTJOY_SWEDEN,
            VENTURES.VIRGINGAMES,
        ];
        this.chosenVenture = null;
    }

    getVentures() {
        return this.ventures;
    }

    setChosenVenture(venture) {
        if (this.chosenVenture !== null) {
            return;
        }
        if (this.ventures.indexOf(venture) === -1) {
            throw new Error(`${venture} does not exist in available ventures`);
        }
        this.chosenVenture = venture;
    }

    getChosenVenture() {
        return this.chosenVenture;
    }
}

module.exports = VenturePick;
