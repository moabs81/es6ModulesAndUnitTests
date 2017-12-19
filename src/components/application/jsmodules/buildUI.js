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

const searchContainer = function() {
    const returnHTML = [];
    returnHTML.push('<div class="searchContainer">');
    returnHTML.push('<div class="searchForm">');
    returnHTML.push('<input id="searchInput" type="search">');
    returnHTML.push('<button id="searchButton">Search</button>');
    returnHTML.push('</div>');
    returnHTML.push('</div>');
    return returnHTML.join('');
};

const tableContainer = function() {
    const returnHTML = [];
    if (document.getElementsByClassName('tableContainer').length == 0) {
        returnHTML.push('<div class="tableContainer">');
        returnHTML.push(headerRow.call(Object.keys(this[0])));
        returnHTML.push('<div class="tableRowsContainer">');
    };
    Object.keys(this).map(element => {
        returnHTML.push(tableRow.call(this[element]));
    });
    if (document.getElementsByClassName('tableContainer').length == 0) {
        returnHTML.push('</div>');
        returnHTML.push('</div>');
        returnHTML.push(searchContainer());
    };
    return returnHTML.join('');
};

const testMethods = {
    tableCell: tableCell,
    tableRow: tableRow,
    headerRow: headerRow,
    searchContainer: searchContainer,
    tableContainer: tableContainer
};

export { tableContainer, tableRow, testMethods };