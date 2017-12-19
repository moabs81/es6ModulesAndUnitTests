import { tableContainer, tableRow } from './buildUI';

const sortTable = function() {
    const arrSort = this.state;
    const sortAsc = function() {
        arrSort.sort((elOne, elTwo) => {
            if (elOne[this.sortCol] < elTwo[this.sortCol]) {
                return -1;
            };
            if (elOne[this.sortCol] > elTwo[this.sortCol]) {
                return 1;
            };
            return 0;
        });
    };

    const sortDesc = function() {
        arrSort.sort(function(elOne, elTwo) {
            if (elOne[this.sortCol] > elTwo[this.sortCol]) {
                return -1;
            };
            if (elOne[this.sortCol] < elTwo[this.sortCol]) {
                return 1;
            };
            return 0;
        });
    };

    this.sortOrder == 'asc' ? sortAsc.call(this) : sortDesc.call(this);

    return arrSort;

};

const appController = function() {
    const appState = this.data,
        targetDiv = this.targetDiv;

    const bindEvents = function() {
        document.getElementById('appContainer').addEventListener('click', e => {
            if (e.srcElement.getAttribute('class') == 'headerCell') {
                console.log(e);
                console.log(e.path[1].getAttribute('class'));
                const newState = sortTable.call({ state: appState, sortCol: e.srcElement.textContent, sortOrder: 'asc' });
                $('.tableRowsContainer').html(tableContainer.call(newState));
            };
        });
    };

    $(targetDiv).html(tableContainer.call(appState));
    bindEvents();
};

const testMethods = {
    sortTable: sortTable
};

export { appController, testMethods };