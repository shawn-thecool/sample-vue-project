import makeRequest from '@api'

const _parsePopups = dataList =>
  dataList.map(({ title, content, date }) => ({
    header: title ? { title } : null,
    body: content ? { content } : null,
    footer: date ? { date } : null
  }))

export const getPopups = () => {
  const config = {
    method: 'get',
    url: 'news'
  }
  return makeRequest(config).then(res => _parsePopups(res.data))
}

// export const getPopupById = id => {}
