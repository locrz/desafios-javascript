/*
 * Paginação
 */

/* ENUNCIADO
 *
 *  Você deve escrever uma função de paginação de listas que receba o número da página e o número de itens por página como parâmetros
 *  e retorne no seguinte formato:
 * 
 * 
 *  {
        currentPage: 1,
        perPage: 10,
        total: 20,
        totalPages: 2,
        data: [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur (...)"
            },
            [...]
        ]
    }
 */

const posts = require('./posts.json')

const paginate = (collection, pageNumber = 1, itemsPerPage = 10) => {
  const totalItems = collection.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (pageNumber > totalPages) {
    pageNumber = totalPages
  }

  const startPagination = (pageNumber - 1) * itemsPerPage
  const endPagination = pageNumber * itemsPerPage

  const response = {
    currentPage: pageNumber,
    perPage: itemsPerPage,
    total: totalItems,
    totalPages: totalPages,
    data: collection.slice(startPagination, endPagination),
  }

  return response
}

module.exports = paginate
