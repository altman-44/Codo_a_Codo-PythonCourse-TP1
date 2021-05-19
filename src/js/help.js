// Script to generate html content for cryptocurrency list
const headerCells = {
    id: null,
    name: null,
    symbol: null,
    cmc_rank: null,
    price: null,
    circulating_supply: null,
    total_supply: null,
    max_supply: null
}

document.addEventListener('DOMContentLoaded', () => {
    const table = document.createElement('table')
    table.classList.add('app-table')
    const headerRow = document.createElement('tr')
    appendHeaderCellsToRow(headerRow)
    table.appendChild(headerRow)
    appendCryptoDataCells(table)
    document
        .querySelector('.cryptocurrency-list-table-container')
        .appendChild(table)

    function appendHeaderCellsToRow(headerRow) {
        headerCells.id = getHeaderCell()
        headerCells.id.textContent = 'ID'
        headerCells.name = getHeaderCell()
        headerCells.name.textContent = 'Name'
        headerCells.symbol = getHeaderCell()
        headerCells.symbol.textContent = 'Symbol'
        headerCells.cmc_rank = getHeaderCell()
        headerCells.cmc_rank.textContent = 'Ranking'
        headerCells.price = getHeaderCell()
        headerCells.price.textContent = 'Price USD'
        headerCells.circulating_supply = getHeaderCell()
        headerCells.circulating_supply.textContent = 'Circulating Supply'
        headerCells.total_supply = getHeaderCell()
        headerCells.total_supply.textContent = 'Total Supply'
        headerCells.max_supply = getHeaderCell()
        headerCells.max_supply.textContent = 'Max. Supply'
        for (let cell in headerCells) {
            headerCells[cell].classList.add('table-header-cell')
            headerRow.appendChild(headerCells[cell])
        }
    }

    async function appendCryptoDataCells(table) {
        let response = await getCryptoData()
        console.log(response)
        response.forEach((cryptoData) => {
            const row = document.createElement('tr')
            for (let cell in headerCells) {
                const cellElement = document.createElement('td')
                cellElement.classList.add('table-cell')
                const cellElementText = document.createElement('p')
                if (!(cell in cryptoData)) {
                    cellElementText.textContent = cryptoData['quote']['USD']['price']
                } else {
                    if (cryptoData[cell]) {
                        cellElementText.textContent = cryptoData[cell]
                    } else {
                        cellElementText.textContent = '-'
                    }
                }
                cellElement.appendChild(cellElementText)
                row.appendChild(cellElement)
            }
            table.appendChild(row)
        })
        setOuterHTML(table.outerHTML)
    }

    function getCryptoData() {
        return new Promise(async (resolve, reject) => {
            try {
                resolve((await fetch('http://127.0.0.1:3000/data')).json())
            } catch (err) {
                reject(err)
            }
        })
    }

    function getHeaderCell() {
        return document.createElement('th')
    }

    function setOuterHTML(text) {
        const element = document.querySelector('#outer-html')
        element.style.width = '100%'
        element.value = text
    }
})
