const requestdata = {
  app_code: 'TMS-STAFF',
  staff_type: 'TEACHER',
  version: '35',
  platform: 'web',
  device_id: 'd566e0dce6c65368',
  school_id: '3',
  academic_year_id: '1953',
  division: {
    0: '1840 ',
    1: '1841 ',
    2: '1843 ',

    3: '1844',

    4: '1845 ',
    5: '1846 ',
    6: '1847 ',
    7: '1848 ',
    8: '1849 ',
    9: '1867 ',

    10: '1868 ',
    11: '1869 ',
    12: '1896 ',
    13: '1870',
  },
  user_id: '201',
  user_type: 'TMS_USER',
}

export function itemsFetchData() {
  return (dispatch) => {
    const fetchApiCall = async () => {
      const endPoint = `https://1dlkbk98d8.execute-api.ap-south-1.amazonaws.com/Stage/question/class_list`
      const response = await (
        await fetch(endPoint, {
          method: 'post',
          body: JSON.stringify(requestdata),
        })
      ).json()

      dispatch({
        type: 'USER-API',
        payload: response,
      })
    }
    fetchApiCall()
  }
}
