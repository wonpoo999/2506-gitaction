import { Link } from "react-router-dom";
import isAuthenticated from "../js/auth";
import Logout from "./Logout";
import "./nav.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">홈</Link>
      {isAuthenticated() && (
        <div>
          <Link to="/myposts">내 포스트</Link>
          <Link to="/boardList">전체 글</Link>
        </div>
      )}
      {isAuthenticated() ? <Logout /> : <Link to="/login">로그인</Link>}
    </nav>
  );
};
export default NavBar;
// NavBar 에서는 로그인 여부에 따라 UI를 결정한다
// ProtectedRoute는 실제 해당 url은 로그인 상태가 아니면 접근할 수 없도록 한다.
//  ㄴ App.jsx에서 Route 설정할 때,로그인 여부에 따라 라우팅 결과(리턴)을 결정하도록 합니다.