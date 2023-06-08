import { LightningElement } from 'lwc';
import { cols, copyTextToClipboard } from './utilities'
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

        if (!searchTerm) {
            this.data = []
            return
        }


        this.timeoutId = setTimeout(() => {
            this.data = []
            this.fetchNaics(searchTerm)
        }, 1000)
    }

    async fetchNaics(input) {
        try {
            
            const response =  await fetch(`https://www.census.gov/naics/resources/model/dataHandler.php?input=${input}&search=2022`)
    
            if (response.ok) {

                const json = await response.json()

                // console.log(json)

                for (const [key, value] of Object.entries(json?.result)) {

                    const item = {
                        code: value?.code || value?.naics22,
                        title: value?.title || value?.index_desc
                    }

                    this.data = [...this.data, item]
                }
            } else {
                console.error(response)
            }
        } catch (error) {
            console.error(error)
        }
    }

    handleRowAction(event) {

        const action = event.detail.action.name

        if (action === 'copy') {
            copyTextToClipboard(event.detail.row.code)
        }
    }
}