import DOMElements from './dom';

export const renderPagination = (totalItems, page) => {
    const pageSize = 10;
    const pagesLength = Math.floor(totalItems / pageSize) + 1;
    let html = `
    <span class="pagination__previous" ${page === 1 ? 'disabled' : ''} data-targetpage="${parseInt(page, 10) - 1}">pre</span>
    <span class="pagination__currentPage" disabled="disabled">${page}</span>
    <span class="pagination__next" ${page === pagesLength ? 'disabled' : ''} data-targetpage="${parseInt(page, 10) + 1}">next</span>
`
    clearPagination();
    DOMElements.paginationContainer.insertAdjacentHTML('beforeend', html);
}

export const clearPagination = () => {
    DOMElements.paginationContainer.innerHTML = '';
}
