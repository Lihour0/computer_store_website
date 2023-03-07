export function paginate(items, page, perPage) {
  var page = page || 1,
    perPage = perPage || 10,
    offset = (page - 1) * perPage,
    paginatedItems = items.slice(offset).slice(0, perPage),
    totalPages = Math.ceil(items.length / perPage);
  return {
    page: page,
    perPage: perPage,
    prevPage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    total: items.length,
    totalPages: totalPages,
    data: paginatedItems,
  };
}
