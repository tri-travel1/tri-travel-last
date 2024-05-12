
const getUserId = (req) => {
  const cookies = req.headers.cookie?.split(";")?.map(cookie =>  cookie.trim().split("=")) ?? [[]]
  const userIdCookie = cookies.find(cookie => cookie[0] == 'userIdCookie')
  if(!userIdCookie) return undefined ;
  const userId = userIdCookie[1]
  return +userId
}

module.exports = getUserId;