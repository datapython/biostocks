const stocks = [
    'AKBA',
    'APTO',
    'ASMB',
    'ATHE',
    'ATNM',
    'ATXI',
    'AYTU',
    'CATB',
    'CDTX',
    'CHMA',
    'CRVS',
    'CWBR',
    'ENOB',
    'ENVB',
    'HTBX',
    'IBIO',
    'LQDA',
    'MBRX',
    'MNOV',
    'MBRV',
    'NRBO',
    'OVID',
    'SPPI',
    'VXRT',
    'VYGR',
    'WINT',
]

const stocksSorted = Object.keys(stocks).sort();

const pages = document.querySelector('.pages');
const chart = document.querySelector('.chart');

stocksSorted.forEach(stock => {
    const page = document.createElement('div');
    const link = document.createElement('a');
    link.href = `https://www.nasdaq.com/market-activity/stocks/${stock}`;
    link.innerHTML = stock;
    page.appendChild(link);
    pages.appendChild(page);

    const subchart = document.createElement('div');
    subchart.setAttribute('class', 'subchart');
    const chartImg = document.createElement('img');
    chartImg.src = `https://www.finviz.com/chart.ashx?t=${stock}&ty=c&ta=1&p=d`;
    subchart.appendChild(chartImg);
    chart.appendChild(subchart);
});
    


// const inputTicker = document.querySelector('.inputTicker');
// const inputCompany = document.querySelector('.inputCompany');
// const btnAdd = document.querySelector('.add');
// const btnRemove = document.querySelector('.remove');
// btnAdd.addEventListener('click', addStock);
// btnRemove.addEventListener('click', removeStock);

const companiesSorted = Object.keys(stocks).sort();

const pages = document.querySelector('.pages');
const chart = document.querySelector('.chart');

companiesSorted.forEach(stock => {
    const page = document.createElement('div');
    const link = document.createElement('a');
    link.href = `https://www.nasdaq.com/market-activity/stocks/${stock}`;
    link.innerHTML = stocks[stock];
    page.appendChild(link);
    pages.appendChild(page);

    const subchart = document.createElement('div');
    subchart.setAttribute('class', 'subchart');
    const chartImg = document.createElement('img');
    chartImg.src = `https://www.finviz.com/chart.ashx?t=${stock}&ty=c&ta=1&p=d`;
    subchart.appendChild(chartImg);
    chart.appendChild(subchart);
});

// function addStock () {
//     const ticker = inputTicker.value;
//     const company = inputCompany.value;
//     if (company && ticker && !stocks.hasOwnProperty(ticker)) stocks[ticker] = company;
//     window.location.reload();
// }

// function removeStock () {
//     const ticker = inputTicker.value;
//     const company = inputCompany.value;
//     if (stocks.hasOwnProperty(ticker)) delete stocks[ticker];
//     window.location.reload();
// }