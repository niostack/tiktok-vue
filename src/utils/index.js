// 获取cookie
export function getCookie(name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) {
    return decodeURIComponent(arr[2])
  } else {
    return ''
  }
}

//get ws url
export function getWsUrl() {
  //if current url contains a port
  if (window.location.port) {
    return 'ws://' + window.location.hostname + ':' + import.meta.env.VITE_WS_PORT
  } else {
    return 'ws://127.0.0.1:' + import.meta.env.VITE_WS_PORT
  }
}
export function getApiUrl() {
  if (window.location.port) {
    return 'http://' + window.location.hostname + ':' + import.meta.env.VITE_WS_PORT
  } else {
    return 'http://127.0.0.1:' + import.meta.env.VITE_API_PORT
  }
}


// 设置cookie,增加到vue实例方便全局调用
export function setCookie(c_name, value, expiredays = 7) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = c_name + '=' + escape(value) + (expiredays == null ? '' : ';expires=' + exdate.toGMTString()) + ';path=/'
}

// 删除cookie
export function delCookie(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval) document.cookie = name + '=;expires=' + exp.toGMTString() + ';path=/'
}

// 获取 url 后参数
export function getRequest() {
  let url = location.search
  let theRequest = {}
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}

// 动态加载js，默认异步，callback=false为同步
export function loadJs(url, callback) {
  let async = true
  if (callback === false) {
    async = false
  }
  const xhr = new XMLHttpRequest()
  xhr.open('get', url, async)
  xhr.send(null)
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.text = xhr.responseText
      document.head.appendChild(script)
      if (callback) {
        callback()
      }
    }
  }
}

// 动态加载css文件
export function loadCss(url) {
  let css = document.createElement('link')
  css.rel = 'stylesheet'
  css.type = 'text/css'
  css.href = url
  document.head.appendChild(css)
}


// 判断是否手机环境
export function isMobile() {
  // # iPad safari 无法通过 navigator标识查找到 'iPad'
  const iPadOS13Up = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
  return /Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent) || iPadOS13Up
}
