let HEADERS = ['access-token', 'token-type', 'client', 'expiry', 'uid']

const apiMiddleware = args => store => next => action => {
  if (!action)
    action = { type: '' }
  let { customHeaders = [], validateAction = 'VALIDATE_TOKEN',  logoutAction = 'LOGOUT', axios } = args;
  HEADERS = [...new Set([...HEADERS, ...customHeaders])]
  if (action.type === validateAction) {
    HEADERS.forEach( token => axios.defaults.headers.common[token] = localStorage.getItem(token) );
  } else if (action.type === logoutAction) {
    HEADERS.forEach( token => {
      localStorage.removeItem(token);
    });
  } else {
    let { headers } = action;
    if (headers) {
      if(headers['access-token']) {
        HEADERS.forEach( token => {
          axios.defaults.headers.common[token] = headers[token];
          localStorage.setItem(token, headers[token])
        })
      }
    }
  }
  return next(action)
}

export default apiMiddleware
