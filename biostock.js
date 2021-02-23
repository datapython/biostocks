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
    'NBRV',
    'NRBO',
    'OVID',
    'SPPI',
    'VXRT',
    'VYGR',
    'WINT',
    'BLUE',
    'BEAM',
]

const stocksSorted = stocks.sort();

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
    
