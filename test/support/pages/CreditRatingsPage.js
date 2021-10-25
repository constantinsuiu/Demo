class CreditRatingsPage {
    get pageContent() { return $('.content.articleText'); } 
    get ratingsHeaders() { return $$('table.responsive-table tr td'); }
    get tableRows() { return $$('table.responsive-table tr') }
    tableCell(row, column) {return $(`table.responsive-table tr:nth-child(${row}) td:nth-child(${column})`)}

    getHeaderIndex(columnName) {
        return this.ratingsHeaders.findIndex((header) => {
            return header.getText() == columnName;
        });
    }

    getRowIndex(data) {
        let columnIndex = this.getHeaderIndex("Rating agency");
        return this.tableRows.findIndex((row) => {
            return row.$$('td')[columnIndex].getText() == data;
        }) + 1;
    }

    
}

export default new CreditRatingsPage();