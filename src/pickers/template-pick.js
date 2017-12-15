'use strict';

const fs = require('fs');

class TemplatePick {

    constructor(path) {
        this.chosenTemplate = null;
        this.path = path || '../libraries/gamesys-design/promo-templates';
        this.templates = this.findTemplates();
    }

    findTemplates() {
        const path = this.getPath();

        this.templates = fs.readdirSync(path).filter((item) => {
            const filePath = `${path}/${item}`;
            return fs.statSync(filePath).isDirectory() && !(/(^|\/)\.[^\\.]/g).test(item);
        });

        return this.templates;
    }

    setChosenTemplate(template) {
        if (this.chosenTemplate !== null) {
            return;
        }

        if (this.templates.indexOf(template) === -1) {
            throw new Error(`${template} does not exist in available templates`);
        }

        this.chosenTemplate = template;
    }

    getChosenTemplate() {
        return this.chosenTemplate;
    }

    getPath() {
        return this.path;
    }
}

module.exports = TemplatePick;
