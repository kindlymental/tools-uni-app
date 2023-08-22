import Mock from 'mockjs'

// api host
let host = 'http://localhost:3000/'

export const api = {
  banners: `api/banners`,
  register: `api/register`,
  login: `api/login`,
  userlist: `api/userlist`,
  home: `api/home`,
}

export async function ajax(url, method = 'get', data = {}) {
  return new Promise((resolve, reject) => {
    return mock((res) => {
      resolve(res.data)
    })
  })
  return await new Promise((resolve, reject) => {
    wx.request({
      url: host + url,
      method: method ? method : 'get',
      data: data,
      header: {
        'Content-Type': 'application/json',
      },
      success: (response) => {
        const res = response.data
        if (res.code === 200) {
          resolve(res.data)
        } else {
          uni.showToast({
            title: res.msg,
            icon: 'error',
          })
        }
      },
      fail: (err) => {
        console.log('失败')
        reject(err)
      },
    })
  })
}

function mock(fn) {
  // 模拟数据
  var res = Mock.mock({
    error_code: '200',
    error_msg: '',	
    data: {
      pageTitle: '@ctitle(3,8)',
      newsTitle: '@ctitle(3,8)',
      noticeText: '您如果有什么好的想法，可以联系我们，我们将提供更好的服务。',
      'searchKeyList|3': [
        {
          'id|+1': 1,
          words: '@ctitle(8,18)',
        },
      ],
      'topNewsList|5': [
        {
          'id|+1': 1,
          'rank|+1': 1,
          imgUrl: "@image('200x100', '#4A7BF7','#fff','pic')",
          title: '@ctitle(10,15)',
          city: '@county(true)',
          detail: '@ctitle(10,30)',
          marketing_start: '@datetime()',
          marketing_stop: '@now()',
          hot: '@integer(100,2000)',
          original_price: '@integer(100,3000)',
        },
      ],
      'newsList|5': [
        {
          'id|+1': 1,
          'rank|+1': 1,
          imgUrl: "@image('200x100', '#4A7BF7','#fff','pic')",
          title: '@ctitle(10,15)',
          city: '@county(true)',
          detail: '@ctitle(10,30)',
          marketing_start: '@datetime()',
          marketing_stop: '@now()',
          hot: '@integer(100,2000)',
          original_price: '@integer(100,3000)',
        },
      ],
    },
  })
  // 输出结果
  fn(res)
}
