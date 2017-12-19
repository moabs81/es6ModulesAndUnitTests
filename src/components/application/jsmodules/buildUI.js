const tableCell = function() {
    return '<div class="tableCell">' + this + '</div>';
};

const tableRow = function() {
    const returnHTML = [];
    returnHTML.push('<div class="tableRow">');
    Object.keys(this).map(element => {
        returnHTML.push(tableCell.call(this[element]));
    });
    returnHTML.push('</div>');
    return returnHTML.join('');
};

const headerRow = function() {
    const returnHTML = [];
    returnHTML.push('<div class="headerRow">');
    this.forEach(element => {
        returnHTML.push('<div class="headerCell">' + element + '</div>');
    });
    returnHTML.push('</div>');
    return returnHTML.join('');
};

const tableContainer = function() {
    const returnHTML = [];
    returnHTML.push('<div class="tableContainer">');
    returnHTML.push(headerRow.call(Object.keys(this[0])));
    Object.keys(this).map(element => {
        returnHTML.push(tableRow.call(this[element]));
    });
    returnHTML.push('</div>');
    return returnHTML.join('');
};

const testMethods = {
    tableCell: tableCell,
    tableRow: tableRow,
    headerRow: headerRow,
    tableContainer: tableContainer
};

export { tableContainer, testMethods };