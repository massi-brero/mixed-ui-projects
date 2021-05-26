class Pagination {
    objJson = [
        { adName: "adName 1"},
        { adName: "adName 2"},
        { adName: "adName 3"},
        { adName: "adName 4"},
        { adName: "adName 5"},
        { adName: "adName 6"},
        { adName: "adName 7"},
        { adName: "adName 8"},
        { adName: "adName 9"},
        { adName: "adName 10"},
        { adName: "adName 11"},
        { adName: "adName 12"},
        { adName: "adName 13"},
        { adName: "adName 14"},
        { adName: "adName 15"},
        { adName: "adName 16"}
    ];
    prevButton = null;
    nextButton = null;
    clickPageNumber = null;
    current_page = 1;
    records_per_page = 5;

    constructor() {
        this.initView();
    }

    initView() {
        this.prevButton = document.querySelector('#button-prev');
        this.nextButton = document.querySelector('#button-next');
        this.clickPageNumber = document.querySelectorAll('.clickPageNumber');
        this.changePage(1);
        this.pageNumbers();
        this.selectedPage();
        this.clickPage();
        this.addEventListeners();
    }

    pageNumbers() {
        const pageNumber = document.querySelector('#page_number');
        pageNumber.innerHTML = '';

        for (let i = 1; i < this.numPages() + 1; i++) {
            pageNumber.innerHTML += `<span class='clickPageNumber'>${i}</span>`
        }
    }

    selectedPage() {
        const page_number = document.querySelector('#page_number')
                                    .querySelectorAll('.clickPageNumber');

        for (let i = 0; i < page_number.length; i++) {
            if (i === this.current_page - 1) {
                page_number[i].style.opacity = "1.0";
            }
            else {
                page_number[i].style.opacity = "0.5";
            }
        }
    }

    checkButtonOpacity() {
        this.current_page === 1 ? this.prevButton.classList.add('opacity') : this.prevButton.classList.remove('opacity');
        this.current_page === this.numPages() ? this.nextButton.classList.add('opacity') : this.nextButton.classList.remove('opacity');
    }

    changePage(page) {
        const listingTable = document.querySelector('#listingTable');

        if (page < 1) {
            page = 1;
        }

        if (page > (this.numPages() - 1)) {
            page = this.numPages();
        }

        listingTable.innerHTML = '';

        for (let i = (page - 1) * this.records_per_page; i < (page * this.records_per_page) && i < this.objJson.length; i++) {
            listingTable.innerHTML += `<div class='objectBlock'>${this.objJson[i].adName}</div>`;
        }

        this.checkButtonOpacity();
        this.selectedPage();
    }

    prevPage() {
        const self = this;
        if (self.current_page > 1) {
            self.current_page--;
            self.changePage(self.current_page);
        }
    }

    nextPage() {
        const self = this;
        if (self.current_page < self.numPages()) {
            self.current_page++;
            self.changePage(self.current_page);
        }
    }

    clickPage() {
        const self = this;
        document.addEventListener('click', function handler(e) {
            if ([...e.target.classList].includes('.clickPageNumber')) {
                self.current_page = e.target.textContent;
                self.changePage(self.current_page)
            }
        })
    }

    addEventListeners() {
        const self = this;
        this.prevButton.addEventListener('click', self.prevPage);
        this.nextButton.addEventListener('click', self.nextPage);
    }

    numPages()
    {
        return Math.ceil(this.objJson.length / this.records_per_page);
    }
}

const pagination = new Pagination();

