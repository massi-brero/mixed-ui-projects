import Pagination from "./paginator.js";
import { data } from "./data.js";

class DataDelegate {
    records_per_page = 5;

    data = [];

    constructor()
    {
        this.init();
    }

    init() {
        this.loadData();
        new Pagination(this, {
            numberOfEntries: this.data.length,
            records_per_page: 5
        });
    }

    renderData(page) {
        const listingTable = document.querySelector('#listingTable');

        listingTable.innerHTML = '';
        for (let i = (page - 1) * this.records_per_page; i < (page * this.records_per_page) && i < this.data.length; i++) {
            listingTable.innerHTML += `<div class='objectBlock'>${this.data[i].adName}</div>`;
        }
    }


    loadData() {
        this.data = data;
    }
}

new DataDelegate();