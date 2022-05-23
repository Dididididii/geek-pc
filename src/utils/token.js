const TOKEN_KEY = 'geek_pc_token'

const setToken = (token) => {
  return localStorage.setItem(TOKEN_KEY, token)
}

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

const removeToken = () => {
  return localStorage.removeItem(TOKEN_KEY)
}

export { setToken, getToken, removeToken }
