import { LightningElement } from 'lwc';
import { cols } from './utilities'
export default class Naics extends LightningElement {
 
    timeoutId

    data = []

    get columns() {
        return cols()
    }
    get totalNumberOfRows() {
        return this.data.length
    }

    handleSearchChange(event) {
        const searchTerm = event.detail.value

        clearTimeout(this.timeoutId)

        this.timeoutId = setTimeout(() => {
            this.data = []
            this.fetchNaics(searchTerm)
        }, 1000)
    }

    async fetchNaics(input) {
        const response = await (await fetch(`https://www.census.gov/naics/resources/model/dataHandler.php?input=${input}&search=2022`)).json()

        for (const [key, value] of Object.entries(response.result)) {
            this.data = [...this.data, value]
        }
    }

    loadMoreData(event) {
 
        event.target.isLoading = true;
        
        if (this.data.length >= this.totalNumberOfRows) {
            event.target.enableInfiniteLoading = false;
            
        } else {
            const currentData = this.data;
            
            const newData = currentData.concat(data);
            this.data = newData;
            this.loadMoreStatus = '';
        }
        
        event.target.isLoading = false;
    }
}