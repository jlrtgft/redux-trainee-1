export const DEL_COMPANY = 'DEL_COMPANY';

export const deleteCompany = id => {
  return {
    type: DEL_COMPANY,
    payload: {
      companyId: id
    }
  }
}