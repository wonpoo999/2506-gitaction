const isAuthenticated = () => {
  return !!localStorage.getItem("token");
  // 참에 가까운값 not -> false -> not -> true
};

export default isAuthenticated