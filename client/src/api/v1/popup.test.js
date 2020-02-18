import makeRequest from '@api'

const _parsePopups = dataList =>
  dataList.map(({ title, content, date }) => ({
    header: { title },
    body: { content },
    footer: { date }
  }))

export const getPopups = () => {
  const config = {
    method: 'get',
    url: 'news'
  }
  return makeRequest(config).then(res => _parsePopups(res.data))
}

// export const getPopupById = id => {}
