'use strict';
//require chai
const expect = require('chai').expect;

//import test module
import {
    testMethods
} from '../src/components/application/jsmodules/buildUI';

//set test data
const testData = {
    tableCell: {
        tableCell: 'TEST CONTENT'
    },
    tableRow: {
        cells: {
            key1: 'value1',
            key2: 'value2'
        }
    },
    tableContainer: {
        testObj: [{
            key1: 'value1',
            key2: 'value2'
        }, {
            key1: 'value3',
            key2: 'value4'
        }]
    }
};

//tests
describe('THE COMPONENTS', () => {
    describe('THE TABLECELL', () => {
        it('should return a string', () => {
            expect(testMethods.tableCell.call(testData.tableCell.tableCell)).to.be.a('string');
        });
        it('should return a div with class tableCell', () => {
            expect(testMethods.tableCell.call(testData.tableCell.tableCell)).to.contain('<div class="tableCell"');
        });
        it('should include the content passed to it', () => {
            expect(testMethods.tableCell.call(testData.tableCell.tableCell)).to.contain(testData.tableCell.tableCell);
        })
    });
    describe('THE ROW', () => {
        it('should return a string', () => {
            expect(testMethods.tableRow.call(testData.tableRow.cells)).to.be.a('string');
        });
        it('should return a div with the class tableRow', () => {
            expect(testMethods.tableRow.call(testData.tableRow.cells)).to.contain('<div class="tableRow"');
        });
        it('should return the number of rows present in the cells object (2)', () => {
            Object.keys(testData.tableRow.cells).map(element => {
                expect(testMethods.tableRow.call(testData.tableRow.cells)).to.contain(testData.tableRow.cells[element]);
            });
        });
    });
    describe('THE CONTAINER', () => {
        it('should return a string', () => {
            expect(testMethods.tableContainer.call(testData.tableContainer.testObj)).to.be.a('string');
        });
        it('a div with the class tableContainer', () => {
            expect(testMethods.tableContainer.call(testData.tableContainer.testObj)).to.contain('<div class="tableContainer"');
        });
        it('should return the number of rows present in the test object (' + testData.tableContainer.testObj.length + ')', () => {
            Object.keys(testData.tableContainer.testObj).map(element => {
                Object.keys(testData.tableContainer.testObj[element]).map(subElement => {
                    expect(testMethods.tableContainer.call(testData.tableContainer.testObj)).to.contain(testData.tableContainer.testObj[element][subElement]);
                });
            });
        });
    });
});