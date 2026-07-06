const getPagination = (page = 1, limit = 10) => {
  page = Number(page);
  limit = Number(limit);

  const currentPage = Math.max(page, 1);
  const pageSize = Math.min(Math.max(limit, 1), 100);

  return {
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
    page: currentPage,
    limit: pageSize,
  };
};

const getPaginationMeta = ({
  total,
  page,
  limit,
}) => {
  const totalPages = Math.ceil(total / limit);

  return {
    page,
    limit,
    total,
    totalPages,
    hasNext: page < totalPages,
    hasPrevious: page > 1,
  };
};

module.exports = {
  getPagination,
  getPaginationMeta,
};