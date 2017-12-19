const tableCell = function () {
    return '<div class="tableCell">' + this + '</div>';
};

const tableRow = function () {
    let returnHTML = [];
    returnHTML.push('<div class="tableRow">');
    Object.keys(this).map(element => {
        returnHTML.push(tableCell.call(this[element]));
    });
    returnHTML.push('</div>');
    return returnHTML.join('');
};

const tableContainer = function () {
    let returnHTML = [];
    returnHTML.push('<div class="tableContainer">');
    Object.keys(this).map(element => {
        returnHTML.push(tableRow.call(this[element]));
    });
    returnHTML.push('</div>');
    return returnHTML.join('');
};

const testMethods = {
    tableCell: tableCell,
    tableRow: tableRow,
    tableContainer: tableContainer
};

export {
    tableContainer,
    testMethods
};